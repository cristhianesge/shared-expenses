# Roadmap
## MVP 1 - Configuración
### HU-0001 - CRUD Participantes ✅

Administrar los participantes de un grupo.

Dependencias:

Ninguna.


## HU-0002 - CRUD Destinos ✅

Administrar destinos donde se imputarán los gastos.

Ejemplo:

- Emma
- Casa
- Colegio
- Mascotas

Dependencias:

- Participantes.

## HU-0003 - CRUD Reglas de Distribución ✅

Administrar reglas de reparto.

Ejemplo:

    Emma

    Andrés 70%

    Cristiane 30%

Dependencias:

   - Participantes
   - Destinos

# MVP 2 - Registro de Gastos

Aquí empieza la aplicación de verdad.

## HU-0004 - Registrar Boleta

Objetivo

Registrar una boleta.

No incluye OCR.

No incluye distribución.

Solo crear la boleta.

Reglas
proveedor
fecha
total
observación
estado DRAFT
pertenece a un grupo
Casos de uso
CreateReceipt

UpdateReceipt

DeleteReceipt

FindReceipt

ListReceipts

## HU-0005 - Administrar Ítems de Boleta

Ahora aparecen los productos.

Ejemplo

Leche

$

Pan

$1.
Toda boleta pertenece a un grupo.
2.
Todo item pertenece a un destino.
3.
Todo destino puede tener varias reglas.
4.
Solo una regla puede ser la predeterminada.
5.
Toda distribución aplicada a un gasto se almacena como un snapshot.
6.
Una liquidación nunca consulta reglas de distribución.
Solo utiliza los snapshots almacenados en los gastos.
7.
Las reglas pueden cambiar.

Los gastos históricos nunca cambian.

Detergente

Cada ítem puede tener

cantidad

precio

descuento

destino

Todavía NO calcula distribución.

HU-0006 - Registrar Gasto Manual

No requiere boleta.

Ejemplo

Uber

Netflix

Colegio

Peluquería

Restaurant

Estacionamiento

Internamente crea un único Item.

HU-0007 - Aplicar Distribución al Gasto

Esta creo que será la historia más importante del proyecto.

Aquí definiremos:

buscar regla por defecto
permitir elegir otra
permitir modificarla
generar snapshot
guardar snapshot

Y dejar explícito:

Los cambios posteriores en las reglas nunca afectan gastos ya registrados.

MVP 3 - Liquidaciones
HU-0008 - Generar Liquidación

Entrada

Grupo

Mes

Salida

Cristiane

Debe

$

Andrés

Debe

$

La liquidación utiliza únicamente los snapshots de los gastos.

Nunca consulta las reglas.

HU-0009 - Registrar Pagos

Ejemplo

Cristiane

↓

Pagó

↓

$

↓

Andrés

Para saber:

Saldo pendiente
MVP 4 - Automatización
HU-0010 - OCR

Subir boleta

↓

Extraer productos

↓

Crear Items

HU-0011 - Clasificación automática

El sistema propone

Leche

↓

Emma
Detergente

↓

Casa
MVP 5 - Multiusuario
HU-0012 - CRUD Grupos

Aquí recién aparece

Usuario

↓

Grupo

Podrás tener

Familia

Viaje

Oficina

Amigos
HU-0013 - Usuarios

Invitar personas.

Aceptar invitación.

Roles.

MVP 6

Aquí ya hablamos de "nice to have".

PDF

Dashboard

Exportar Excel

Historial

Recordatorios

Notificaciones

API pública





--------------------

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

# MVP BACKEND
0001 CRUD Participantes          ✅
0002 CRUD Destinos              ✅
0003 CRUD Reglas de distribución
0004 CRUD Boletas
0005 CRUD Ítems de Boleta
0006 Registrar gasto manual
0007 Aplicar distribución al gasto (snapshot)
0008 Liquidación mensual
0009 Registro de pagos
0010 OCR
0011 Gestión de Grupos
0012 Autenticación

