// Cloudflare D1 types (for Workers API)
export interface D1Database {
  prepare(query: string): D1Prepared;
}

export interface D1Prepared {
  bind(...values: any[]): D1Prepared;
  first(column?: string): Promise<any>;
  all(): Promise<{ results: any[] }>;
  run(): Promise<{ success: boolean }>;
}
