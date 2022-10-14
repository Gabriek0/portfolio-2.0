import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Link } from "react-scroll";

function Nav() {
  const { onOpen } = useSidebarDrawer();

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex color="gray.100">
      {isLargerThan1024 ? (
        <HStack spacing={16}>
          <Link to="home" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Home
            </Text>
          </Link>
          <Link to="about-me" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Sobre mim
            </Text>
          </Link>
          <Link to="exp" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Experiência
            </Text>
          </Link>
          <Link to="projects" smooth={true}>
            <Text
              cursor="pointer"
              _hover={{
                textDecoration: "underline",
              }}
            >
              Projetos
            </Text>
          </Link>
        </HStack>
      ) : (
        <>
          <IconButton
            aria-label="Open navigation" // Accessibility
            variant="unstyled"
            fontSize={24}
            onClick={onOpen}
            icon={<Icon as={RiMenuLine} />}
          />
        </>
      )}
    </Flex>
  );
}

export default Nav;
