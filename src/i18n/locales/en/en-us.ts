import { TranslationContent } from "../../../models/Content";

export default {
  translations: {
    language: "Language",
    header: {
      home: "Home",
      aboutMe: "About me",
      experience: "Experience",
      projects: "Projects",
    },
    banner: {
      hi: "HI MY NAME IS",
      developer: "FRONT END DEVELOPER",
    },
    aboutMe: {
      title: "ABOUT ME",
      location: "São Paulo, Brazil",
      text: "I am passionate about technology and the impact it can have on people's lives. As such, I am focused on Front-end development, and aim to develop projects that solve real-world problems. I am an extremely focused and self-taught person always open to learn more and share my knowledge.",
      buttonCv: "Curriculum",
    },
    experience: {
      title: "EXPERIENCE",
      localsig: {
        date: {
          apr: "Apr",
          feb: "Feb",
        },
        text: "In the internship, I had contact with the development of websites using Wordpress, along with its various plugins, specifically Elementor PRO. Furthermore, I developed interfaces using Figma, and the application of interfaces in practice, using Next.js, Typescript and Styled-components. Also, I had contact with Mobile Development using React Native, in which we developed an application for a third-party company to perform inspections in some points of the city.",
        title: "Web Development Internship",
      },
      youDevelop: {
        title: "Front End Developer",
        text: "Front-End Web Development using technologies, such as: React.js, Next.js, Typescript, Styled-components, along with integration with Firebase and S3 from AWS for data and file storage. Also, I had contact with agile methodologies, like Scrum, and the consumption of API's in the Front End.",
        date: {
          apr: "Apr",
          currently: "Currently",
        },
      },
    },
    projects: {
      title: "PROJECTS",
      eSports: {
        description: "Project developed during Rocketseat's Next Level Week",
      },
      upfi: {
        description: "A project to list and add images",
      },
      worldTrip: {
        description: "An online travel platform built with Chakra UI",
      },
      dashgo: {
        description: "Interactive Dashboard using Chakra UI",
      },
      buttonTechnologies: "Technologies used in the project",
      buttonView: "View",
    },
  } as TranslationContent,
};
