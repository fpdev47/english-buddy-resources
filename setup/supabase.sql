-- Your English Buddy · progreso de estudiantes en Supabase
-- Pega este archivo completo en Supabase → SQL Editor → New query → Run.
-- Es seguro ejecutarlo más de una vez.

-- 1) Tabla de estudiantes. Solo guarda el hash de la clave, nunca la clave.
create table if not exists public.students (
  id          text primary key default gen_random_uuid()::text,
  name        text not null,
  key_hash    text not null unique,
  progress    jsonb not null default '{}'::jsonb,
  updated_at  timestamptz
);

-- Bloqueada: sin políticas, nadie puede leerla ni escribirla desde el sitio.
-- El sitio solo puede usar las dos funciones de abajo, que primero verifican la clave.
alter table public.students enable row level security;

create or replace function public.yeb_hash(p_key text) returns text
language sql immutable as $$
  select encode(sha256(convert_to(lower(trim(p_key)), 'UTF8')), 'hex')
$$;

-- 2) Iniciar sesión: devuelve el nombre y el progreso si la clave es correcta (o null).
create or replace function public.yeb_login(p_key text) returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
           'id', id,
           'name', split_part(name, ' ', 1),   -- el sitio solo muestra el primer nombre
           'progress', progress,
           'updated_at', updated_at)
  from public.students
  where key_hash = public.yeb_hash(p_key)
$$;

-- 3) Guardar el progreso del estudiante dueño de la clave.
create or replace function public.yeb_save(p_key text, p_progress jsonb) returns timestamptz
language sql volatile security definer set search_path = public as $$
  update public.students
     set progress = p_progress, updated_at = now()
   where key_hash = public.yeb_hash(p_key)
  returning updated_at
$$;

revoke all on function public.yeb_login(text), public.yeb_save(text, jsonb) from public;
grant execute on function public.yeb_login(text), public.yeb_save(text, jsonb) to anon, authenticated;

-- 4) Agregar estudiantes (cambia el nombre y la clave):
-- insert into public.students (name, key_hash) values ('Nombre Apellido', public.yeb_hash('nombre-palabra-palabra-1234'));
--
-- Cambiar la clave de alguien:
-- update public.students set key_hash = public.yeb_hash('nueva-clave') where name = 'Nombre Apellido';
--
-- Ver el avance de todos (correctas / respondidas por estudiante):
-- select name, updated_at,
--        (select count(*) from jsonb_each(progress->'answers') t, jsonb_each(t.value) a where (a.value->>'ok')::boolean) as correctas,
--        (select count(*) from jsonb_each(progress->'answers') t, jsonb_each(t.value) a) as respondidas
--   from public.students order by name;


-- 5) Panel del profesor (pestaña «Students» de la cuenta con teacher: true en assets/accounts.js).
--    Cada fila sabe a qué usuario del sitio pertenece y si es el profesor.
alter table public.students add column if not exists username text unique;
alter table public.students add column if not exists is_teacher boolean not null default false;

-- Devuelve el progreso de todos los estudiantes, solo si la clave es la de un profesor.
create or replace function public.yeb_teacher_overview(p_key text) returns json
language sql stable security definer set search_path = public as $$
  select coalesce(json_agg(json_build_object(
           'user', s.username,
           'name', split_part(s.name, ' ', 1),
           'progress', s.progress,
           'updated_at', s.updated_at) order by s.name), '[]'::json)
  from public.students s
  where not s.is_teacher
    and exists (select 1 from public.students t where t.key_hash = public.yeb_hash(p_key) and t.is_teacher)
$$;
revoke all on function public.yeb_teacher_overview(text) from public;
grant execute on function public.yeb_teacher_overview(text) to anon, authenticated;

-- 6) Las cuentas de assets/accounts.js (mismos hashes: no hace falta escribir ninguna contraseña aquí).
--    Si cambias una contraseña en accounts.js, vuelve a ejecutar esta parte con el hash nuevo.
insert into public.students (username, name, key_hash, is_teacher) values
  ('mary', 'Mary', 'ec09d4e897128bd6e737410c63c8281d612713cea24a1d1da373d1ffb478b6a2', false),
  ('jesus', 'Jesus', '8a1a7788798a073c4cc9d9939f50ec2d9f802c9972e473d315d0ad5fc3c14d07', false),
  ('fabio', 'Fabio', 'd29c18776f9b104b63409a0b617a4f4cbcb9fe8c512bd78d4abeb3bee5d1562b', true)
on conflict (username) do update set name = excluded.name, key_hash = excluded.key_hash, is_teacher = excluded.is_teacher;


-- 7) Clases (pestaña «My classes» del estudiante; el profesor las edita en Students → Classes).
create table if not exists public.classes (
  username    text primary key,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);
alter table public.classes enable row level security;

-- Un estudiante recibe solo las suyas; el profesor recibe las de todos. Formato: { "usuario": {…} }
create or replace function public.yeb_get_classes(p_key text) returns json
language sql stable security definer set search_path = public as $$
  select coalesce(json_object_agg(c.username, c.data), '{}'::json)
  from public.classes c
  join public.students me on me.key_hash = public.yeb_hash(p_key)
  where me.is_teacher or c.username = me.username
$$;

-- Solo el profesor guarda.
create or replace function public.yeb_save_classes(p_key text, p_user text, p_data jsonb) returns timestamptz
language plpgsql volatile security definer set search_path = public as $$
declare t timestamptz;
begin
  if not exists (select 1 from public.students where key_hash = public.yeb_hash(p_key) and is_teacher) then
    return null;
  end if;
  insert into public.classes (username, data, updated_at) values (p_user, p_data, now())
  on conflict (username) do update set data = excluded.data, updated_at = now()
  returning updated_at into t;
  return t;
end $$;
revoke all on function public.yeb_get_classes(text), public.yeb_save_classes(text, text, jsonb) from public;
grant execute on function public.yeb_get_classes(text), public.yeb_save_classes(text, text, jsonb) to anon, authenticated;
