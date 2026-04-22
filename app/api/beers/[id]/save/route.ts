export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { db } from '@/db';
import { saves } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { getStackServerApp } from '@/lib/stack';

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const stackUser = await getStackServerApp().getUser();
  if (!stackUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const existing = await db.query.saves.findFirst({
    where: and(eq(saves.userId, stackUser.id), eq(saves.beerId, id)),
  });

  if (existing) {
    await db.delete(saves).where(eq(saves.id, existing.id));
    return NextResponse.json({ success: true, unsaved: true });
  }

  await db.insert(saves).values({ userId: stackUser.id, beerId: id });
  return NextResponse.json({ success: true });
}
