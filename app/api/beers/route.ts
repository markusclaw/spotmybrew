export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { db } from '@/db';
import { beers } from '@/db/schema';
import { desc } from 'drizzle-orm';
import { getStackServerApp } from '@/lib/stack';

export async function GET() {
  const allBeers = await db.select().from(beers).orderBy(desc(beers.createdAt));
  return NextResponse.json(allBeers);
}

export async function POST(request: Request) {
  const user = await getStackServerApp().getUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  if (!body.name || !body.brewery) {
    return NextResponse.json({ error: 'name and brewery are required' }, { status: 400 });
  }

  const [beer] = await db.insert(beers).values({
    name: body.name,
    brewery: body.brewery,
    origin: body.origin || 'Unknown',
    style: body.style || 'Unknown',
    color: body.color || 'Golden',
    abv: body.abv || 5.0,
    ibu: body.ibu || 30,
    description: body.description || '',
    rating: 0,
    reviews: 0,
  }).returning();

  return NextResponse.json(beer, { status: 201 });
}
