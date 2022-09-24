// React
import { useEffect, useState } from "react";

// Chakra
import { Flex, Text } from "@chakra-ui/react";

// Components
import Project from "./Project";
import axios from "axios";

// Axios

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("/repositories", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
          },
        })
        .then((response) => response.data)
        .then((data) => {
          setProjects(data);
        });
    })();
  }, []);

  console.log(projects);

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
        <Project />
        <Project />
      </Flex>
    </Flex>
  );
}

export default Projects;
