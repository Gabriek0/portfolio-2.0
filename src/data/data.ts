import { v4 as uuid } from "uuid";
import { Projects } from "../types/Projects";

export const projects: Projects[] = [
  {
    id: uuid(),
    title: "NLW eSports",
    description: "Projeto desenvolvido durante a Next Level Week da Rocketseat",
    link: "https://github.com/Gabriek0/nlw-esports-frontend",
    technologies: [
      "Javascript",
      "Typescript",
      "Tailwind",
      "Phosphor icons",
      "Radix",
      "Vite",
      "Axios",
    ],
    imageUrl:
      "https://github.com/Gabriek0/nlw-esports-frontend/raw/main/web/public/nlw-frontend.gif",
  },
  {
    id: uuid(),
    title: "Upfi",
    description: "Um projeto para listar e adicionar imagens",
    imageUrl:
      "https://github.com/Gabriek0/upfi/raw/main/public/upfi-desktop.gif",
    link: "https://github.com/Gabriek0/upfi",
    technologies: [
      "Javascript",
      "Typescript",
      "FaunaDB",
      "React Hook Forms",
      "React Query",
      "Framer Motion",
      "Chakra UI",
      "Axios",
    ],
  },
  {
    id: uuid(),
    title: "Dashgo",
    description: "Dashboard interativa utilizando Chakra UI",
    imageUrl:
      "https://github.com/Gabriek0/dashgo/raw/main/public/dashgo-desktop.gif",
    link: "https://github.com/Gabriek0/dashgo",
    technologies: [
      "ChakraUI",
      "Javascript",
      "NextJS",
      "ReactJS",
      "React Hook Forms",
      "React Icons",
      "Typescript",
      "Yup",
      "Yarn",
    ],
  },
  {
    id: uuid(),
    title: "World-trip",
    description: "Uma plataforma de viagens online construído com Chakra UI",
    link: "https://github.com/Gabriek0/world-trip",
    imageUrl:
      "https://github.com/Gabriek0/world-trip/raw/main/public/world-trip.gif",
    technologies: [
      "Axios",
      "ChakraUI",
      "Javascript",
      "JSON Server",
      "NextJS",
      "React",
      "React Icons",
      "Typescript",
      "Yarn",
    ],
  },
];
