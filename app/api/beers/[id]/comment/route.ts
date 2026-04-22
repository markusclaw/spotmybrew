import { NextResponse } from 'next/server';
import { db } from '@/db';
import { comments, beers, usersSync } from '@/db/schema';
import { eq, and, sql } from 'drizzle-orm';
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
  const { text, score } = body;

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Comment text is required' }, { status: 400 });
  }

  if (score !== undefined && (typeof score !== 'number' || score < 1 || score > 5)) {
    return NextResponse.json({ error: 'Score must be between 1 and 5' }, { status: 400 });
  }

  // Upsert: one comment per user per beer
  const existing = await db.query.comments.findFirst({
    where: and(eq(comments.userId, stackUser.id), eq(comments.beerId, id)),
  });

  let comment;
  if (existing) {
    [comment] = await db
      .update(comments)
      .set({ text: text.trim(), score: score ?? existing.score })
      .where(eq(comments.id, existing.id))
      .returning();
  } else {
    [comment] = await db
      .insert(comments)
      .values({ userId: stackUser.id, beerId: id, text: text.trim(), score: score ?? null })
      .returning();

    // Update beer's review count
    await db
      .update(beers)
      .set({ reviews: sql`${beers.reviews} + 1` })
      .where(eq(beers.id, id));
  }

  // Recalculate beer rating from all scored comments
  if (score !== undefined) {
    const allScores = await db
      .select({ score: comments.score })
      .from(comments)
      .where(and(eq(comments.beerId, id)));

    const scored = allScores.filter((c) => c.score !== null);
    if (scored.length > 0) {
      const avg = scored.reduce((sum, c) => sum + (c.score ?? 0), 0) / scored.length;
      await db
        .update(beers)
        .set({ rating: Math.round(avg * 10) / 10 })
        .where(eq(beers.id, id));
    }
  }

  // Return comment with user info
  const result = await db
    .select({
      id: comments.id,
      userId: comments.userId,
      username: usersSync.name,
      score: comments.score,
      text: comments.text,
      createdAt: comments.createdAt,
    })
    .from(comments)
    .innerJoin(usersSync, eq(comments.userId, usersSync.id))
    .where(eq(comments.id, comment.id));

  return NextResponse.json({ comment: result[0] }, { status: 201 });
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const result = await db
    .select({
      id: comments.id,
      userId: comments.userId,
      username: usersSync.name,
      score: comments.score,
      text: comments.text,
      createdAt: comments.createdAt,
    })
    .from(comments)
    .innerJoin(usersSync, eq(comments.userId, usersSync.id))
    .where(eq(comments.beerId, id));

  return NextResponse.json(result);
}
