/**
 * Cloudflare Workers API — Spot My Brew
 *
 * Phase 2: JWT Auth + D1 database + Mock beer data
 */

export interface Env {
  DB: D1Database;
  ENVIRONMENT: string;
  CORS_ORIGIN: string;
  JWT_SECRET: string;
}

export interface Beer {
  id: string;
  name: string;
  brewery: string;
  origin: string;
  style: string;
  color: string;
  abv: number;
  ibu: number;
  description: string;
  rating?: number;
  reviews?: number;
}

// ─── CORS helpers ───
function corsHeaders(origin: string): HeadersInit {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

function jsonResponse(data: unknown, status = 200, env?: Env): Response {
  const origin = env?.CORS_ORIGIN || "*";
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

// ─── JWT Utilities (Web Crypto API — no npm needed) ───
async function getJWTKey(secret: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function createJWT(payload: object, secret: string): Promise<string> {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const body = btoa(JSON.stringify(payload))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  const key = await getJWTKey(secret);
  const encoder = new TextEncoder();
  const data = encoder.encode(`${header}.${body}`);
  const signature = await crypto.subtle.sign("HMAC", key, data);

  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${header}.${body}.${sig}`;
}

async function verifyJWT(token: string, secret: string): Promise<any | null> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const key = await getJWTKey(secret);
    const encoder = new TextEncoder();
    const data = encoder.encode(`${parts[0]}.${parts[1]}`);

    const sigBytes = Uint8Array.from(
      atob(parts[2].replace(/-/g, "+").replace(/_/g, "/")),
      (c) => c.charCodeAt(0)
    );

    const valid = await crypto.subtle.verify("HMAC", key, sigBytes, data);
    if (!valid) return null;

    const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;

    return payload;
  } catch {
    return null;
  }
}

// Simple password hash using SHA-256 via Web Crypto
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return btoa(String.fromCharCode(...new Uint8Array(hash)));
}

// Extract user from Authorization header
async function getAuthUser(request: Request, env: Env): Promise<any | null> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7);
  const secret = env.JWT_SECRET || "spotmybrew-dev-secret";
  return verifyJWT(token, secret);
}

// Generate a simple UUID-like ID
function generateId(): string {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// ─── Mock beer data (20 beers) ───
const MockDB = {
  beers: [
    { id: "1", name: "Amber Rebellion", brewery: "Cervecería Tecate Craft", origin: "Mexico", style: "Amber Ale", color: "Copper", abv: 6.5, ibu: 42, description: "A balanced amber ale with caramel notes and subtle citrus hop finish. Perfect for a warm evening.", rating: 4.3, reviews: 28 },
    { id: "2", name: "Hoppy Horizon", brewery: "Craft House IPA Brewery", origin: "Mexico", style: "IPA", color: "Golden", abv: 7.2, ibu: 65, description: "Bold and aromatic IPA featuring Cascade and Centennial hops. Crisp finish with pine and citrus notes.", rating: 4.7, reviews: 45 },
    { id: "3", name: "Midnight Porter", brewery: "Dark Matter Brewing Co.", origin: "Mexico", style: "Porter", color: "Black", abv: 8.1, ibu: 55, description: "Rich and roasty porter with chocolate and coffee undertones. Smooth, velvety mouthfeel with dry finish.", rating: 4.5, reviews: 32 },
    { id: "4", name: "Red Dawn", brewery: "Tecate Valley Brewery", origin: "Mexico", style: "Red Ale", color: "Red/Amber", abv: 5.8, ibu: 35, description: "Smooth red ale with malty sweetness and light fruit notes. Approachable and refreshing.", rating: 4.1, reviews: 22 },
    { id: "5", name: "Sunny Pilsner", brewery: "Border Light Brewery", origin: "Mexico", style: "Pilsner", color: "Pale", abv: 4.8, ibu: 28, description: "Clean and crisp Czech-style pilsner. Light and refreshing with a noble hop finish. Perfect for warm days.", rating: 4.4, reviews: 38 },
    { id: "6", name: "Harvest Gold", brewery: "Oaxaca Craft Brewery", origin: "Mexico", style: "Lager", color: "Golden", abv: 6.9, ibu: 48, description: "Golden lager brewed with local grains. Smooth, malty, with light spice character. A regional favorite.", rating: 4.2, reviews: 35 },
    { id: "7", name: "Midnight Echo Stout", brewery: "Eclipse Brewing", origin: "Mexico", style: "Stout", color: "Black", abv: 7.8, ibu: 62, description: "Deep black stout with notes of espresso, dark chocolate, and licorice. Bold and complex.", rating: 4.6, reviews: 41 },
    { id: "8", name: "Sierra Blonde", brewery: "Mountain Peak Brewery", origin: "Mexico", style: "Pale Ale", color: "Golden", abv: 5.5, ibu: 38, description: "Light and easy-drinking pale ale with floral and citrus notes. Great for sessions.", rating: 4.0, reviews: 26 },
    { id: "9", name: "Desert Storm IPA", brewery: "Border Craft Collective", origin: "Mexico", style: "IPA", color: "Amber", abv: 7.5, ibu: 72, description: "Intense and hoppy IPA with grapefruit and pine. Not for the faint of heart.", rating: 4.8, reviews: 52 },
    { id: "10", name: "Copper Canyon Ale", brewery: "Copper Creek Brewery", origin: "Mexico", style: "Amber Ale", color: "Copper", abv: 6.2, ibu: 44, description: "Smooth amber with hints of caramel and wood. A true classic.", rating: 4.3, reviews: 30 },
    { id: "11", name: "Night Rider Lager", brewery: "Nocturnal Brewing", origin: "Mexico", style: "Lager", color: "Brown", abv: 5.9, ibu: 32, description: "Dark lager with subtle malt sweetness. Perfect after a long day.", rating: 4.2, reviews: 24 },
    { id: "12", name: "Artisan Porter Dark", brewery: "Artisan Craft Works", origin: "Mexico", style: "Porter", color: "Dark Brown", abv: 7.3, ibu: 58, description: "Crafted porter with rich chocolate and bread crust flavors.", rating: 4.4, reviews: 29 },
    { id: "13", name: "Golden Gate Wheat", brewery: "Pacific Craft Co.", origin: "USA", style: "Wheat", color: "Pale", abv: 4.5, ibu: 18, description: "Light and hazy wheat beer with hints of citrus and coriander.", rating: 4.1, reviews: 19 },
    { id: "14", name: "Baja Session IPA", brewery: "Coastal Brewing", origin: "Mexico", style: "IPA", color: "Golden", abv: 4.2, ibu: 45, description: "Low-ABV session IPA packed with tropical hop flavor. Refreshing and sessionable.", rating: 4.3, reviews: 27 },
    { id: "15", name: "Obsidian Stout", brewery: "Volcanic Ales", origin: "Mexico", style: "Stout", color: "Black", abv: 9.2, ibu: 70, description: "Imperial stout with roasted malt, dark fruit, and vanilla. A sipper.", rating: 4.9, reviews: 63 },
    { id: "16", name: "Marigold Saison", brewery: "Flores Brewing", origin: "Mexico", style: "Saison", color: "Golden", abv: 6.1, ibu: 25, description: "Farmhouse saison brewed with local marigold petals. Floral and spicy finish.", rating: 4.5, reviews: 34 },
    { id: "17", name: "Cerro Rojo Red", brewery: "Highland Cervecería", origin: "Mexico", style: "Red Ale", color: "Red/Amber", abv: 5.6, ibu: 38, description: "A hearty red ale with toasted malt and a dry hop finish.", rating: 4.2, reviews: 21 },
    { id: "18", name: "Pacific Pale Ale", brewery: "West Coast Collective", origin: "USA", style: "Pale Ale", color: "Golden", abv: 5.3, ibu: 42, description: "Clean West Coast pale ale with pine and citrus notes. A crowd-pleaser.", rating: 4.0, reviews: 18 },
    { id: "19", name: "Tequila Barrel Lager", brewery: "Barrica Brewing", origin: "Mexico", style: "Lager", color: "Amber", abv: 6.8, ibu: 20, description: "Lager aged in tequila barrels for a unique agave twist. Smooth and unexpected.", rating: 4.6, reviews: 48 },
    { id: "20", name: "Piloncillo Porter", brewery: "Dulce Craft Ales", origin: "Mexico", style: "Porter", color: "Dark Brown", abv: 7.0, ibu: 50, description: "Porter brewed with piloncillo (raw cane sugar) for a caramel-sweet, roasty finish.", rating: 4.4, reviews: 36 },
  ] as Beer[],

  async getAll(): Promise<Beer[]> {
    return this.beers;
  },

  async getById(id: string): Promise<Beer | null> {
    return this.beers.find((beer) => beer.id === id) || null;
  },

  async create(data: Partial<Beer>): Promise<Beer> {
    const beer: Beer = {
      id: String(this.beers.length + 1),
      name: data.name || "Unknown",
      brewery: data.brewery || "Unknown",
      origin: data.origin || "Unknown",
      style: data.style || "Unknown",
      color: data.color || "Golden",
      abv: data.abv || 5.0,
      ibu: data.ibu || 30,
      description: data.description || "",
      rating: 0,
      reviews: 0,
    };
    this.beers.push(beer);
    return beer;
  },
};

// ─── Router ───
type RouteHandler = (request: Request, env: Env, params: Record<string, string>) => Promise<Response>;

interface Route {
  method: string;
  pattern: RegExp;
  handler: RouteHandler;
}

const routes: Route[] = [
  // ── Health check ──
  {
    method: "GET",
    pattern: /^\/api\/health$/,
    handler: async (_req, env) =>
      jsonResponse({ status: "ok", service: "spot-my-brew-api", environment: env.ENVIRONMENT, timestamp: new Date().toISOString() }, 200, env),
  },

  // ── POST /api/auth/signup ──
  {
    method: "POST",
    pattern: /^\/api\/auth\/signup$/,
    handler: async (req, env) => {
      try {
        const body = await req.json() as { email?: string; username?: string; password?: string };
        const { email, username, password } = body;

        if (!email || !username || !password) {
          return jsonResponse({ error: "email, username, and password are required" }, 400, env);
        }

        const passwordHash = await hashPassword(password);
        const userId = generateId();
        const avatarUrl = `https://api.dicebear.com/7.x/thumbs/svg?seed=${username}`;

        // Try D1 if available
        if (env.DB) {
          try {
            const existing = await env.DB.prepare("SELECT id FROM users WHERE email = ? OR username = ?")
              .bind(email, username)
              .first();
            if (existing) {
              return jsonResponse({ error: "Email or username already taken" }, 409, env);
            }

            await env.DB.prepare(
              "INSERT INTO users (id, email, username, password_hash, avatar_url) VALUES (?, ?, ?, ?, ?)"
            ).bind(userId, email, username, passwordHash, avatarUrl).run();
          } catch (dbErr) {
            console.error("D1 error during signup:", dbErr);
            return jsonResponse({ error: "Database error during signup" }, 500, env);
          }
        }

        const secret = env.JWT_SECRET || "spotmybrew-dev-secret";
        const token = await createJWT(
          { sub: userId, email, username, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
          secret
        );

        const user = { id: userId, email, username, avatar_url: avatarUrl, bio: "" };
        return jsonResponse({ userId, token, user }, 201, env);
      } catch (err) {
        console.error("Signup error:", err);
        return jsonResponse({ error: "Invalid request" }, 400, env);
      }
    },
  },

  // ── POST /api/auth/login ──
  {
    method: "POST",
    pattern: /^\/api\/auth\/login$/,
    handler: async (req, env) => {
      try {
        const body = await req.json() as { email?: string; password?: string };
        const { email, password } = body;

        if (!email || !password) {
          return jsonResponse({ error: "email and password are required" }, 400, env);
        }

        const passwordHash = await hashPassword(password);

        let userId: string;
        let username: string;
        let avatarUrl: string;
        let bio: string = "";

        // Try D1 if available
        if (env.DB) {
          try {
            const user = await env.DB.prepare(
              "SELECT id, email, username, password_hash, avatar_url, bio FROM users WHERE email = ?"
            ).bind(email).first() as any;

            if (!user || user.password_hash !== passwordHash) {
              return jsonResponse({ error: "Invalid email or password" }, 401, env);
            }

            userId = user.id;
            username = user.username;
            avatarUrl = user.avatar_url || `https://api.dicebear.com/7.x/thumbs/svg?seed=${user.username}`;
            bio = user.bio || "";
          } catch (dbErr) {
            console.error("D1 error during login:", dbErr);
            return jsonResponse({ error: "Database error during login" }, 500, env);
          }
        } else {
          // No D1 — dev fallback (demo user only)
          return jsonResponse({ error: "Authentication requires database setup" }, 503, env);
        }

        const secret = env.JWT_SECRET || "spotmybrew-dev-secret";
        const token = await createJWT(
          { sub: userId, email, username, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 },
          secret
        );

        const user = { id: userId, email, username, avatar_url: avatarUrl, bio };
        return jsonResponse({ userId, token, user }, 200, env);
      } catch (err) {
        console.error("Login error:", err);
        return jsonResponse({ error: "Invalid request" }, 400, env);
      }
    },
  },

  // ── GET /api/auth/verify ──
  {
    method: "GET",
    pattern: /^\/api\/auth\/verify$/,
    handler: async (req, env) => {
      const payload = await getAuthUser(req, env);
      if (!payload) {
        return jsonResponse({ error: "Invalid or expired token" }, 401, env);
      }

      let user = { id: payload.sub, email: payload.email, username: payload.username, avatar_url: "", bio: "" };

      if (env.DB) {
        try {
          const dbUser = await env.DB.prepare(
            "SELECT id, email, username, avatar_url, bio FROM users WHERE id = ?"
          ).bind(payload.sub).first() as any;
          if (dbUser) {
            user = { id: dbUser.id, email: dbUser.email, username: dbUser.username, avatar_url: dbUser.avatar_url || "", bio: dbUser.bio || "" };
          }
        } catch {}
      }

      return jsonResponse({ user }, 200, env);
    },
  },

  // ── GET /api/beers — list all beers ──
  {
    method: "GET",
    pattern: /^\/api\/beers$/,
    handler: async (_req, env) => {
      const beers = await MockDB.getAll();
      return jsonResponse(beers, 200, env);
    },
  },

  // ── GET /api/beers/:id — get one beer ──
  {
    method: "GET",
    pattern: /^\/api\/beers\/(?<id>[^/]+)$/,
    handler: async (req, env, params) => {
      const beer = await MockDB.getById(params.id);
      if (!beer) return jsonResponse({ error: "Not found" }, 404, env);

      // Fetch ratings/comments from D1 if available
      let ratings: any[] = [];
      let userRating = null;

      if (env.DB) {
        try {
          const result = await env.DB.prepare(
            "SELECT c.*, u.username, u.avatar_url FROM comments c JOIN users u ON c.user_id = u.id WHERE c.beer_id = ? ORDER BY c.created_at DESC"
          ).bind(params.id).all();
          ratings = result.results || [];

          const authUser = await getAuthUser(req, env);
          if (authUser) {
            userRating = await env.DB.prepare(
              "SELECT * FROM comments WHERE beer_id = ? AND user_id = ?"
            ).bind(params.id, authUser.sub).first();
          }
        } catch {}
      }

      return jsonResponse({ beer, ratings, userRating }, 200, env);
    },
  },

  // ── POST /api/beers — create new beer ──
  {
    method: "POST",
    pattern: /^\/api\/beers$/,
    handler: async (req, env) => {
      try {
        const body = (await req.json()) as Partial<Beer>;
        if (!body.name || !body.brewery) {
          return jsonResponse({ error: "name and brewery are required" }, 400, env);
        }
        const beer = await MockDB.create(body);
        return jsonResponse(beer, 201, env);
      } catch {
        return jsonResponse({ error: "Invalid JSON" }, 400, env);
      }
    },
  },

  // ── POST /api/beers/:id/rate ──
  {
    method: "POST",
    pattern: /^\/api\/beers\/(?<id>[^/]+)\/rate$/,
    handler: async (req, env, params) => {
      const authUser = await getAuthUser(req, env);
      if (!authUser) return jsonResponse({ error: "Unauthorized" }, 401, env);

      try {
        const body = await req.json() as { score: number; review_text?: string };
        if (!body.score || body.score < 1 || body.score > 5) {
          return jsonResponse({ error: "score must be between 1 and 5" }, 400, env);
        }

        if (env.DB) {
          const commentId = generateId();
          await env.DB.prepare(
            "INSERT INTO comments (id, user_id, beer_id, text, likes) VALUES (?, ?, ?, ?, 0) ON CONFLICT(id) DO UPDATE SET text = excluded.text"
          ).bind(commentId, authUser.sub, params.id, body.review_text || "").run();
        }

        return jsonResponse({ success: true }, 200, env);
      } catch {
        return jsonResponse({ error: "Invalid request" }, 400, env);
      }
    },
  },

  // ── POST /api/beers/:id/like ──
  {
    method: "POST",
    pattern: /^\/api\/beers\/(?<id>[^/]+)\/like$/,
    handler: async (req, env, params) => {
      const authUser = await getAuthUser(req, env);
      if (!authUser) return jsonResponse({ error: "Unauthorized" }, 401, env);

      if (env.DB) {
        try {
          const existing = await env.DB.prepare(
            "SELECT id FROM likes WHERE user_id = ? AND beer_id = ?"
          ).bind(authUser.sub, params.id).first();

          if (existing) {
            await env.DB.prepare("DELETE FROM likes WHERE user_id = ? AND beer_id = ?")
              .bind(authUser.sub, params.id).run();
            return jsonResponse({ success: true, unliked: true }, 200, env);
          } else {
            const likeId = generateId();
            await env.DB.prepare("INSERT INTO likes (id, user_id, beer_id) VALUES (?, ?, ?)")
              .bind(likeId, authUser.sub, params.id).run();
            return jsonResponse({ success: true }, 200, env);
          }
        } catch (err) {
          return jsonResponse({ error: "Database error" }, 500, env);
        }
      }

      return jsonResponse({ success: true }, 200, env);
    },
  },

  // ── POST /api/beers/:id/save ──
  {
    method: "POST",
    pattern: /^\/api\/beers\/(?<id>[^/]+)\/save$/,
    handler: async (req, env, params) => {
      const authUser = await getAuthUser(req, env);
      if (!authUser) return jsonResponse({ error: "Unauthorized" }, 401, env);

      if (env.DB) {
        try {
          const existing = await env.DB.prepare(
            "SELECT id FROM saves WHERE user_id = ? AND beer_id = ?"
          ).bind(authUser.sub, params.id).first();

          if (existing) {
            await env.DB.prepare("DELETE FROM saves WHERE user_id = ? AND beer_id = ?")
              .bind(authUser.sub, params.id).run();
            return jsonResponse({ success: true, unsaved: true }, 200, env);
          } else {
            const saveId = generateId();
            await env.DB.prepare("INSERT INTO saves (id, user_id, beer_id) VALUES (?, ?, ?)")
              .bind(saveId, authUser.sub, params.id).run();
            return jsonResponse({ success: true }, 200, env);
          }
        } catch {
          return jsonResponse({ error: "Database error" }, 500, env);
        }
      }

      return jsonResponse({ success: true }, 200, env);
    },
  },
];

// ─── Main fetch handler ───
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method;

    // Handle CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(env.CORS_ORIGIN || "*"),
      });
    }

    // Match route
    for (const route of routes) {
      if (route.method !== method) continue;
      const match = url.pathname.match(route.pattern);
      if (match) {
        const params = match.groups || {};
        try {
          return await route.handler(request, env, params);
        } catch (err) {
          console.error("Route error:", err);
          return jsonResponse({ error: "Internal server error" }, 500, env);
        }
      }
    }

    return jsonResponse({ error: "Not found", path: url.pathname }, 404, env);
  },
};
