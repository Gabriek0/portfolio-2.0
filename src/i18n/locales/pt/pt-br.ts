import { TranslationContent } from "../../../models/Content";

export default {
  translations: {
    language: "Idioma",
    header: {
      mobile: {
        navigation: "Navegação",
      },
      home: "Home",
      aboutMe: "Sobre mim",
      experience: "Experiência",
      projects: "Projetos",
    },
    banner: {
      hi: "OLÁ EU SOU O",
      developer: "DESENVOLVEDOR FRONT-END",
    },
    aboutMe: {
      title: "SOBRE MIM",
      location: "São Paulo, Brasil",
      text: "Sou apaixonado por tecnologia e pelo impacto que ela pode ter na vida das pessoas. Dessa forma, possuo foco em Desenvolvimento Front-end, e tenho o objetivo de desenvolver projetos que visam resolver problemas do mundo real. Sou uma pessoa extremamente focada e autodidata sempre aberta a aprender mais e compartilhar meus conhecimentos.",
      buttonCv: "Currículo",
    },
    experience: {
      title: "EXPERERIÊNCIA",
      localsig: {
        date: {
          apr: "Abr",
          feb: "Fev",
        },
        title: "Estágio em Desenvolvimento Web",
        text: "No estágio, tive contato com o Desenvolvimento de Sites utilizando Wordpress, juntamente com seus diversos plugins, mais especificamente o Elementor PRO. Ademais, desenvolvi interfaces utilizando o Figma, e a aplicação das interfaces na prática, utilizando Next.js, Typescript e Styled-components. Também, tive contato com o Desenvolvimento Mobile utilizando React Native, no qual desenvolvemos um aplicativo para uma empresa terceirizada realizar vistorias em alguns pontos da cidade.",
      },
      youDevelop: {
        title: "Desenvolvedor Front End",
        text: "Desenvolvimento Web Front-End utilizando tecnologias, como: React.js, Next.js, Typescript, Styled-components, juntamente coma integração com o Firebase e S3 da AWS para armazenamento de dados e arquivos. Também, tive contato com metodologias agéis, como o Scrum, e o consumo de API's no Front End.",
        date: {
          apr: "Abr",
          currently: "Atual",
        },
      },
    },
    projects: {
      title: "PROJETOS",
      eSports: {
        description:
          "Projeto desenvolvido durante a Next Level Week da Rocketseat",
      },
      upfi: {
        description: "Um projeto para listar e adicionar imagens",
      },
      worldTrip: {
        description:
          "Uma plataforma de viagens online construído com Chakra UI",
      },
      dashgo: {
        description: "Dashboard interativa utilizando Chakra UI",
      },
      buttonTechnologies: "Tecnologias usadas no projeto",
      buttonView: "Visualizar",
    },
  } as TranslationContent,
};
