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
- Descripciones de tests (`it`) en español.
- Unitarios vs E2E separados: unit = lógica use case; e2e = API HTTP.
- Given / When / Then en cada escenario.
- Mocks reutilizables en helpers (`testing/` para unit; `test/helpers/` para e2e).
- E2E: un `describe` por método/ruta; un escenario por `it`.
- Detalle: `.cursor/rules/backend-e2e-tests.mdc` y `.cursor/rules/backend-unit-tests.mdc`.

## Documentación

Toda nueva funcionalidad debe actualizar la documentación cuando cambie el dominio o la arquitectura.

# Backend



## Controllers

- Sin lógica de negocio.
- Sin acceso a Prisma.
- Sin try/catch.
- Solo coordinan la petición HTTP.



## Use Cases

- Una responsabilidad.
- Método único: execute().
- Lanzan excepciones de negocio.
- No capturan errores salvo recuperación.



## Repositories

- Encapsulan el acceso a datos.
- No contienen lógica de negocio.

