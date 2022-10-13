import {
  Flex,
  HStack,
  Icon,
  IconButton,
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
            Home
          </Link>
          <Link to="about-me" smooth={true}>
            Sobre mim
          </Link>
          <Link to="exp" smooth={true}>
            Experiência
          </Link>
          <Link to="projects" smooth={true}>
            Projetos
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
