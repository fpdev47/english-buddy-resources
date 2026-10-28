# Your English Buddy — Recursos

Espacio para los estudiantes de [Your English Buddy](https://fabio-english-academy.vercel.app/): en «Escuchar» el estudiante encuentra canales y podcasts de YouTube y Spotify por tema, y en «Practicar» hace ejercicios que se corrigen al instante.

Sitio: https://fpdev47.github.io/english-buddy-resources/

Es un sitio estático (HTML, CSS y JavaScript, sin dependencias ni paso de build).

## Estructura

```
index.html          Página principal
assets/styles.css   Estilos y modo día/noche (paleta y tipografías de Your English Buddy)
assets/i18n.js      Botón ES / EN y textos fijos de la interfaz en ambos idiomas
assets/theme.js     Botón de modo día/noche
assets/gate.js      Pantalla de acceso (clave general o clave personal de cada estudiante)
assets/config.js    Conexión con Supabase (vacía = sin nube)
assets/cloud.js     Sesión del estudiante y guardado de su progreso en la nube
setup/supabase.sql  Tabla y funciones para Supabase
assets/app.js       Escuchar (temas, favoritos, video) y Practicar (ejercicios y puntaje)
data/resources.js   Catálogo de canales y temas (con su video recomendado)
data/exercises.js   Banco de ejercicios
data/readings.js    Lecturas (pestaña Reading): historias, vocabulario y preguntas
data/en.js          Traducción al inglés de temas, canales y ejercicios
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
  format: "podcast",            // podcast o video
  text: "Descripción corta en español.",
  youtube: "https://www.youtube.com/@bbclearningenglish",
  spotify: "https://open.spotify.com/show/..."   // "" si no existe
}
```

Para crear un tema nuevo, agrega un objeto a `sections` con `id`, `short`, `title`, `text` y, si quieres, un `video` recomendado. Si el tema es nuevo, agrégale un ícono en `TOPIC_ICONS` dentro de `assets/app.js`.

## Agregar ejercicios

Abre `data/exercises.js`. Cada tema tiene secciones y cada sección tiene ejercicios:

```js
// Opción múltiple: escribe la respuesta correcta en `a`; las opciones se mezclan solas
{ q: "I visit ___ every Sunday.", a: "her", o: ["she", "hers"], e: "Explicación breve." }

// Escribir: todas las respuestas válidas en `a`
{ type: "write", q: "1984", a: ["nineteen eighty-four"], e: "Explicación breve." }
```

Otras opciones:
- `quote`: frase que se muestra arriba de la pregunta. Si todas las opciones son partes de esa frase («encuentra el error»), se muestran en el orden de lectura.
- `story` (en una sección): una historia que se muestra antes de las preguntas. Las marcas (1), (2)... se vuelven círculos que llevan a su pregunta y se ponen verdes o rojos al responder; la marca (1) corresponde al primer ejercicio de la sección, la (2) al segundo, etc.
- En `quote`, lo que va entre `[[ ]]` se resalta (por ejemplo `He paid [[$349.99]]`).
- Si cambias o reordenas ejercicios de un tema, las respuestas guardadas que ya no coinciden se descartan solas.

Para compartir un tema directo: `…/english-buddy-resources/#practicar/numeros` (o `#shadowing` para un tema de Escuchar).

## Agregar lecturas

Abre `data/readings.js` y copia una lectura. Cada una tiene el texto en párrafos, una lista de vocabulario (`[palabra, español, inglés, texto exacto en la historia]`) que se resalta y se puede tocar, y dos tipos de preguntas:

```js
C("Pregunta en inglés", "correcta", ["incorrecta", "incorrecta"], "explicación ES", "explicación EN")
V("Frase literal con [[palabra]]", "significado correcto ES", ["incorrecto", "incorrecto"], ["EN correcto", "EN", "EN"], "explicación ES", "explicación EN")
```

Las lecturas ya traen su inglés, no hace falta tocar `data/en.js`.

**Texto completo opcional:** una lectura puede apuntar a un archivo `.txt` con `transcript`. Si el archivo tiene texto (párrafos separados por una línea en blanco; las líneas con `#` se ignoran), la lectura muestra «Texto completo | Resumen» y abre en el texto completo. La de Steve Jobs usa `data/transcripts/steve-jobs.txt`, que está vacío: pegar ahí el discurso es decisión tuya, porque tiene derechos de autor y el repo es público.

## Español / inglés

La página empieza en inglés. El botón ES | EN cambia el idioma de las instrucciones y lo recuerda en cada navegador. Los textos fijos están en `assets/i18n.js`; la traducción del contenido está en `data/en.js`. Cuando agregues un canal o un ejercicio, agrega también su versión en inglés en `data/en.js` (en el mismo orden). Si falta la traducción, ese texto se muestra en español.

## Progreso por estudiante (Supabase)

Cada estudiante entra con su clave personal y su progreso se guarda en la nube, así lo ve en cualquier dispositivo.

1. Crea un proyecto gratis en https://supabase.com.
2. En **SQL Editor**, pega y ejecuta `setup/supabase.sql`.
3. Agrega cada estudiante (también en SQL Editor):
   `insert into public.students (name, key_hash) values ('Nombre Apellido', public.yeb_hash('su-clave'));`
4. En **Project Settings → API**, copia *Project URL* y la clave *anon public* en `assets/config.js`.

Las claves nunca se guardan en este repo: en la base de datos solo queda su hash, y la tabla solo se puede usar a través de dos funciones que verifican la clave. El sitio muestra solo el primer nombre. Para ver el avance de todos, usa la consulta que está al final de `setup/supabase.sql`.

Mientras `assets/config.js` esté vacío, el sitio usa la clave general de abajo y guarda el progreso solo en el navegador.

## Clave de acceso general

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

