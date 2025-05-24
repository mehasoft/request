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
 * @param {Object|FormData|null} options.body - Gönderilecek veri.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @param {string|null} options.csrfToken - CSRF token.
 * @param {string|null} options.customUrl - Özel bir URL belirtmek için.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const post = async ({ endpoint, body = null, bearerToken = null, csrfToken = null, customUrl = null }) => {
  const headers = {};

  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }

  if (csrfToken) {
    headers["X-CSRF-TOKEN"] = csrfToken;
  }

  const responseUrl = customUrl ? customUrl : `${backendUrl}/api/${endpoint}`;

  const response = await fetch(responseUrl, {
    method: "POST",
    headers: headers,
    credentials: "include",
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
  });

  return await response.json();
};

/**
 * HTTP GET isteği gönderir.
 * @param {Object} options - İstek için gerekli parametreler.
 * @param {string} options.endpoint - API endpointi.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const get = async ({ endpoint, bearerToken = null }) => {
  const headers = {};

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }

  const response = await fetch(`${backendUrl}/api/${endpoint}`, {
    method: "GET",
    headers: headers,
    credentials: "include",
  });

  return await response.json();
};

/**
 * HTTP PUT isteği gönderir.
 * @param {Object} options - İstek için gerekli parametreler.
 * @param {string} options.endpoint - API endpointi.
 * @param {Object|FormData|null} options.body - Gönderilecek veri.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @param {string|null} options.csrfToken - CSRF token.
 * @param {string|null} options.customUrl - Özel bir URL belirtmek için.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const put = async ({ endpoint, body = null, bearerToken = null, csrfToken = null, customUrl = null }) => {
  const headers = {};

  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }

  if (csrfToken) {
    headers["X-CSRF-TOKEN"] = csrfToken;
  }

  const responseUrl = customUrl ? customUrl : `${backendUrl}/api/${endpoint}`;

  const response = await fetch(responseUrl, {
    method: "PUT",
    headers: headers,
    credentials: "include",
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
  });

  return await response.json();
};

/**
 * HTTP PATCH isteği gönderir.
 * @param {Object} options - İstek için gerekli parametreler.
 * @param {string} options.endpoint - API endpointi.
 * @param {Object|FormData|null} options.body - Gönderilecek veri.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @param {string|null} options.csrfToken - CSRF token.
 * @param {string|null} options.customUrl - Özel bir URL belirtmek için.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const patch = async ({ endpoint, body = null, bearerToken = null, csrfToken = null, customUrl = null }) => {
  const headers = {};

  if (!(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }

  if (csrfToken) {
    headers["X-CSRF-TOKEN"] = csrfToken;
  }

  const responseUrl = customUrl ? customUrl : `${backendUrl}/api/${endpoint}`;

  const response = await fetch(responseUrl, {
    method: "PATCH",
    headers: headers,
    credentials: "include",
    body: body instanceof FormData ? body : body ? JSON.stringify(body) : null,
  });

  return await response.json();
};

/**
 * HTTP DELETE isteği gönderir.
 * @param {Object} options - İstek için gerekli parametreler.
 * @param {string} options.endpoint - API endpointi.
 * @param {Object|null} options.body - Silme sırasında gönderilecek veri.
 * @param {string|null} options.bearerToken - Yetkilendirme için Bearer token.
 * @param {string|null} options.csrfToken - CSRF token.
 * @param {string|null} options.customUrl - Özel bir URL belirtmek için.
 * @returns {Promise<Object>} - JSON formatında dönen yanıt.
 */
export const del = async ({ endpoint, body = null, bearerToken = null, csrfToken = null, customUrl = null }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }

  if (csrfToken) {
    headers["X-CSRF-TOKEN"] = csrfToken;
  }

  const responseUrl = customUrl ? customUrl : `${backendUrl}/api/${endpoint}`;

  const response = await fetch(responseUrl, {
    method: "DELETE",
    headers: headers,
    credentials: "include",
    body: body ? JSON.stringify(body) : null,
  });

  return await response.json();
};
