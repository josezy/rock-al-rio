# Rock al Río - Festival de Rock Website

Un sitio web moderno para el festival de rock más grande de Latinoamérica, construido con [Next.js](https://nextjs.org) y TypeScript.

## Características

- Diseño completamente responsive para dispositivos móviles, tablets y escritorio
- Navbar con menú adaptativo
- Sección hero con efecto parallax e integración de video de YouTube
- Galería de imágenes interactiva
- Cuenta regresiva para el próximo festival
- Variables CSS para temas personalizables
- Compatible con modo oscuro/claro
- Integración de redes sociales

## Estructura del Proyecto

- `app/page.tsx`: Página principal
- `app/components/`: Componentes reutilizables (Navbar, Hero, FestivalInfo, etc.)
- `app/globals.css`: Estilos globales y variables de color
- `public/images/`: Recursos de imágenes

## Getting Started

Primero, instala las dependencias:

```bash
yarn install
```

Luego, inicia el servidor de desarrollo:

```bash
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

El sitio web se actualizará automáticamente a medida que editas los archivos.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para optimizar y cargar automáticamente la fuente [Geist](https://vercel.com/font).

## Tecnologías Utilizadas

- **Next.js 13+**: Framework de React con App Router
- **TypeScript**: Para un código más mantenible y seguro
- **Tailwind CSS**: Para estilos y diseño responsive
- **React Hooks**: Para la lógica de los componentes

## Personalización

Puedes personalizar el sitio web modificando los siguientes archivos:

- `app/globals.css`: Para cambiar las variables de color y estilos globales
- `app/components/`: Para editar la estructura y funcionalidad de los componentes
- `public/images/`: Para reemplazar las imágenes con el contenido real del festival

## Despliegue

Para construir la aplicación para producción:

```bash
yarn build
```

Para iniciar la versión de producción:

```bash
yarn start
```

La forma más sencilla de desplegar esta aplicación de Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Revisa la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
