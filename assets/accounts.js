/*
  Cuentas de estudiantes. Cada uno entra con su usuario y su contraseña, y su progreso
  (respuestas, ejercicios a medias, favoritos, lectura) se guarda aparte.

  Para agregar a alguien:
    1. Elige una contraseña y calcula su hash (en minúsculas):
         printf '%s' 'nombre-palabra-palabra-1234' | shasum -a 256
    2. Agrega una línea abajo con su usuario, su nombre y el hash. Opcional: nick = cómo lo saluda
       la página («¡Hola, Tito!»); si no hay nick, se usa el nombre.
       Opcional: drive = enlace a su carpeta de Google Drive (notas y calendario de clases). Aparece
       arriba en todas las páginas y en la pantalla de inicio.
       Opcional: reset = una marca nueva (por ejemplo la fecha) borra UNA vez el progreso de ese
       estudiante (respuestas, racha y tiempo) la próxima vez que entre, en cualquier dispositivo.
  Nunca escribas la contraseña aquí: este archivo es público, solo debe tener el hash.

  Sin Supabase, el progreso queda guardado en el navegador del estudiante (su teléfono o su
  computadora). Con Supabase (assets/config.js) además se sincroniza entre dispositivos; en ese caso
  inserta en la base de datos la misma contraseña (ver setup/supabase.sql).
*/
// WhatsApp del profesor para «¿Olvidaste tu contraseña?» (código de país + número, sin + ni espacios)
window.YEB_TEACHER_WHATSAPP = "584242345232";

window.YEB_ACCOUNTS = [
  { user: "mary", name: "Mary", reset: "2026-10-30", drive: "https://drive.google.com/drive/folders/1kd6u58xyz_2d5RPcfu52wH9Jg0QkiNuJ?usp=drive_link", hash: "ec09d4e897128bd6e737410c63c8281d612713cea24a1d1da373d1ffb478b6a2" },
  { user: "jesus", name: "Jesus", nick: "Tito", drive: "https://drive.google.com/drive/folders/12jZUeBjWfuZZC4kDGMM40ugkpy9I0bbw?usp=drive_link", hash: "8a1a7788798a073c4cc9d9939f50ec2d9f802c9972e473d315d0ad5fc3c14d07" },
  { user: "fabio", name: "Fabio", hash: "d29c18776f9b104b63409a0b617a4f4cbcb9fe8c512bd78d4abeb3bee5d1562b" }
];
