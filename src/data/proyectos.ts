import type { Proyecto } from "@/models/Proyecto";

export const proyectos: Proyecto[] = [
    {
        id: 1,
        name: 'Portal de empleos',
        description: 'Portal de empleos en angular y angular material',
        image: '/itscojobs.png',
        link: 'https://angular-integrador-material.vercel.app',
        githubLink: 'https://github.com/Pxlarized/angular-integrador-material'
    },
    {
        id: 2,
        name: 'Gifs App',
        description: 'App de Gifs usando la API de Giphy',
        image: '/gifs.png',
        link: 'https://gifs-app-angular-eta.vercel.app',
        githubLink: 'https://github.com/Pxlarized/gifs-app-angular'
    }
]