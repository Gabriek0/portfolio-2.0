// Chakra
import { Flex, Text } from "@chakra-ui/react";

// Components
import Project from "./Project";

// Mock Data
import { projects } from "../../data/data";
import { useEffect, useState } from "react";

function Projects() {
  return (
    <Flex flexDir="column" py={[16, 16, 16, 28]} px={[4, 0]}>
      <Text
        fontWeight="600"
        fontSize={["2xl", "4xl"]}
        color="white"
        mb={12}
        ml={[4, 0]}
      >
        PROJETOS
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
