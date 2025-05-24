# @mehasoft/request

@mehasoft/request, Next.js, React ve Expo uygulamaları için geliştirilmiş basit bir HTTP istemcisidir. Ortam değişkenlerine göre otomatik olarak uygun backend URL'yi belirler.

## 🚀 Kurulum

```bash
npm i @mehasoft/request
```

## 🛠 Kullanım

### 📌 GET İsteği Gönderme (async/await)

```javascript
import { get } from "@mehasoft/request";

async function kullanicilariGetir() {
  try {
    const response = await get({ endpoint: "users" });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### 📌 POST İsteği Gönderme (async/await)

```javascript
import { post } from "@mehasoft/request";

async function girisYap() {
  try {
    const response = await post({
      endpoint: "login",
      body: { email: "test@example.com", password: "123456" },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### 📌 PUT İsteği Gönderme (async/await)

```javascript
import { put } from "@mehasoft/request";

async function kullaniciGuncelle() {
  try {
    const response = await put({
      endpoint: "users/1",
      body: { name: "Güncellenmiş İsim" },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### 📌 PATCH İsteği Gönderme (async/await)

```javascript
import { patch } from "@mehasoft/request";

async function kismiGuncelle() {
  try {
    const response = await patch({
      endpoint: "users/1",
      body: { email: "yeni@example.com" },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### 📌 DELETE İsteği Gönderme (async/await)

```javascript
import { del } from "@mehasoft/request";

async function kullaniciSil() {
  try {
    const response = await del({
      endpoint: "users/1"
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

## 🌍 Ortam Değişkenleri

Bu paket, çalıştığı ortama göre aşağıdaki environment değişkenlerinden uygun olanını seçerek backend URL'yi belirler:

| Ortam     | Değişken                  |
|-----------|---------------------------|
| Next.js   | `NEXT_PUBLIC_BACKEND_URL` |
| Expo      | `EXPO_PUBLIC_BACKEND_URL` |
| React     | `REACT_APP_BACKEND_URL`   |
| Diğer     | `BACKEND_URL` (Varsayılan) |

`.env` örneği:

```ini
NEXT_PUBLIC_BACKEND_URL=https://next-backend.example.com
EXPO_PUBLIC_BACKEND_URL=https://expo-backend.example.com
REACT_APP_BACKEND_URL=https://react-backend.example.com
BACKEND_URL=https://default-backend.example.com
```

## 📌 API Parametreleri

Tüm fonksiyonlar aşağıdaki parametreleri alabilir:

### `get({ endpoint, bearerToken, api, customUrl })`

| Parametre     | Açıklama |
|---------------|----------|
| `endpoint`    | API uç noktası |
| `bearerToken` | (Opsiyonel) Bearer token ile yetkilendirme |
| `api`         | (Varsayılan: `true`) `/api` öneki eklensin mi |
| `customUrl`   | (Opsiyonel) Özel URL belirtme |

### `post({ endpoint, body, bearerToken, csrfToken, customUrl, api })`

| Parametre     | Açıklama |
|---------------|----------|
| `endpoint`    | API uç noktası |
| `body`        | (Opsiyonel) Gönderilecek veri |
| `bearerToken` | (Opsiyonel) Bearer token ile yetkilendirme |
| `csrfToken`   | (Opsiyonel) CSRF token gönderme |
| `customUrl`   | (Opsiyonel) Özel URL belirtme |
| `api`         | (Varsayılan: `true`) `/api` öneki eklensin mi |

## 📜 Lisans

Bu paket MIT lisansı ile sunulmaktadır.

---

Bu kütüphane **@mehasoft** tarafından geliştirilmiştir. 🚀