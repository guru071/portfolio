/**
 * GOAT'ECH Universal API Client
 * Automatically attaches JWT Authorization Bearer headers from localStorage
 * and standardizes error responses.
 */

const API_BASE_URL = '/api/v1';

export async function apiRequest(endpoint, options = {}) {
  const url = endpoint.startsWith('http') || endpoint.startsWith('/api')
    ? endpoint
    : `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const token = localStorage.getItem('goatech_token');
  const headers = {
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Set Content-Type only if body is not FormData
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // Handle No Content response
  if (response.status === 204) {
    return null;
  }

  // Handle Binary/Blob responses (e.g., APK downloads)
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/vnd.android.package-archive') || contentType.includes('application/octet-stream')) {
    if (!response.ok) {
      throw new Error(`Failed to download binary file: ${response.statusText}`);
    }
    return response.blob();
  }

  // Handle JSON or Text
  let data;
  if (contentType.includes('text/html')) {
    // Vercel SPA fallback hit instead of a real backend API
    throw new Error('API route not found (received HTML instead of JSON)');
  } else if (contentType.includes('application/json')) {
    try {
      data = await response.json();
    } catch (_) {
      data = null;
    }
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    let errorMessage = `HTTP Error ${response.status}: ${response.statusText}`;
    if (data && typeof data === 'object' && data.detail) {
      errorMessage = typeof data.detail === 'string'
        ? data.detail
        : JSON.stringify(data.detail);
    } else if (typeof data === 'string' && data.trim()) {
      errorMessage = data;
    }
    const error = new Error(errorMessage);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export const client = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'GET' }),

  post: (endpoint, body, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'POST',
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),

  put: (endpoint, body, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'PUT',
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),

  patch: (endpoint, body, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'PATCH',
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),

  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),

  upload: (endpoint, formData, options = {}) =>
    apiRequest(endpoint, {
      ...options,
      method: 'POST',
      body: formData,
    }),
};

export default client;
