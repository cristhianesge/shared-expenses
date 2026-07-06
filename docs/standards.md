# Estándares del proyecto

## Idioma

- Código en inglés.
- Documentación funcional en español.
- Commits en inglés siguiendo Conventional Commits, la descripcion puede ser en español si lo deseas.

## Arquitectura

- Controllers sin lógica de negocio.
- Services contienen la lógica.
- Validar siempre la entrada.
- No acceder a la base de datos desde un Controller.

## Git

- Una funcionalidad por Pull Request.
- Commits pequeños y descriptivos.
- No subir código que no compile.

## Testing

- Cada regla de negocio importante debe tener pruebas.
- Corregir un bug implica agregar una prueba que lo reproduzca.

## Documentación

Toda nueva funcionalidad debe actualizar la documentación cuando cambie el dominio o la arquitectura.