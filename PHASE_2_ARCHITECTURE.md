# Spot My Brew — Phase 2 Architecture

**Status:** Foundation Complete (Ready for Deployment)  
**Date:** April 20, 2026  
**Version:** 2.0.0

---

## Overview

Phase 2 implements the full-stack persistence layer for Spot My Brew:
- **Authentication** (JWT-based with signup/login)
- **Real Database** (Cloudflare D1 + Workers API)
- **Persistent User Data** (profiles, likes, saves, comments)
- **Social Infrastructure** (follows, activity tracking)

All engagement from Phase 1 now persists to the database. User state is no longer local/mock.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Cloudflare Pages (Frontend)              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Next.js 16.2.4 (Static Export)                      │   │
│  │ - React components (Auth, Beer, Leaderboard)        │   │
│  │ - AuthService (JWT token management)                │   │
│  │ - ApiClient (fetch with Authorization header)       │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ (HTTPS)
┌─────────────────────────────────────────────────────────────┐
│                  Cloudflare Workers (API)                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ TypeScript Workers Runtime                          │   │
│  │ - Auth endpoints (signup, login, verify)            │   │
│  │ - Beer endpoints (list, get, filter)                │   │
│  │ - Engagement endpoints (like, save, comment)        │   │
│  │ - User endpoints (profile, follows)                 │   │
│  │ - JWT verification & validation                     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↕ (SQL)
┌─────────────────────────────────────────────────────────────┐
│              Cloudflare D1 (SQLite Database)                │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ Schema:                                              │   │
│  │ - users (id, email, username, avatar, bio)          │   │
│  │ - beers (id, name, brewery, style, ABV, IBU, etc)   │   │
│  │ - breweries (id, name, origin, bio, website)        │   │
│  │ - likes (user_id, beer_id) — unique constraint      │   │
│  │ - saves (user_id, beer_id) — unique constraint      │   │
│  │ - comments (id, user_id, beer_id, text, likes)      │   │
│  │ - follows (user_id, target_id, target_type)         │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Users
```sql
CREATE TABLE users (
  id TEXT PRIMARY KEY,              -- UUID
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,                  -- placeholder URL
  bio TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### Beers
```sql
CREATE TABLE beers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  brewery TEXT NOT NULL,
  brewery_id TEXT,                  -- FK to breweries (Phase 3)
  origin TEXT NOT NULL,
  style TEXT NOT NULL,
  color TEXT NOT NULL,
  abv REAL NOT NULL,
  ibu INTEGER NOT NULL,
  description TEXT,
  rating REAL,
  reviews INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### Likes (One-Way User→Beer)
```sql
CREATE TABLE likes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  beer_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (beer_id) REFERENCES beers(id),
  UNIQUE(user_id, beer_id)          -- User can like each beer only once
);
```

### Saves (One-Way User→Beer Bookmarks)
```sql
CREATE TABLE saves (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  beer_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (beer_id) REFERENCES beers(id),
  UNIQUE(user_id, beer_id)
);
```

### Comments (Tasting Notes)
```sql
CREATE TABLE comments (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  beer_id TEXT NOT NULL,
  text TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (beer_id) REFERENCES beers(id)
);
```

### Follows (User→User/Brewery)
```sql
CREATE TABLE follows (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  target_type TEXT NOT NULL,        -- 'user' or 'brewery'
  target_id TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  UNIQUE(user_id, target_type, target_id)
);
```

---

## API Endpoints

### Authentication

**POST `/api/auth/signup`**
```json
{
  "email": "user@example.com",
  "username": "john_brew",
  "password": "securepassword"
}
```
Response:
```json
{
  "userId": "uuid-here",
  "token": "jwt-token",
  "user": { "id", "email", "username", "avatar_url", "bio" }
}
```

**POST `/api/auth/login`**
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```
Response: Same as signup

**GET `/api/auth/verify`**
- Header: `Authorization: Bearer {token}`
- Response: `{ user: {...} }`

---

### Beers

**GET `/api/beers`**
- Header: `Authorization: Bearer {token}` (optional)
- Response: Array of beers with user-specific fields (isLiked, isSaved, likes count)

**GET `/api/beers/:beerId`**
- Header: `Authorization: Bearer {token}` (optional)
- Response:
```json
{
  "beer": { "id", "name", "brewery", ..., "likes", "isLiked", "isSaved" },
  "comments": [ { "id", "userId", "userName", "text", "likes", "createdAt" } ]
}
```

---

### Engagement

**POST `/api/beers/:beerId/like`**
- Header: `Authorization: Bearer {token}` (required)
- Body: empty
- Response: `{ success: true }` or `{ success: true, unliked: true }`

**POST `/api/beers/:beerId/save`**
- Header: `Authorization: Bearer {token}` (required)
- Body: empty
- Response: Same as like

**POST `/api/beers/:beerId/comment`**
- Header: `Authorization: Bearer {token}` (required)
- Body: `{ "text": "Great beer!" }`
- Response:
```json
{
  "comment": {
    "id", "userId", "text", "userName", "userAvatar", "likes", "createdAt"
  }
}
```

---

### Users

**GET `/api/users/:userId`**
- Header: `Authorization: Bearer {token}` (optional)
- Response:
```json
{
  "id", "email", "username", "avatar_url", "bio",
  "totalLikes", "totalComments", "followers"
}
```

---

## Authentication Flow

1. **Signup / Login**
   - User submits email + password → Workers API
   - API generates JWT token (7-day expiry)
   - Frontend stores token in localStorage
   - AuthService provides getter/setter for token

2. **Per-Request Auth**
   - Frontend adds `Authorization: Bearer {token}` header
   - Workers validates JWT signature
   - JWT payload contains `sub` (userId) and `exp` (expiry)
   - If invalid/expired, return 401 Unauthorized

3. **State Persistence**
   - Frontend stores `auth_token` and `auth_user` in localStorage
   - On app load, AuthService calls `GET /api/auth/verify`
   - If valid, user is authenticated; if invalid, user is logged out

---

## Frontend Integration

### AuthService (`src/lib/auth.ts`)
```typescript
authService.signup(email, username, password)  // Returns JWT + user
authService.login(email, password)             // Returns JWT + user
authService.verify()                           // Checks if token is still valid
authService.logout()                           // Clears localStorage
authService.getToken()                         // Returns current JWT
authService.getUser()                          // Returns current user
authService.isAuthenticated()                  // Returns boolean
```

### ApiClient (`src/lib/api.ts`)
```typescript
apiClient.getBeers()                           // Returns Beer[]
apiClient.getBeer(beerId)                      // Returns Beer + comments
apiClient.likeBeer(beerId)                     // Toggle like
apiClient.saveBeer(beerId)                     // Toggle save
apiClient.addComment(beerId, text)             // Returns Comment
```

### AuthModal (`src/components/AuthModal.tsx`)
- Signup/Login form with email, username (signup only), password
- Mode toggle between login and signup
- Error handling and loading state
- Calls `authService.signup()` or `authService.login()`

---

## Deployment Steps

### 1. Create D1 Database
```bash
cd ~/Projects/staged/spotmybrew/api
wrangler d1 create spotmybrew-db
# Note the database ID from output
```

### 2. Update Wrangler Config
```toml
[env.production.d1]
binding = "DB"
database_name = "spotmybrew-db"
database_id = "your-database-id-here"

[env.production.vars]
JWT_SECRET = "your-secret-key-here"  # Use strong random value
```

### 3. Run Migrations
```bash
wrangler d1 migrations apply spotmybrew-db --remote
```

### 4. Deploy API
```bash
export CLOUDFLARE_API_TOKEN=$(cat ~/.openclaw/credentials/cloudflare-token.txt | tr -d '[:space:]')
wrangler deploy --env production
```

### 5. Get API URL
After deployment, note the Workers URL:
```
https://spotmybrew-api.workers.dev
```

### 6. Update Frontend .env.production
```
NEXT_PUBLIC_API_URL=https://spotmybrew-api.workers.dev/api
```

### 7. Build & Deploy Frontend
```bash
cd ~/Projects/staged/spotmybrew/site
yarn build
npx wrangler pages deploy out --project-name=spotmybrew
```

---

## Testing Checklist

- [ ] Signup creates user in D1
- [ ] Login returns valid JWT
- [ ] JWT persists in localStorage
- [ ] Like/Unlike toggles like count
- [ ] Save/Unsave toggles in user's saves
- [ ] Comments appear in modal and database
- [ ] Logout clears token
- [ ] Unauthorized requests return 401
- [ ] Expired tokens are rejected

---

## Security Notes

**JWT Secret:**
- Currently hardcoded as placeholder
- Should be environment variable (done in wrangler.toml)
- Generate strong random string: `openssl rand -hex 32`

**Password Storage:**
- Currently using basic btoa() encoding (NOT SECURE)
- Phase 3: Implement bcrypt hashing via Cloudflare Worker dependency

**Database Access:**
- D1 is only accessible from Workers (no direct SQL client needed)
- Workers validates JWT before database operations
- No unauthenticated write access

**CORS:**
- Workers API should allow requests from frontend origin
- Add CORS headers if calling from different domain

---

## Phase 3 Planning

- [ ] Real password hashing (bcrypt)
- [ ] Activity feed (show friend's likes/comments)
- [ ] Brewery profiles & follow system
- [ ] Smart recommendations (content-based filtering)
- [ ] Notifications (new brewery releases, friend activity)
- [ ] Beer submission workflow (user-contributed beers)
- [ ] Social share (WhatsApp, Instagram, etc.)
- [ ] Advanced search & filtering (server-side)

---

## Notes

- Phase 2 uses mock beer data (20 beers)
- Phase 3 will add brewery management and beer submissions
- All engagement data is now persistent and user-specific
- Leaderboard queries user likes from database
- Comments are loaded per-beer in detail modal
