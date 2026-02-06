# 🚀 Proyecto Vue 3 + Vite

Aplicación web desarrollada con **Vue 3** y **Vite**, enfocada en rendimiento, simplicidad y buenas prácticas de desarrollo frontend.

---

## ✅ Requisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** → recomendado **18+** (ideal 20+)
- **npm** (o **pnpm / yarn**)

Verifica las versiones:

```bash
node -v
npm -v
```

---

## 📦 Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
npm install
```

> Alternativas:
> - `pnpm install`
> - `yarn`

---

## 🧪 Modo desarrollo

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Luego abre en tu navegador:

```
http://localhost:5173/
```

*(el puerto puede variar según tu configuración)*

---

## 🏗️ Build para producción

Genera el build optimizado para producción:

```bash
npm run build
```

Esto creará la carpeta:

```
dist/
```

---

## 🔍 Previsualizar el build

Para probar localmente el build final:

```bash
npm run preview
```

---

## 🌍 Variables de entorno

Crea un archivo `.env` o `.env.production`.

Ejemplo:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_WS_URI=http://localhost:3000
VITE_WS_PATH=/
```

📌 Notas importantes:
- Todas las variables públicas deben empezar con `VITE_`
- No subas el archivo `.env` al repositorio
- Usa un `.env.example` para documentar las variables necesarias

---

## 🚀 Despliegue a producción

### 🟢 Opción A: Servidor Linux + Nginx

1️⃣ Compila el proyecto:

```bash
npm run build
```

2️⃣ Copia la carpeta `dist` al servidor:

```bash
scp -r dist/ usuario@IP_SERVIDOR:/var/www/miapp
```

3️⃣ Configura Nginx  
Archivo: `/etc/nginx/sites-available/miapp`

```nginx
server {
  listen 80;
  server_name TU_DOMINIO_O_IP;

  root /var/www/miapp;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

4️⃣ Activa el sitio y reinicia Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/miapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

✅ Esto permite que **Vue Router** funcione correctamente al recargar rutas.

---

### 🟣 Opción B: Hosting estático (Netlify / Vercel / GitHub Pages)

Configuración típica:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

---

## 📁 Estructura del proyecto

```bash
src/
 ├─ assets/
 ├─ components/
 ├─ views/
 ├─ router/
 ├─ stores/
 ├─ App.vue
 └─ main.js (o main.ts)
```

---

## 📜 Scripts disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build de producción
npm run preview  # Previsualizar build
```

---

## 📝 Buenas prácticas

- Usar componentes reutilizables
- Separar vistas, componentes y lógica
- No exponer claves sensibles en el frontend
- Mantener limpio el archivo `.env`

---

## 📄 Licencia

Proyecto de uso interno / personal.  
(Modifica esta sección si usarás MIT, Apache, etc.)
