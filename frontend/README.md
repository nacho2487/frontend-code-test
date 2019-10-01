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

```sh
npm test
```

# Comentarios sobre el ejercicio

En la letra del ejercicio se pide que al resolver el problema, se tengan en cuenta aspectos de **Usabilidad**, **SEO**, **Performance** y **Escalabilidad**.

A continuación, se detallan algunas acciones concretas que se tomaron para que la aplicación cubra satisfactoriamente estos aspectos.

### Usabilidad

- Keyboard navigation
- Feedback con animaciones
- Friendly URLs
- Placeholder text
- Meta viewport
- Favicon
- `lang` attribute en html tag

### SEO

- Title tag
- Meta description
- Accesibilidad (`alt` text, `aria` attributes)
- Semantic markup

### Performance

- Caching en browser (service-worker?)
- Preloading and prefetching
- Lazy loading de componentes
- Lazy loading de imágenes
- Utilizar atributo `srcset` para imágenes
- Cuidar bundle size y mantener dependencias a raya

### Escalabilidad

- Caching de llamadas a servicios REST de ML
- Caching de respuestas de la API Rest mía

Crear un caché básico y encapsularlo, hecho de tal manera que cambiarlo por otra tecnología, sea muy sencillo.

### Otros requerimientos:

- Testing unitario
- Dejar valores configurables en constantes del sistema
- Documentar API con OpenAPI
- Mensajes de commit descriptivos
- Pull requests descriptivos
- Auto prefixing de CSS

## Suposiciones

-

## Mejoras

-

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
