# Environment Configuration

@mehasoft/request automatically determines which backend URL to use based on environment variables.

## Supported Variables (in priority order):

1. `NEXT_PUBLIC_BACKEND_URL` – Used in Next.js apps
2. `EXPO_PUBLIC_BACKEND_URL` – Used in Expo apps
3. `REACT_APP_BACKEND_URL` – Used in CRA/React apps
4. `BACKEND_URL` – Fallback if none of the above exist

## Example .env File

```ini
NEXT_PUBLIC_BACKEND_URL=https://next.example.com
EXPO_PUBLIC_BACKEND_URL=https://expo.example.com
REACT_APP_BACKEND_URL=https://react.example.com
BACKEND_URL=https://fallback.example.com
```

The first defined and non-empty variable will be used.