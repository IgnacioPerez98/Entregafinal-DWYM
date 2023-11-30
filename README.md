# Entrega final- Desarrollo Web Y Mobile

* Ignacio Perez
* Nicolas Mazzey
* Milagros Kucharski
* José Varela


#### Clonar el Proyecto
git clone --recurse-submodules https://github.com/IgnacioPerez98/Entregafinal-DWYM.git


#### Correr Docker 
* Tener docker abierto
* En la raiz ejecutar : docker compose up -d

### Ajustar la IPV4 estatica en para el websocket
* Estar todos los dispositivos en la misma red
* Poner tu IPV4 en ws/app.js linea 13  sin cambiar el puerto
* Poner tu IPV4 en el front ProyectoFinal/src/app/servicios/controlador-juego.service.ts linea 314 sin cambiar el puerto 

#### Correr el Proyecto con ionic
* ionic build --prod
* ionic serve --external
* El link que tenga tu IPV4 va a poder ejecutar el proyecto en un dispositivo movil

