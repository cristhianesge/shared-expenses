# Roadmap
## MVP 1 - Gestión básica

Objetivo: poder registrar una boleta y calcular cuánto debe cada participante.

### Funcionalidades
✅ Gestión de grupos
✅ Gestión de participantes
✅ Gestión de destinos
✅ Gestión de reglas de aporte
✅ Registro manual de boletas
✅ Registro manual de ítems
✅ Asignación de destinos a ítems
✅ Cálculo de liquidación

Con esto ya podrías usar la aplicación en tu día a día.

## MVP 2 - OCR
Lectura automática de boletas.
Edición manual de los resultados.
Reprocesar OCR.

## MVP 3 - Clasificación inteligente

Clasificación automática

inicialmente no necesitas IA.

reglas sencillas:

Yogurt Soprole -> Emma

Pañales -> Emma

Detergente -> Común

Coca Cola -> Común

Y después, si algún día se quiere, reemplazar ese motor por un LLM.



## MVP 4 - Registro de pagos

Registrar pago
Registrar transferencia
Consultar saldo
Historial de pagos


## MVP 5 - Reportes
Exportar PDF
Resumen mensual
Historial


# Versión 2

## Gastos generales

Registrar gastos que no provienen de una boleta.

Ejemplos:

Peluquería
Uber
Netflix
Restaurante
Estacionamiento
Vacaciones

Expense
│
├── ReceiptExpense
├── ManualExpense
└── Transfer


Estado: 
| Funcionalidad               | Estado |
| --------------------------- | ------ |
| Gestión de grupos           | ⬜      |
| Gestión de participantes    | ⬜      |
| Gestión de destinos         | ⬜      |
| Gestión de reglas de aporte | ⬜      |
| Registro manual de boletas  | ⬜      |
| Registro manual de ítems    | ⬜      |
| Asignación de destinos      | ⬜      |
| Cálculo de liquidación      | ⬜      |
| OCR                         | ⬜      |
| Clasificación automática    | ⬜      |
| Registro de pagos           | ⬜      |
| Exportación PDF             | ⬜      |
| Gastos manuales             | ⬜      |



## roadmap técnico :

✅ Docker
✅ PostgreSQL
✅ Prisma
✅ ConfigModule
⬜ Health Check
⬜ Swagger
⬜ Logger
⬜ Tests unitarios
⬜ Tests de integración
⬜ GitHub Actions (CI)
⬜ Docker para producción
⬜ Despliegue automático
⬜ Kubernetes (opcional, como aprendizaje)