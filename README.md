# @mehasoft/request

@mehasoft/request, Next.js, React ve Expo uygulamalarında kullanılmak üzere basit bir HTTP istemcisidir. Dinamik olarak ortam değişkenlerini kullanarak backend URL'sini belirler.

## 🚀 Kurulum

```bash
npm i @mehasoft/request
```

## 🛠 Kullanım

### 📌 GET İsteği Gönderme

```javascript
import { get } from "@mehasoft/request";

get({ endpoint: "users" })
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### 📌 POST İsteği Gönderme

```javascript
import { post } from "@mehasoft/request";

post({
  endpoint: "login",
  body: { email: "test@example.com", password: "123456" },
})
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## 🌍 Ortam Değişkenleri

Bu paket, çalışma ortamına göre otomatik olarak uygun **backend URL**'sini kullanır.

| Ortam   | Değişken |
|---------|---------------------------|
| Next.js | `NEXT_PUBLIC_BACKEND_URL` |
| Expo    | `EXPO_PUBLIC_BACKEND_URL` |
| React   | `REACT_APP_BACKEND_URL`   |
| Diğer   | `BACKEND_URL` (Varsayılan) |

Örnek `.env` dosyası:

```ini
NEXT_PUBLIC_BACKEND_URL=https://next-backend.example.com
EXPO_PUBLIC_BACKEND_URL=https://expo-backend.example.com
REACT_APP_BACKEND_URL=https://react-backend.example.com
BACKEND_URL=https://default-backend.example.com
```

## 📌 API Seçenekleri

Her fonksiyonun aldığı parametreler:

### `get({ endpoint, bearerToken, api, customUrl })`

| Parametre    | Açıklama |
|-------------|----------|
| `endpoint`  | API endpoint'i |
| `bearerToken` | (Opsiyonel) Bearer token ile yetkilendirme |
| `api`       | (Varsayılan: `true`) `/api` prefix'ini ekleyip eklemeyeceği |
| `customUrl` | (Opsiyonel) Özel URL kullanımı |

### `post({ endpoint, body, bearerToken, csrfToken, customUrl, api })`

| Parametre    | Açıklama |
|-------------|----------|
| `endpoint`  | API endpoint'i |
| `body`      | (Opsiyonel) Gönderilecek JSON verisi |
| `bearerToken` | (Opsiyonel) Bearer token ile yetkilendirme |
| `csrfToken` | (Opsiyonel) CSRF token gönderme |
| `customUrl` | (Opsiyonel) Özel URL kullanımı |
| `api`       | (Varsayılan: `true`) `/api` prefix'ini ekleyip eklemeyeceği |

## 📜 Lisans

MIT Lisansı altında sunulmaktadır.

---
Bu kütüphane, **@mehasoft** tarafından geliştirilmiştir. 🚀