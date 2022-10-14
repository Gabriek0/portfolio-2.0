// Chakra
import { Flex, Text } from "@chakra-ui/react";

// Components
import Project from "./Project";

import { v4 as uuid } from "uuid";
import { Projects as ProjectsData } from "../../types/Projects";

import { useTranslation } from "react-i18next";
import { useMemo } from "react";

function Projects() {
  const { t } = useTranslation();

  const projects: ProjectsData[] = useMemo(() => {
    return [
      {
        id: uuid(),
        title: "NLW eSports",
        description: t("projects.eSports.description"),
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
        imageUrl: "https://i.ibb.co/xGXxmhL/nlw-esports.png",
      },
      {
        id: uuid(),
        title: "Upfi",
        description: t("projects.upfi.description"),
        imageUrl: "https://i.ibb.co/0XP1L8N/upfi.png",
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
        description: t("projects.dashgo.description"),
        imageUrl: "https://i.ibb.co/CMySwTX/dashgo.png",
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
        description: t("projects.worldTrip.description"),
        link: "https://github.com/Gabriek0/world-trip",
        imageUrl: "https://i.ibb.co/BwxgW9t/world-trip.png",
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
  }, [t]);

  return (
    <Flex flexDir="column" py={[16, 16, 16, 28]} px={[4, 0]}>
      <Text
        fontWeight="600"
        fontSize={["2xl", "4xl"]}
        color="white"
        mb={12}
        ml={[4, 0]}
      >
        {t("projects.title")}
      </Text>
      <Flex
        align={["center"]}
        gap={[2, 0]}
        flexDir={["column", "row"]}
        flex="1"
        flexWrap="wrap"
      >
        {projects.map((project) => (
          <Project key={project.id} props={project} />
        ))}
      </Flex>
    </Flex>
  );
}

export default Projects;
