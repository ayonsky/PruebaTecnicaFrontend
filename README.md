## Parte 2 de Prueba Técnica

El esqueleto del proyecto se ha creado a partir de [Create React App](https://github.com/facebook/create-react-app).

Se deberán instalar las dependencias del proyecto utilizando el siguiente comando en la raíz del proyecto:

### `npm install`

### El Script para iniciar el proyecto de acuerdo al esqueleto base de Create React App es:

### `npm start`

Este comando ejecuta el proyecto en modo desarrollo.
\
\
Para visualizar el resultado abre el siguiente enlace en el navegador [http://localhost:3000](http://localhost:3000)

Para optimizar el tiempo se utilizaron dos componentes claves:
\
 `google-maps-react`: Utilizado para la conexión directa con la API de javascript de Google Maps y hacer uso de los componentes propios del paquete para adaptar el mapa a la propuesta y manipular sus valores.
\
 `react-places-autocomplete`: Utilizado para la conexión directa con la API de Places y Geocoding para poder hacer uso de su componente de búsqueda con sugerencias para luego crear un marcador por cada búsqueda y añadirlo al mapa y al State.

Se han desarrollado una serie de pruebas para este proyecto:

1. Tres pruebas **unitarias** para comprobar el correcto funcionamiento de los **Action** definidos para el Store de Redux.
2. Dos pruebas de **integración** para comprobar que el componente **<App \/>** y su hijo **<MapHandler \/>** se rendericen correctamente.

Para comprobarlo se deberá ejecutar el siguiente comando en una tarminal (estando en la raíz del proyecto):

### `npm test`
