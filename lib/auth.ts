// Auth service — JWT token management for Spot My Brew Phase 2

const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export const authService = {
  // ── Storage helpers ──
  getUser: () => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('auth_user');
    return user ? JSON.parse(user) : null;
  },

  getToken: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
  },

  setUser: (user: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth_user', JSON.stringify(user));
  },

  setToken: (token: string) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth_token', token);
  },

  isAuthenticated: () => {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('auth_token');
  },

  logout: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_token');
  },

  // ── API calls ──
  signup: async (email: string, username: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Signup failed');
    authService.setToken(data.token);
    authService.setUser(data.user);
    return data;
  },

  login: async (email: string, password: string) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Login failed');
    authService.setToken(data.token);
    authService.setUser(data.user);
    return data;
  },

  verify: async () => {
    const token = authService.getToken();
    if (!token) return null;
    try {
      const res = await fetch(`${API_URL}/auth/verify`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!res.ok) {
        authService.logout();
        return null;
      }
      const data = await res.json();
      authService.setUser(data.user);
      return data.user;
    } catch {
      return null;
    }
  },
};
