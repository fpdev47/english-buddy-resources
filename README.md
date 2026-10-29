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
assets/gate.js      Página de inicio de sesión
assets/accounts.js  Cuentas de estudiantes (usuario, nombre y hash de la contraseña)
assets/cloud.js     Sesión de cada estudiante y sincronización opcional con Supabase
assets/config.js    Conexión con Supabase (vacía = sin nube)
setup/supabase.sql  Tabla y funciones para Supabase
assets/app.js       Escuchar (temas, favoritos, video) y Practicar (ejercicios y puntaje)
data/resources.js   Catálogo de canales y temas (con su video recomendado)
data/why-original.js
                    «Por qué está mal» cada opción en los temas originales
data/groups.js      Grupos de temas de «Practicar» y ayudantes para escribir ejercicios bilingües
data/exercises.js   Banco de ejercicios (temas originales)
data/exercises-unit1.js, exercises-unit2.js, exercises-extra.js
                    Temas del libro Travelers 1 (unidades 1 y 2) y temas complementarios
data/readings.js    Lecturas (pestaña Reading): historias, vocabulario y preguntas
data/readings-classics.js
                    Discursos y clásicos: Padre Nuestro (inglés arcaico), Gettysburg, I Have a Dream,
                    Alicia, Orgullo y prejuicio y Sherlock Holmes
data/en.js          Traducción al inglés de temas, canales y ejercicios
data/glossary/      Traducción de cada palabra al tocarla (lecturas e historias)
data/transcripts/   Textos completos opcionales de las lecturas
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

Los temas nuevos se escriben con su español y su inglés juntos, con los ayudantes de `data/groups.js` (mira `data/exercises-unit1.js` como ejemplo):

```js
M("My sister ___ very friendly.", "is", ["are", "am", "be"],
  ["My sister = she → is.", "My sister = she → is."],                    // explicación ES / EN
  { are: ["«are» es para you, we, they…", "“are” is for you, we, they…"] }) // por qué está mal esa opción (opcional)
```

**Dos intentos.** Si el estudiante se equivoca, primero ve por qué su opción no sirve (lo que diga `w` para esa opción, con la respuesta correcta tapada con ___) y puede intentarlo otra vez. La respuesta solo aparece después del segundo error. Las preguntas con dos opciones (correcta / incorrecta) se corrigen al primer intento, porque el segundo sería regalado. Una respuesta correcta en el segundo intento cuenta como correcta y lo dice («al segundo intento»).

Las explicaciones por opción de los temas originales están en `data/why-original.js`. Cada tema va en un grupo de `data/groups.js` (el orden de los grupos sigue el libro).

Formato de los temas originales (`data/exercises.js`, con su inglés en `data/en.js`):

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
- Dos huecos en una frase: escribe `___` dos veces y la respuesta como `"she / her"` (en orden).
- En la historia, los párrafos se separan con una línea en blanco (`\n\n`).
- Si cambias o reordenas ejercicios de un tema, las respuestas guardadas que ya no coinciden se descartan solas.

Para compartir un tema directo: `…/english-buddy-resources/#practicar/numeros` (o `#shadowing` para un tema de Escuchar).

## Agregar lecturas

Abre `data/readings.js` y copia una lectura. Cada una tiene el texto en párrafos, una lista de vocabulario (`[palabra, español, inglés, texto exacto en la historia]`) que se resalta y se puede tocar, y dos tipos de preguntas:

```js
C("Pregunta en inglés", "correcta", ["incorrecta", "incorrecta"], "explicación ES", "explicación EN")
V("Frase literal con [[palabra]]", "significado correcto ES", ["incorrecto", "incorrecto"], ["EN correcto", "EN", "EN"], "explicación ES", "explicación EN")
```

Las lecturas ya traen su inglés, no hace falta tocar `data/en.js`.

**Texto completo opcional:** una lectura puede apuntar a un archivo `.txt` con `transcript`. Si el archivo tiene texto (párrafos separados por una línea en blanco; las líneas con `#` se ignoran), la lectura muestra «Texto completo | Resumen» y abre en el texto completo. La de Steve Jobs usa `data/transcripts/steve-jobs.txt`.

## Traducción al tocar cada palabra (glosarios)

Un archivo en `data/glossary/` hace que cada palabra de un texto se pueda tocar (o pasar el cursor) para ver su traducción en ese contexto. Se usa con el id de la lectura o del tema: `steve-jobs.js` es para la lectura `r-steve-jobs` y `pronombres-objeto.js` para la historia del tema `pronombres-objeto`. Cada línea es `inglés = español`; las expresiones (`phrases`) tienen prioridad sobre las palabras sueltas. Agrega el archivo nuevo en `index.html`, antes de `data/readings.js` o `data/exercises.js`.

## Español / inglés

La página empieza en inglés. El botón ES | EN cambia el idioma de las instrucciones y lo recuerda en cada navegador. Los textos fijos están en `assets/i18n.js`; la traducción del contenido está en `data/en.js`. Cuando agregues un canal o un ejercicio, agrega también su versión en inglés en `data/en.js` (en el mismo orden). Si falta la traducción, ese texto se muestra en español.

## Inicio de sesión de cada estudiante

Al abrir el sitio aparece una página de inicio de sesión. Cada estudiante entra con su **usuario y contraseña**, y su progreso (respuestas, ejercicios a medias, favoritos, lectura) se guarda aparte: si otra persona entra en el mismo navegador, no ve lo de nadie más. Al cerrar sesión, el progreso queda guardado para la próxima vez.

Las cuentas están en `assets/accounts.js`. Para agregar a alguien, calcula el hash de su contraseña (en minúsculas):

```bash
printf '%s' 'nombre-palabra-palabra-1234' | shasum -a 256
```

y agrega una línea con su usuario, su nombre y ese hash. La contraseña nunca va en el repo. Es una barrera del lado del navegador: separa el progreso de cada uno y evita visitas casuales, pero alguien con conocimientos técnicos podría saltársela.

Sin Supabase, el progreso se guarda en el navegador del estudiante (su teléfono o su computadora).

## Sincronizar entre dispositivos (Supabase, opcional)

Con Supabase, el progreso de cada estudiante se guarda en la nube y lo ve en cualquier dispositivo.

1. Crea un proyecto gratis en https://supabase.com.
2. En **SQL Editor**, pega y ejecuta `setup/supabase.sql`.
3. Agrega cada estudiante con la misma contraseña que tiene en `assets/accounts.js`:
   `insert into public.students (name, key_hash) values ('Nombre Apellido', public.yeb_hash('su-contraseña'));`
4. En **Project Settings → API**, copia *Project URL* y la clave *anon public* en `assets/config.js`.

En la base de datos solo queda el hash de cada contraseña, y la tabla solo se puede usar a través de dos funciones que la verifican. Para ver el avance de todos, usa la consulta que está al final de `setup/supabase.sql`.

Después de cambiar cualquier archivo de `assets/` o `data/`, sube el número `?v=` de los enlaces en `index.html` (por ejemplo, a la fecha y hora). Así los navegadores de los estudiantes descargan la versión nueva en lugar de usar una copia guardada.

## Ver en local

```bash
python3 -m http.server 5173
```

Luego abre http://localhost:5173.

## Despliegue

Publicado con GitHub Pages desde la rama `main`: cada cambio que subas se publica solo en uno o dos minutos.

