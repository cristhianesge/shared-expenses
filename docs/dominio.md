# Dominio - Dividir Gastos

## Objetivo

Dividir Gastos o Shared Expenses es una aplicación que permite calcular automáticamente cuánto debe aportar cada participante a una compra según reglas de distribución configurables.

El objetivo principal es reducir el tiempo necesario para revisar boletas y calcular aportes manualmente.

---

# Conceptos del dominio

## Participante

Representa una persona involucrada en la distribución de gastos.

Ejemplos:

* Mamá
* Papá
* Abuela

Un participante puede tener una o más reglas de aporte.

---

## Boleta

Representa una compra realizada en un comercio.

Una boleta contiene uno o más productos.

Datos relevantes:

* Fecha
* Comercio
* Total
* Imagen de respaldo (opcional)


---

## Item de boleta

Representa un artículo incluido en una boleta. En una boleta hay lista de items ( nombre o codigo que puede editarse luego porque puede venir con nombres cortos extraños) y precio y/o descuentos, aca tambien se puede clasificar el producto por visibilidad. Podria existir productos que no son aplicables a todos los participantes.

Ejemplos:

* Leche
* Yogurt
* Pan
* Cereal

Cada producto tiene:
* codigo
* Nombre
* Precio
* Cantidad
* Destino asignado
* descuento
* visibilidad

---

## Destino

Permite agrupar productos que comparten una misma lógica de distribución.

Ejemplos:

* Emma
* Común
* Colegio
* Mascotas

Las Destinos son configurables por el usuario.

---

## Regla de aporte

Define qué porcentaje debe aportar cada participante para una Destino determinada.

Ejemplos:

Destino: Emma

* Mamá: 30%
* Papá: 70%

Destino: Común

* Mamá: 65%
* Papá: 35%

---

## Visibilidad

Permite determinar si un item participa o no en la liquidación compartida.

Valores posibles:

- Visible
- Oculto

Los items ocultos no son considerados en los cálculos compartidos ni son visibles para otros participantes.

---

## Liquidación

Representa un resumen de gastos compartidos para un período determinado.

Datos relevantes:

- Fecha de creación
- Participante responsable
- Monto calculado
- Estado

Estados posibles:

- Pendiente
- Pagada
- Anulada

---
## Pago

Representa 

---

# Reglas de negocio

## RN-001

Todo item debe tener una Destino antes de ser considerado en una liquidación.
---

## RN-002

Una Destino puede tener una o más reglas de aporte.

---

## RN-003

El sistema debe calcular automáticamente los montos correspondientes a cada participante.

---

## RN-004

El usuario puede modificar los porcentajes de aporte en cualquier momento.

---

## RN-005

Las Destinos pueden crearse, editarse o eliminarse.

---

## RN-006

Los participantes se asocian a una o mas destinos

---



# Flujo principal

1. El usuario registra una boleta.
2. El sistema obtiene los productos.
3. El usuario asigna una Destino a cada producto.
4. El sistema identifica las reglas asociadas a cada Destino.
5. El sistema calcula los aportes correspondientes.
6. El usuario visualiza un resumen final.

---

# Funcionalidades futuras

* OCR para lectura automática de boletas.
* Sugerencia automática de Destinos.
* Historial mensual.
* Exportación a PDF.
* Compartir resumen.
* Aplicación móvil.


