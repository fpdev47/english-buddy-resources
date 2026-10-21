# Your English Buddy — Recursos

Espacio para los estudiantes de [Your English Buddy](https://fabio-english-academy.vercel.app/): el estudiante elige un tema y ve canales y podcasts de YouTube y Spotify para practicar, cada uno con su nivel (A2–C1).

Sitio: https://fpdev47.github.io/english-buddy-resources/

Es un sitio estático (HTML, CSS y JavaScript, sin dependencias ni paso de build).

## Estructura

```
index.html          Página principal
assets/styles.css   Estilos y modo día/noche (paleta y tipografías de Your English Buddy)
assets/theme.js     Botón de modo día/noche
assets/gate.js      Clave de acceso
assets/app.js       Temas, favoritos y reproductor de video
data/resources.js   Catálogo de canales y temas (con su video recomendado)
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

Para crear un tema nuevo, agrega un objeto a `sections` con `id`, `short`, `title`, `kicker`, `text` y, si quieres, un `video` recomendado.

## Clave de acceso

La página pide una clave antes de mostrar el contenido y la recuerda en cada navegador. En `assets/gate.js` solo se guarda el hash SHA-256 de la clave, no la clave en sí. Para cambiarla:

```bash
printf '%s' 'nuevaclave' | shasum -a 256
```

y reemplaza `KEY_HASH` con el resultado. Es una barrera simple contra visitas casuales: como el sitio es estático, alguien con conocimientos técnicos podría saltársela.

Después de cambiar cualquier archivo de `assets/` o `data/`, sube el número `?v=` de los enlaces en `index.html` (por ejemplo, a la fecha y hora). Así los navegadores de los estudiantes descargan la versión nueva en lugar de usar una copia guardada.

## Ver en local

```bash
python3 -m http.server 5173
```

Luego abre http://localhost:5173.

## Despliegue

Publicado con GitHub Pages desde la rama `main`: cada cambio que subas se publica solo en uno o dos minutos.

## Próximamente

Sección de ejercicios (listening, vocabulario y gramática).
