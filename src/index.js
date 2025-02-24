// Ortama göre uygun BACKEND_URL'yi belirleme
const getBackendUrl = () => {
    if (typeof process !== "undefined" && process.env) {
      return (
        process.env.NEXT_PUBLIC_BACKEND_URL ||
        process.env.EXPO_PUBLIC_BACKEND_URL ||
        process.env.REACT_APP_BACKEND_URL ||
        process.env.BACKEND_URL || // Varsayılan
        "http://localhost:8000"
      );
    }
    return "http://localhost:8000"; // Varsayılan URL
  };
  
  const backendUrl = getBackendUrl();

/**
 * HTTP POST isteği gönderir.
 * @param {Object} options - İstek için gerekli parametreler.
 * @param {string} options.endpoint - API endpointi.
 * @param {Object|null} options.body - Gönderilecek veri.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @param {string|null} options.csrfToken - CSRF token.
 * @param {string|null} options.customUrl - Özel bir URL belirtmek için.
 * @param {boolean} options.api - API dizinine ekleme durumu.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const post = async ({ endpoint, body = null, bearerToken = null, csrfToken = null, customUrl = null, api = true }) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (bearerToken) {
    headers['Authorization'] = `Bearer ${bearerToken}`;
  }

  if (csrfToken) {
    headers['X-CSRF-TOKEN'] = csrfToken;
  }

  const baseURL = api ? `${backendUrl}/api` : backendUrl;
  const responseUrl = customUrl ? customUrl : `${baseURL}/${endpoint}`;

  const response = await fetch(responseUrl, {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: body ? JSON.stringify(body) : null,
  });

  return await response.json();
};

/**
 * HTTP GET isteği gönderir.
 * @param {Object} options - İstek için gerekli parametreler.
 * @param {string} options.endpoint - API endpointi.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @param {boolean} options.api - API dizinine ekleme durumu.
 * @param {string|null} options.customUrl - Özel bir URL belirtmek için.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const get = async ({ endpoint, bearerToken = null, api = true, customUrl = null }) => {
  const headers = {};

  if (bearerToken) {
    headers['Authorization'] = `Bearer ${bearerToken}`;
  }

  const baseURL = api ? `${backendUrl}/api` : backendUrl;
  const responseUrl = customUrl ? customUrl : `${baseURL}/${endpoint}`;

  const response = await fetch(responseUrl, {
    method: 'GET',
    headers: headers,
    credentials: 'include',
  });

  return await response.json();
};
