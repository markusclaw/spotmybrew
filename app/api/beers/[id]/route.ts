import { NextResponse } from 'next/server';
import { db } from '@/db';
import { beers, comments, usersSync, likes, saves } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { getStackServerApp } from '@/lib/stack';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const beer = await db.query.beers.findFirst({
    where: eq(beers.id, id),
  });

  if (!beer) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  // Fetch ratings with user info from Neon Auth's synced users table
  const ratings = await db
    .select({
      id: comments.id,
      userId: comments.userId,
      username: usersSync.name,
      email: usersSync.email,
      score: comments.score,
      review_text: comments.text,
      created_at: comments.createdAt,
    })
    .from(comments)
    .innerJoin(usersSync, eq(comments.userId, usersSync.id))
    .where(eq(comments.beerId, id));

  // Check if current user has rated/liked/saved
  let userRating = null;
  let isLiked = false;
  let isSaved = false;

  const stackUser = await getStackServerApp().getUser();
  if (stackUser) {
    userRating = await db.query.comments.findFirst({
      where: and(eq(comments.beerId, id), eq(comments.userId, stackUser.id)),
    });

    const likeRow = await db.query.likes.findFirst({
      where: and(eq(likes.beerId, id), eq(likes.userId, stackUser.id)),
    });
    isLiked = !!likeRow;

    const saveRow = await db.query.saves.findFirst({
      where: and(eq(saves.beerId, id), eq(saves.userId, stackUser.id)),
    });
    isSaved = !!saveRow;
  }

  return NextResponse.json({ beer, ratings, userRating, isLiked, isSaved });
}
