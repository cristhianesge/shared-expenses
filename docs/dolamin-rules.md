1. Toda boleta pertenece a un grupo.
2. Todo item pertenece a un destino.
3. Todo destino puede tener varias reglas.
4. Solo una regla puede ser la predeterminada.
5. Toda distribución aplicada a un gasto se almacena como un snapshot.
6. Una liquidación nunca consulta reglas de distribución. Solo utiliza los snapshots almacenados en los gastos.
7. Las reglas pueden cambiar. Los gastos históricos nunca cambian.