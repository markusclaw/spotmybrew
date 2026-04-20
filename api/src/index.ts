/**
 * Cloudflare Workers API — Spot My Brew
 *
 * Phase A: Mock beer data layer (no D1 yet)
 * Phase B: Replace MockDB calls with real D1 queries
 */

export interface Env {
  DB: D1Database;
  ENVIRONMENT: string;
  CORS_ORIGIN: string;
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

// ─── Mock beer data (Phase A) ───
const MockDB = {
  beers: [
    {
      id: "1",
      name: "Amber Rebellion",
      brewery: "Cervecería Tecate Craft",
      origin: "Mexico",
      style: "Amber Ale",
      color: "Copper",
      abv: 6.5,
      ibu: 42,
      description: "A balanced amber ale with caramel notes and subtle citrus hop finish. Perfect for a warm evening.",
      rating: 4.3,
      reviews: 28,
    },
    {
      id: "2",
      name: "Hoppy Horizon",
      brewery: "Craft House IPA Brewery",
      origin: "Mexico",
      style: "IPA",
      color: "Golden",
      abv: 7.2,
      ibu: 65,
      description: "Bold and aromatic IPA featuring Cascade and Centennial hops. Crisp finish with pine and citrus notes.",
      rating: 4.7,
      reviews: 45,
    },
    {
      id: "3",
      name: "Midnight Porter",
      brewery: "Dark Matter Brewing Co.",
      origin: "Mexico",
      style: "Porter",
      color: "Black",
      abv: 8.1,
      ibu: 55,
      description: "Rich and roasty porter with chocolate and coffee undertones. Smooth, velvety mouthfeel with dry finish.",
      rating: 4.5,
      reviews: 32,
    },
    {
      id: "4",
      name: "Red Dawn",
      brewery: "Tecate Valley Brewery",
      origin: "Mexico",
      style: "Red Ale",
      color: "Red/Amber",
      abv: 5.8,
      ibu: 35,
      description: "Smooth red ale with malty sweetness and light fruit notes. Approachable and refreshing.",
      rating: 4.1,
      reviews: 22,
    },
    {
      id: "5",
      name: "Sunny Pilsner",
      brewery: "Border Light Brewery",
      origin: "Mexico",
      style: "Pilsner",
      color: "Pale",
      abv: 4.8,
      ibu: 28,
      description: "Clean and crisp Czech-style pilsner. Light and refreshing with a noble hop finish. Perfect for warm days.",
      rating: 4.4,
      reviews: 38,
    },
    {
      id: "6",
      name: "Harvest Gold",
      brewery: "Oaxaca Craft Brewery",
      origin: "Mexico",
      style: "Lager",
      color: "Golden",
      abv: 6.9,
      ibu: 48,
      description: "Golden lager brewed with local grains. Smooth, malty, with light spice character. A regional favorite.",
      rating: 4.2,
      reviews: 35,
    },
    {
      id: "7",
      name: "Midnight Echo Stout",
      brewery: "Eclipse Brewing",
      origin: "Mexico",
      style: "Stout",
      color: "Black",
      abv: 7.8,
      ibu: 62,
      description: "Deep black stout with notes of espresso, dark chocolate, and licorice. Bold and complex.",
      rating: 4.6,
      reviews: 41,
    },
    {
      id: "8",
      name: "Sierra Blonde",
      brewery: "Mountain Peak Brewery",
      origin: "Mexico",
      style: "Pale Ale",
      color: "Golden",
      abv: 5.5,
      ibu: 38,
      description: "Light and easy-drinking pale ale with floral and citrus notes. Great for sessions.",
      rating: 4.0,
      reviews: 26,
    },
    {
      id: "9",
      name: "Desert Storm IPA",
      brewery: "Border Craft Collective",
      origin: "Mexico",
      style: "IPA",
      color: "Amber",
      abv: 7.5,
      ibu: 72,
      description: "Intense and hoppy IPA with grapefruit and pine. Not for the faint of heart.",
      rating: 4.8,
      reviews: 52,
    },
    {
      id: "10",
      name: "Copper Canyon Ale",
      brewery: "Copper Creek Brewery",
      origin: "Mexico",
      style: "Amber Ale",
      color: "Copper",
      abv: 6.2,
      ibu: 44,
      description: "Smooth amber with hints of caramel and wood. A true classic.",
      rating: 4.3,
      reviews: 30,
    },
    {
      id: "11",
      name: "Night Rider Lager",
      brewery: "Nocturnal Brewing",
      origin: "Mexico",
      style: "Lager",
      color: "Brown",
      abv: 5.9,
      ibu: 32,
      description: "Dark lager with subtle malt sweetness. Perfect after a long day.",
      rating: 4.2,
      reviews: 24,
    },
    {
      id: "12",
      name: "Artisan Porter Dark",
      brewery: "Artisan Craft Works",
      origin: "Mexico",
      style: "Porter",
      color: "Dark Brown",
      abv: 7.3,
      ibu: 58,
      description: "Crafted porter with rich chocolate and bread crust flavors.",
      rating: 4.4,
      reviews: 29,
    },
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
  // Health check
  {
    method: "GET",
    pattern: /^\/api\/health$/,
    handler: async (_req, env) =>
      jsonResponse(
        {
          status: "ok",
          service: "spot-my-brew-api",
          environment: env.ENVIRONMENT,
          timestamp: new Date().toISOString(),
        },
        200,
        env
      ),
  },

  // GET /api/beers — list all beers
  {
    method: "GET",
    pattern: /^\/api\/beers$/,
    handler: async (_req, env) => {
      const beers = await MockDB.getAll();
      return jsonResponse(beers, 200, env);
    },
  },

  // GET /api/beers/:id — get one beer
  {
    method: "GET",
    pattern: /^\/api\/beers\/(?<id>[^/]+)$/,
    handler: async (_req, env, params) => {
      const beer = await MockDB.getById(params.id);
      if (!beer) return jsonResponse({ error: "Not found" }, 404, env);
      return jsonResponse(beer, 200, env);
    },
  },

  // POST /api/beers — create new beer
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
      } catch (err) {
        return jsonResponse({ error: "Invalid JSON" }, 400, env);
      }
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
