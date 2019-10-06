# frontend-code-test

Esta aplicación resuelve el test práctico planteado por el área de front-end de Mercado Libre.

El stack tecnológico utilizado para construir la aplicación fue:

- React
- Sass
- NodeJS
- Express

Las instrucciones a continuación permiten poner a funcionar una copia del proyecto.

## Requerimientos

- NodeJS 8.12 o superior

## Ejecutar la aplicación localmente

Primero:

```sh
npm install
```

Luego:

```sh
npm run dev
```

## Ejecutar los tests

### Backend

```sh
npm test
```

### Frontend

```sh
cd frontend
npm test
```

# Comentarios sobre el ejercicio

En la letra del ejercicio se pide que al resolver el problema, se tengan en cuenta aspectos de **Usabilidad**, **SEO**, **Performance** y **Escalabilidad**. 

A continuación, se detallan algunas acciones concretas que se tomaron para que la aplicación cubra satisfactoriamente estos aspectos.

### Usabilidad

- Accesibilidad
    - Se soporta navegación con el teclado
    - Textos alternativos, ARIA labels
    - Opción para ir al contenido principal y saltear el cabezal
- Feedback con animaciones mientras se espera por respuesta de APIs
- Friendly URLs
- Campo de búsqueda
    - Placeholder text
    - `input type="search"` para que teclado en pantalla muestre botón "Buscar"
- Favicon
- `lang` attribute en `html` tag
- Mensajes de error cuando hay errores en llamadas a las APIs
- Diseño responsivo

### SEO

- Se asigna un texto acorde al contexto en el `title` tag y `meta` description en los distintos routes.
- Las consideraciones que se tuvieron sobre accesibilidad, también impactan positivamente en el SEO
- Uso de markup semántico (`main`, `header`, `h1`, `h2`, etc.)

### Performance

- Lazy loading de imágenes
- Uso de atributo `srcset` y media queries para bajar imágenes de alta calidad sólo para pantallas de alta densidad
- Al momento de evaluar agregar nuevas dependencias, se valoró su tamaño, utilizando http://bundlephobia.com, buscando minimizar el tamaño del bundle.

### Escalabilidad

- El backend cachea las llamadas a los servicios de Mercado Libre, buscando hacer el servicio más escalable. El proveedor de cache (node-cache) está encapsulado de tal forma que es posible cambiar fácilmente de proveedor, por ejemplo, para usar Redis.

### Otros:

- Styling
    - Se utilizó `normalize` para normalizar los estilos.
    - Para el layout responsivo de la aplicación, en lugar de utilizar una biblioteca de terceros, y buscando mantener el bundle size controlado, se creó un conjunto de clases básicas con las funcionalidades necesitadas para implementar el diseño de la aplicación.
- Logging
    - En el backend, se configuró tanto un http logger (`morgan`), como un logger para la aplicación (`winston`).
- Testing
    - Se escribió tests unitarios tanto para backend como frontend, buscando cubrir funcionalidades básicas.
    Se podría haber escrito más tests unitarios para cubrir aún más funcionalidades (por ejemplo, state actions y reducers), o incluso e2e tests, pero se valoró también poder implementar otras funcionalidades, dentro del tiempo establecido.
- Manejo de estado en el frontend
    - El estado en el frontend es una de las partes con más sobre-ingeniería de la aplicación, ya que, dada la simplicidad de la aplicación, se podría haber resuelto de forma más que razonable usando el estado de los componentes y pasándolo en las props. Sin embargo, como excusa para hacer más interesante el ejercicio, se utilizó `Redux` (para el manejo de estado) y `Redux Saga` (para los side-effects), además de `connected-react-router` (para hacer el binding con el router).

## Mejoras

Algunas mejoras que hubiera sido interesante explorar para mejorar la performance y escalabilidad de la aplicación:

- En el frontend, utilizar un service worker para cachear la respuesta de las llamadas a las APIs.
- Hacer preloading y prefetching de recursos o de llamadas a las APIs, anticipando las intenciones del usuario.
- Implementar un middleware en Express para cachear las respuestas de los distintos endpoints
- Documentar API con OpenAPI

## Otros

### Google Lighthouse

Se corrieron los audits Google Lighthouse sobre la aplicación, en modo desktop y mobile, obteniéndose puntuaciones excelentes en accesibilidad, SEO y uso de "best practices".

En el caso del audit de accesibilidad, la única observación tiene que ver con la falta de contraste en algunos texto. Esto se podría mejorar fácilmente ajustando algunos colores para lograr mejor contraste, pero se buscó respetar el diseño provisto al máximo.
