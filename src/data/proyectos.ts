import type { ImageMetadata } from 'astro';
import proyecto1Image from '../../public/gifs.png';
import proyecto2Image from '../../public/itscojobs.png';

// ... importa las demás imágenes ...

export const proyectos = [
    {
        id: 1,
        name: 'Portal de empleos',
        description: 'Portal de empleos en angular y angular material',
        image: proyecto2Image as ImageMetadata,
        link: 'https://angular-integrador-material.vercel.app',
        githubLink: 'https://github.com/Pxlarized/angular-integrador-material'
    },
    {
        id: 2,
        name: 'Gifs App',
        description: 'App de Gifs usando la API de Giphy',
        image: proyecto1Image as ImageMetadata,
        link: 'https://gifs-app-angular-eta.vercel.app',
        githubLink: 'https://github.com/Pxlarized/gifs-app-angular'
    }

];