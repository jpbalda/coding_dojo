## Ejecución
Se debe copiar el archivo .env.example a .env y llenar las variables de entorno.

A continuación, ejectuar los siguientes comandos:

```
mongod
npm run watch

```

En el navegador ir a `http://localhost:3000/`

Para registrar un nuevo usuario ir `http://localhost:3000/register`

Para compilar los assets del frontend se debe ejecutar

```
npm run assets-dev
```

## Estructura

#### assets
Todo el javascript y css para el frontend

#### controllers
Para manejar cada endpoint

#### middlewares
Middlewares para express. Ej: para agregar seguridad a endpoints

#### models
Models de mongoose

#### public
Donde se guardan los assets compilados por webpack


#### routes
Todas las rutas de express

#### tests
Tests con jest

#### views
Views en pug

## Principales paquetes usados
* nodemon
* express
* express-validator
* axios
* dotenv
* passport
* pug
* vue
* webpack

## TODO
* Tests
* Completar API
	* Creación de standups
	* Edición de standups
	* Envío de mails
	* Iniciar standup
	* Terminar standup
	* Resumen de standup
* Completar UI
* Validaciones de datos
* Agregar manejo de errores
* Mejorar archivos separándolos en módulos
