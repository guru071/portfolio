import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Parse token from URL if returning from OAuth
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('goatech_token', token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Validate token and get user — fail silently if backend is offline
    const checkAuth = async () => {
      const storedToken = localStorage.getItem('goatech_token');
      if (storedToken) {
        try {
          const response = await api.get('/auth/me');
          if (response && typeof response === 'object' && response.email) {
            setUser(response);
          } else {
            localStorage.removeItem('goatech_token');
            setUser(null);
          }
        } catch (error) {
          console.warn("Auth check failed (backend may be offline):", error?.message);
          localStorage.removeItem('goatech_token');
          setUser(null);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const loginWithEmail = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('goatech_token', response.data.access_token);
    setUser(response.data.user);
    return response.data.user;
  };

  const registerWithEmail = async (email, password, name) => {
    const response = await api.post('/auth/customer/register', { 
      email, password, full_name: name 
    });
    localStorage.setItem('goatech_token', response.data.access_token);
    setUser(response.data.user);
    return response.data.user;
  };

  const loginWithProvider = (provider) => {
    // Redirect browser directly to our FastAPI backend OAuth endpoint
    window.location.href = `http://localhost:8000/api/v1/oauth/${provider}/login`;
  };

  const logout = () => {
    localStorage.removeItem('goatech_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin' || user?.role === 'owner',
      isLoading: loading,
      loading: loading,
      login: loginWithEmail,
      register: registerWithEmail,
      loginWithProvider,
      logout
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
