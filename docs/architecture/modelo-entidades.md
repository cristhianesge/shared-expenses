Usuario
│
└── 1:N
    Grupo
     │
     ├── 1:N Participante
     │
     ├── 1:N Destino
     │     │
     │     └── 1:N ReglaDistribucion
     │             │
     │             └── 1:N ReglaDistribucionParticipante
     │                        │
     │                        └── N:1 Participante
     │
     ├── 1:N Movimientos
     │      │
     │      └── 1:N MovimientoItem
     │               │
     │               ├── N:1 Destino
     │               │
     │               └── 1:N MovimientoItemDistribucion
     │                           │
     │                           └── N:1  Participante
     │
     └── 1:N Liquidacion