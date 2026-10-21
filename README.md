# Your English Buddy — Recursos

Centro de recursos para los estudiantes de [Your English Buddy](https://fabio-english-academy.vercel.app/): podcasts, canales de shadowing y charlas TED en YouTube y Spotify, filtrables por nivel (A2–C1) y tema.

Es un sitio estático (HTML, CSS y JavaScript, sin dependencias ni paso de build).

## Estructura

```
index.html          Página principal
assets/styles.css   Estilos (paleta y tipografías de Your English Buddy)
assets/app.js       Filtros, búsqueda, favoritos y reproductor de video
data/resources.js   Catálogo de canales, secciones y videos destacados
```

## Agregar o editar un canal

Abre `data/resources.js` y copia un objeto dentro de `channels`:

```js
{
  name: "6 Minute English",
  host: "BBC Learning English",
  section: "aprender",          // id de una sección de `sections`
  level: ["A2", "B1"],          // nivel mínimo y máximo
  accent: "UK",                 // US, UK, CA o Mix
  text: "Descripción corta en español.",
  youtube: "https://www.youtube.com/@bbclearningenglish",
  spotify: "https://open.spotify.com/show/..."   // "" si no existe
}
```

Para crear un tema nuevo, agrega un objeto a `sections` con `id`, `short`, `title`, `kicker` y `text`.

## Ver en local

```bash
python3 -m http.server 5173
```

Luego abre http://localhost:5173.

## Despliegue

En Vercel: **Add New → Project**, importa este repo y despliega sin cambiar nada (Framework Preset: *Other*).

## Próximamente

Sección de ejercicios (listening, vocabulario y gramática).
