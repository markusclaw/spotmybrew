export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { db } from '@/db';
import { comments, beers } from '@/db/schema';
import { eq, and, avg, count } from 'drizzle-orm';
import { getStackServerApp } from '@/lib/stack';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const stackUser = await getStackServerApp().getUser();
  if (!stackUser) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  if (!body.score || body.score < 1 || body.score > 5) {
    return NextResponse.json({ error: 'score must be between 1 and 5' }, { status: 400 });
  }

  // Upsert: one rating per user per beer
  const existing = await db.query.comments.findFirst({
    where: and(eq(comments.userId, stackUser.id), eq(comments.beerId, id)),
  });

  if (existing) {
    await db.update(comments)
      .set({ text: body.review_text || '', score: body.score })
      .where(eq(comments.id, existing.id));
  } else {
    await db.insert(comments).values({
      userId: stackUser.id,
      beerId: id,
      text: body.review_text || '',
      score: body.score,
    });
  }

  // Update beer's aggregate rating
  const [agg] = await db
    .select({ avgScore: avg(comments.score), total: count() })
    .from(comments)
    .where(eq(comments.beerId, id));

  if (agg) {
    await db.update(beers)
      .set({ rating: Number(agg.avgScore) || 0, reviews: agg.total })
      .where(eq(beers.id, id));
  }

  return NextResponse.json({ success: true });
}
