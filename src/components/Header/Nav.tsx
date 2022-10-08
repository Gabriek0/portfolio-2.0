import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

function Nav() {
  const { onOpen } = useSidebarDrawer();

  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex color="gray.100">
      {isLargerThan1024 ? (
        <HStack spacing={16}>
          <Link>Home</Link>
          <Link>Sobre mim</Link>
          <Link>Experiência</Link>
          <Link>Projetos</Link>
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
