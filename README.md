El esqueleto del proyecto se ha creado a partir de [Create React App](https://github.com/facebook/create-react-app).

Se deberán instalar las dependencias del proyecto utilizando el siguiente comando en la raíz del proyecto:
### `npm install`


### El Script para iniciar el proyecto de acuerdo al esqueleto base de  Create React App es:

### `npm start`

Este comando ejecuta el proyecto en modo desarrollo.
\
\
Para visualizar el resultado abre el siguiente enlace en el navegador [http://localhost:3000](http://localhost:3000)


## Parte 2 de Prueba Técnica
Para optimizar el tiempo se utilizaron dos componentes claves:
\
 `google-maps-react`: Utilizado para la conexión directa con la API de javascript de Google Maps y hacer uso de los componentes propios del paquete para adaptar el mapa a la propuesta y manipular sus valores.
 \
 `react-places-autocomplete`: Utilizado para la conexión directa con la API de Places y Geocoding para poder hacer uso de su componente de búsqueda con sugerencias para luego crear un marcador por cada búsqueda y añadirlo al mapa y al State.
 
 
 
 ### Carencias
  Faltó por implementar Redux para refactorizar el componente `MapHandler` y así crear un componente propio para el Input de búsqueda, en la que tanto el componente padre como el nuevo componente (ej. `Searcher`) pudiesen compartir los datos de los Markers a través del Store de Redux, en vez de manipular los States en cada componente.