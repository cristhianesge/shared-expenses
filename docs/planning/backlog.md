Sprint 0

□ Arquitectura
□ Dominio
□ ADR
□ Modelo
□ Roadmap

Sprint 1

□ Nest
□ Config
□ Docker
□ PostgreSQL
□ Prisma
□ Health

Sprint 2

□ Participant

Sprint 3

□ Destination

Sprint 4

□ Contribution Rules

Sprint 5

□ Receipt

Sprint 6

□ Settlement



HU-00XX - Aplicar regla de distribución a un gasto

Porque ahí definirás que:

si el usuario usa la regla por defecto, se copia la distribución al gasto;
si personaliza el reparto, también se guarda esa distribución en el gasto;
las liquidaciones siempre trabajan sobre la distribución almacenada en el gasto, nunca sobre la regla vigente.

Una regla de distribución nunca se utiliza directamente para calcular un gasto. Siempre se copia (snapshot) al momento de registrar el gasto.

El flujo sería
Seleccionar destino
↓
Buscar regla por defecto
↓
Copiar participantes
↓
Guardar snapshot
↓
Calcular liquidación

Nunca vuelves a consultar la regla.

Entidades: 
DistributionRule

↓

DistributionRuleParticipant

Expense

↓

ExpenseItem

↓

ExpenseItemDistribution: 
-participant_id
-type
-percentage
-amount