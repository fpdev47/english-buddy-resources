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
