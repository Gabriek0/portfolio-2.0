// Chakra
import { Flex, Text } from "@chakra-ui/react";

// Components
import Project from "./Project";

import { v4 as uuid } from "uuid";
import { Projects as ProjectsData } from "../../types/Projects";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const projects: ProjectsData[] = useMemo(() => {
    return [
      {
        id: uuid(),
        title: "Remix Expenses",
        description: t("projects.remix-expenses.description"),
        link: "https://github.com/Gabriek0/remix-expenses",
        technologies: ["Remix", "Prisma", "MongoDB", "Typescript"],
        imageUrl: "https://i.ibb.co/s3QBSZD/Remix-Expenses.png",
      },
      {
        id: uuid(),
        title: "Ignite Call",
        description: t("projects.ignite-call.description"),
        imageUrl: "https://i.ibb.co/09Gm7t6/Ignite-Call.png",
        link: "https://github.com/Gabriek0/ignite-call",
        technologies: [
          "Typescript",
          "Next",
          "Next SEO",
          "Next Auth",
          "React Query",
          "React Query",
          "React Hook Forms",
          "Prisma",
          "Zod",
        ],
      },
      {
        id: uuid(),
        title: "Ignews",
        description: t("projects.ignews.description"),
        imageUrl: "https://i.ibb.co/rwDh3zz/Ignews.png",
        link: "https://github.com/Gabriek0/ignews",
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
        title: "World Trip",
        description: t("projects.worldTrip.description"),
        link: "https://github.com/Gabriek0/world-trip",
        imageUrl: "https://i.ibb.co/sHqrQC7/World-Trip.png",
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
