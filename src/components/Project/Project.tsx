import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ButtonComponent from "../Button";

import { FiPaperclip } from "react-icons/fi";

function Project() {
  return (
    <Flex
      flexDir="column"
      border="2px solid red"
      w={["100%", "50%"]}
      gap={[4]}
      px={4}
      py={6}
    >
      {/*
      <Box>
        <Image />
      </Box>
  */}
      <Text color="white">Nome do projeto</Text>
      <Text color="gray.100">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit interdum odio eu varius.
      </Text>
      <Text color="blue.100">Tecnologias usadas no projeto</Text>
      <ButtonComponent text="Visualizar" color="blue" icon={FiPaperclip} />
    </Flex>
  );
}

export default Project;
