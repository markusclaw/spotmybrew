export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { db } from '@/db';
import { likes } from '@/db/schema';
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

  const existing = await db.query.likes.findFirst({
    where: and(eq(likes.userId, stackUser.id), eq(likes.beerId, id)),
  });

  if (existing) {
    await db.delete(likes).where(eq(likes.id, existing.id));
    return NextResponse.json({ success: true, unliked: true });
  }

  await db.insert(likes).values({ userId: stackUser.id, beerId: id });
  return NextResponse.json({ success: true });
}
