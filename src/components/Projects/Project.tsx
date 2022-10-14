// Chakra
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Text,
} from "@chakra-ui/react";

// Components
import ButtonComponent from "../Button";

// Icons
import { FiPaperclip } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Types
import { Projects } from "../../types/Projects";
import { useEffect, useState } from "react";

interface ProjectProps {
  props: Projects;
}

function Project({ props }: ProjectProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  return (
    <Flex flexDir="column" w={["100%", "50%"]} gap={[4]} px={4} py={6}>
      {!showContent ? (
        <>
          <Skeleton h="200px" w="100%" />
          <Skeleton h="20px" w="80%" />
          <Skeleton h="20px" w="80%" />
          <Skeleton h="20px" w="30%" />
        </>
      ) : (
        <>
          <Box position="relative">
            <Image
              h="200px"
              w="100%"
              cursor="pointer"
              objectFit="cover"
              alt={props.title}
              src={props.imageUrl}
              transition="transform .2s ease"
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Box>
          <Text color="white" fontWeight="600" fontSize={["lg", "2xl"]}>
            {props.title}
          </Text>
          <Text color="gray.100">{props.description}</Text>
          <Menu>
            <MenuButton as={Text} cursor="pointer" color="blue.100">
              Tecnologias usadas no projeto
              <ChevronDownIcon />
            </MenuButton>
            <MenuList bgColor="background.100">
              {props.technologies.map((technology, index) => (
                <MenuItem
                  key={index}
                  _focus={{
                    background: "background.100",
                  }}
                  bgColor="background.50"
                  color="blue.100"
                  closeOnSelect
                >
                  {technology}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <ButtonComponent
            customWidth
            icon={FiPaperclip}
            text="Visualizar"
            color="blue"
            linkTo={props.link}
          />
        </>
      )}
    </Flex>
  );
}

export default Project;
