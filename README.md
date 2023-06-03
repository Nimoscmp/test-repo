# React App para obtención de datos del clima desde API

Este proyecto es una aplicación sencilla que muestra los datos del clima de algunas ciudades desde la API de [https://openweathermap.org/](https://openweathermap.org/), donde se pueden realizar diferentes llamados, para los datos específicos del clima actual y su pronóstico.

El deployment se encuentra en: [http://weather-api-search.surge.sh](http://weather-api-search.surge.sh)

## Estructura

Para este proyecto se usa React y se manejan los estados globales con redux.

Los llamados de las API se realizan con AJAX.

Los estilos están estructurados en SASS.

El diseño es tipo responsive.

Está dividido en cinco secciones:

### `Encabezado`

Aquí se puede seleccionar el idioma entre inglés y español, y escoger un tema oscuro o claro.

### `Banner principal`

Aquí se muestran los datos de la ciudad de Bogotá.

### `Pronóstico`

En esta sección se muestra el pronóstico de los siguientes 3 días de la ciudad de Bogotá.

### `Búsqueda personalizada`

En esta tarjeta se puede realizar la búsqueda de la ciudad que se desee.

### `Banner de París`

Aquí se encuentran datos específicamente de la ciudad de París.
