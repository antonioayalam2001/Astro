import {
    calendar,
    code,
    consulting,
    css3,
    dashboard,
    design,
    expenseTracker,
    facebook,
    gifApp,
    git,
    html,
    instagram,
    java,
    javascript,
    mail,
    mongodb,
    moviesSite,
    mysql,
    nodejs,
    react,
    reproductor,
    sass,
    typescript,
    whatsapp,
    wordle,
    xmlfile,
    yourSite,
    escom,
    ipn,
    cecyt
} from "../assets";
import type { Project, Technology } from "./types";


export const technologies: Technology[] =
    [
        {
            id: "HTML",
            name: "HTML",
            icon: html,
            style: "shadow-red-500"
        },
        {
            id: "CSS",
            name: "CSS",
            icon: css3,
            style: "shadow-blue-500"
        },
        {
            id: "Sass",
            name: "Sass",
            icon: sass,
            style: "shadow-purple-300"
        },
        {
            id: "JavaScript",
            name: "javascript",
            icon: javascript,
            style: "shadow-yellow-500"
        },
        {
            id: "Java",
            name: "java",
            icon: java,
            style: "shadow-red-300"
        },
        {
            id: "React",
            name: "React",
            icon: react,
            style: "shadow-blue-300"
        },
        {
            id: "Node",
            name: "Node",
            icon: nodejs,
            style: "shadow-green-300"
        },
        {
            id: "Mongo",
            name: "Mongo",
            icon: mongodb,
            style: "shadow-green-200"
        },
        {
            id: "MySQL",
            name: "MySQL",
            icon: mysql,
            style: "shadow-blue-100"
        },
        {
            id: "Git",
            name: "Git",
            icon: git,
            style: "shadow-orange-100"
        },
        {
            id: "Xml",
            name: "Xml",
            icon: xmlfile,
            style: "shadow-yellow-100"
        },
        {
            id: "TypeScript",
            name: "TypeScript",
            icon: typescript,
            style: "shadow-blue-800"
        }

    ]


export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "About Me",
        title: "About Me",
    },
    {
        id: "Services",
        title: "Services",
    },
    {
        id: "Technologies",
        title: "Technologies",
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/tony_ayala01/",
    },
    {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/Tony.Ayala201/",
    },
    {
        id: "social-media-3",
        icon: whatsapp,
        link: "https://wa.me/15534645836",
    },
    {
        id: "social-media-4",
        icon: mail,
        link: "mailto:antonioayalam2001@gmail.com",
    },
    // {
    //     id: "social-media-3",
    //     icon: twitter,
    //     link: "https://www.twitter.com/",
    // },
    // {
    //     id: "social-media-4",
    //     icon: linkedin,
    //     link: "https://www.linkedin.com/in/jos%C3%A9-antonio-mora-ayala-745a2a237/",
    // },
];

interface PersonalValue {
    id: string;
    title: string;
    value: string;
}

interface Services {
    id: string;
    name: string
    desc: string
    icon: ImageMetadata
}

export const personalValues: PersonalValue[] = [
    { id: "value-1", title: "Futuro Ingeniero", value: "Actualmente en el 8vo semestre de la carrera de Ingenieria en Sistemas Computacionales" },
    { id: "value-2", title: "Diseñador", value: "Técnico en Diseño Gráfico Digital " },
    { id: "value-3", title: "Desarrollador", value: " Desarrollador Frontend y Backend" },
]

export const services: Services[] = [
    {
        id: "1",
        name: "Great Designs",
        desc: "Creation of beautiful and elegant designs suited for your project identity",
        icon: design
    },
    {
        id: "2",
        name: "Code",
        desc: "Creation of beautiful and elegant designs suited for your project identity",
        icon: consulting
    },
    {
        id: "3",
        name: "Team Work",
        desc: "Creation of beautiful and elegant designs suited for your project identity",
        icon: code
    },
]

export const projects: Project[] = [
    {
        id: "1",
        name: "Reproductor de Musica",
        img: reproductor,
        link: "https://antonioayalam2001.github.io/ReproductorMusica/",
        desc: "Reproductor de musica estilo Spotify realizado con el API gratuito de Deezer",
        icons: [html, css3, javascript],
        gitUrl: "https://github.com/antonioayalam2001/ReproductorMusica"
    },
    {
        id: "2",
        name: "Wordle",
        img: wordle,
        link: "https://wordle-antoiom.netlify.app/",
        desc: "Clon de Wordle con implementacion de api publica que brinda el concepto de la palabra (solo en Inglés) . Demo pendiente de subir \n Repositorio si disponible",
        icons: [html, css3, javascript, react, typescript],
        gitUrl: "https://github.com/antonioayalam2001/Wordle"
    },
    {
        id: "3",
        name: "Expense Tracker",
        img: expenseTracker,
        link: "https://expense-tracker-tm.netlify.app/",
        desc: "Aplicacion para llevar registro de gastos realizados en general o con tarjetas de credito (posee opción de agragar una fecha de corte y calcula con base a esta).",
        icons: [html, css3, javascript, react],
        gitUrl: "https://github.com/antonioayalam2001/ExpenseTracker"
    },
    {
        id: "4",
        name: "Dashboard",
        img: dashboard,
        link: "https://dashboardantonio.netlify.app/",
        desc: "Dashboard con la implementación de gráficos y diferentes apartados, la versión movil aun necesita algunos arreglos, pero en su mayoría funciona.",
        icons: [html, css3, javascript, react],
        gitUrl: "https://github.com/antonioayalam2001/dashboardProject"
    },
    {
        id: "5",
        name: "Calendario Personal / Colaborativo",
        img: calendar,
        link: "https://calendarappantonio.netlify.app",
        desc: "Calendario personal o colaborativo con implementacion de inicio de sesión, modo claro y obscuro",
        icons: [html, css3, javascript, react, nodejs, mongodb],
        gitUrl: "https://github.com/antonioayalam2001/ReactCurso/tree/main/08MERNApp"
    },
    {
        id: "6",
        name: "GIF APP",
        img: gifApp,
        link: "https://reactgifapi.netlify.app/",
        desc: "Sencilla aplicacion de GIFS, lo cual me ha permitido practicar con el consumo de peticiones.",
        icons: [html, css3, javascript, react],
        gitUrl: "https://github.com/antonioayalam2001/ReactCurso/tree/main/04-git-expert-app"
    },
    {
        id: "7",
        name: "Movie Site",
        img: moviesSite,
        link: "https://antonioayalam2001.github.io/MovieSite/",
        desc: "Landing page para una aplicacion de streaming.",
        icons: [html, css3, javascript],
        gitUrl: "https://github.com/antonioayalam2001/MovieSite"
    },
    {
        id: "8",
        name: "Your Space",
        img: yourSite,
        link: "https://yoursiteblog.netlify.app/",
        desc: "Página web de blogs, para compartir noticias, gustos y opiniones.",
        icons: [html, css3, javascript, react, nodejs, mysql],
        gitUrl: "https://github.com/antonioayalam2001/YourSpace/tree/main"
    }
]