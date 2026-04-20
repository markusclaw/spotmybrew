// Simple client-side auth service
export const authService = {
  getUser: () => {
    if (typeof window === 'undefined') return null;
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  
  getToken: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
  },
  
  setUser: (user: any) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  setToken: (token: string) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth_token', token);
  },
  
  logout: () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('user');
    localStorage.removeItem('auth_token');
  },
};
