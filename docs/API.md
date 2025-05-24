# API Reference – @mehasoft/request

This document provides a detailed explanation of the available HTTP helper functions included in the `@mehasoft/request` package.

---

## `get({ endpoint, bearerToken, api, customUrl })`

Sends a GET request to the specified endpoint.

### Parameters:
- `endpoint` (string): API endpoint to call.
- `bearerToken` (string, optional): Bearer token for Authorization header.
- `api` (boolean, default: `true`): If true, `/api` prefix will be added to base URL.
- `customUrl` (string, optional): Use a fully custom URL instead of building one.

### Returns:
`Promise<Object>` – The JSON response body.

---

## `post({ endpoint, body, bearerToken, csrfToken, customUrl, api })`

Sends a POST request.

### Parameters:
- `endpoint`: URL endpoint.
- `body`: JSON or FormData object.
- `bearerToken`: Optional Bearer token.
- `csrfToken`: Optional CSRF token.
- `customUrl`: Optional full URL.
- `api`: Whether to prefix `/api`.

### Returns:
`Promise<Object>`

---

## `put`, `patch`, `del`

These methods share the same parameters and structure as `post()`, but differ by HTTP method:
- `put`: Full update
- `patch`: Partial update
- `del`: DELETE request

---

## Error Handling

Each method throws on failed request. Use `try/catch` to handle errors:

```js
try {
  const res = await get({ endpoint: 'users' });
} catch (err) {
  console.error('Request failed', err);
}
```