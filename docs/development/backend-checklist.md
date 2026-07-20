# Backend Checklist
## ✅ Historia 001 - Preparar entorno
### Objetivo

Levantar el entorno de desarrollo.

Tareas
 Crear repositorio Git
 Crear proyecto Nest
 Crear PostgreSQL con Docker
 Configurar Prisma
Comandos
npm install

npx nest new backend
docker compose up -d
npm install prisma @prisma/client
npx prisma init

## ✅ Historia 002 - Modelo inicial
### Objetivo

Definir el dominio.

Tareas
 Participant
 Destination
 ContributionRule
 Receipt
 ReceiptItem
Comandos
npx prisma format
npx prisma validate
npx prisma migrate dev --name initial_schema
## ✅ Historia 003 - Configuración Nest
### Objetivo

Configurar la aplicación.

Tareas
 ConfigModule
 Variables de entorno
 ValidationPipe
 CORS
 Global Prefix
Comandos
npm install @nestjs/config
## ✅ Historia 004 - Integración Prisma
### Objetivo

Integrar Prisma con Nest.

Tareas
 PrismaModule
 PrismaService
 Configurar Prisma 7 con Adapter PG
Comandos
npm install @prisma/adapter-pg
npx prisma generate



Prisma 7 utiliza PrismaPg como adapter para PostgreSQL y el cliente se genera en la carpeta generated según la configuración del schema.prisma.


| Comando                 |                   ¿Se usa? |
| ----------------------- | -------------------------: |
| `prisma migrate dev`    |    ✅ Siempre en desarrollo |
| `prisma migrate deploy` |               ✅ Producción |
| `prisma generate`       |     ✅ Cuando sea necesario |
| `prisma db seed`        |          ✅ Datos iniciales |
| `prisma db push`        | 🚫 Evitar en este proyecto |

