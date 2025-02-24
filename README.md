# @mehasoft/request

@mehasoft/request is a simple HTTP client designed for use in Next.js, React, and Expo applications. It dynamically determines the backend URL based on environment variables.

## 🚀 Installation

```bash
npm i @mehasoft/request
```

## 🛠 Usage

### 📌 Sending a GET Request

```javascript
import { get } from "@mehasoft/request";

get({ endpoint: "users" })
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### 📌 Sending a POST Request

```javascript
import { post } from "@mehasoft/request";

post({
  endpoint: "login",
  body: { email: "test@example.com", password: "123456" },
})
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## 🌍 Environment Variables

This package automatically selects the appropriate **backend URL** based on the runtime environment.

| Environment | Variable |
|------------|---------------------------|
| Next.js    | `NEXT_PUBLIC_BACKEND_URL` |
| Expo       | `EXPO_PUBLIC_BACKEND_URL` |
| React      | `REACT_APP_BACKEND_URL`   |
| Others     | `BACKEND_URL` (Default)   |

Example `.env` file:

```ini
NEXT_PUBLIC_BACKEND_URL=https://next-backend.example.com
EXPO_PUBLIC_BACKEND_URL=https://expo-backend.example.com
REACT_APP_BACKEND_URL=https://react-backend.example.com
BACKEND_URL=https://default-backend.example.com
```

## 📌 API Options

Each function accepts the following parameters:

### `get({ endpoint, bearerToken, api, customUrl })`

| Parameter    | Description |
|-------------|------------|
| `endpoint`  | API endpoint |
| `bearerToken` | (Optional) Authorization using Bearer token |
| `api`       | (Default: `true`) Whether to prefix with `/api` |
| `customUrl` | (Optional) Use a custom URL |

### `post({ endpoint, body, bearerToken, csrfToken, customUrl, api })`

| Parameter    | Description |
|-------------|------------|
| `endpoint`  | API endpoint |
| `body`      | (Optional) JSON data to be sent |
| `bearerToken` | (Optional) Authorization using Bearer token |
| `csrfToken` | (Optional) Send CSRF token |
| `customUrl` | (Optional) Use a custom URL |
| `api`       | (Default: `true`) Whether to prefix with `/api` |

## 📜 License

This package is provided under the MIT License.

---
This library is developed by **@mehasoft**. 🚀