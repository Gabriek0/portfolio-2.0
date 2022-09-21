import { Flex, Text } from "@chakra-ui/react";
import Project from "./Project";

function Projects() {
  return (
    <Flex flexDir="column" py={[16, 16, 16, 28]}>
      <Text fontWeight="600" fontSize="4xl" color="white" mb={12}>
        PROJETOS
      </Text>
      <Flex flex="1" flexWrap="wrap">
        <Project />
        <Project />
      </Flex>
    </Flex>
  );
}

export default Projects;
