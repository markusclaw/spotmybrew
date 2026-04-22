import { pgTable, pgSchema, text, real, integer, timestamp, uuid, uniqueIndex } from 'drizzle-orm/pg-core';

// Neon Auth auto-syncs users to this table — we reference it but don't manage it
const neonAuthSchema = pgSchema('neon_auth');

export const usersSync = neonAuthSchema.table('users_sync', {
  id: uuid('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
  deletedAt: timestamp('deleted_at'),
  rawJson: text('raw_json'),
});

export const beers = pgTable('beers', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  brewery: text('brewery').notNull(),
  origin: text('origin').notNull(),
  style: text('style').notNull(),
  color: text('color').notNull(),
  abv: real('abv').notNull(),
  ibu: integer('ibu').notNull(),
  description: text('description'),
  rating: real('rating'),
  reviews: integer('reviews').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const likes = pgTable('likes', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => usersSync.id),
  beerId: uuid('beer_id').notNull().references(() => beers.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => [
  uniqueIndex('likes_user_beer_idx').on(table.userId, table.beerId),
]);

export const saves = pgTable('saves', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => usersSync.id),
  beerId: uuid('beer_id').notNull().references(() => beers.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => [
  uniqueIndex('saves_user_beer_idx').on(table.userId, table.beerId),
]);

export const comments = pgTable('comments', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => usersSync.id),
  beerId: uuid('beer_id').notNull().references(() => beers.id),
  text: text('text').notNull(),
  score: integer('score'),
  likes: integer('likes').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => [
  uniqueIndex('comments_user_beer_idx').on(table.userId, table.beerId),
]);

export const follows = pgTable('follows', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => usersSync.id),
  targetType: text('target_type').notNull(),
  targetId: text('target_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => [
  uniqueIndex('follows_unique_idx').on(table.userId, table.targetType, table.targetId),
]);
