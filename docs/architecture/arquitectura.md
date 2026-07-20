# Arquitectura

## Objetivo

Construir una aplicación mantenible, escalable y fácil de probar siguiendo principios de Clean Architecture y desarrollo modular.

---

# Estructura de módulos

Cada módulo se organiza en cuatro capas.

```text
module/

api/
application/
domain/
infrastructure/
```

---

## API

Responsable de exponer la funcionalidad mediante HTTP.

Contiene:

- Controllers
- DTOs
- Pipes específicos

No contiene lógica de negocio.

---

## Application

Implementa los casos de uso.

Ejemplos:

- CreateParticipantUseCase
- CalculateSettlementUseCase

Coordina el dominio y la infraestructura.

---

## Domain

Representa el negocio.

Contiene:

- Entidades
- Interfaces de repositorio
- Value Objects (cuando existan)
- Reglas de negocio

No depende de NestJS.

---

## Infrastructure

Implementaciones técnicas.

Ejemplos:

- Prisma
- PostgreSQL
- Repositorios
- Servicios externos

---

# Convenciones

- Un Controller por módulo.
- Un Use Case por acción.
- Controllers sin lógica de negocio.
- Las reglas viven en el dominio.
- Toda dependencia externa pertenece a Infrastructure.