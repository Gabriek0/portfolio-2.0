import { ElementType, ReactElement, ReactNode } from "react";
import { Box, Button, Icon, Link } from "@chakra-ui/react";
import { border } from "../../styles/theme";

interface ButtonProps {
  icon: ElementType;
  text: ReactNode;
  color: "pink" | "blue";
  customWidth?: boolean;
  linkTo?: string;
}

function ButtonComponent({
  text,
  color,
  icon,
  customWidth,
  linkTo,
}: ButtonProps) {
  return (
    <Box w={[customWidth ? "100%" : 36, 40]} borderRadius={8} overflow="hidden">
      <Link href={linkTo} isExternal>
        <Button
          h="100%"
          w="100%"
          py={3}
          px={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="600"
          fontSize="md"
          color="white"
          bgColor="background.100"
          borderWidth={4}
          borderStyle="solid"
          style={{
            borderImage: `${
              color === "pink" ? border.gradientPink : border.gradientBlue
            }`,
          }}
        >
          <Icon as={icon} color="white" w={5} h={5} mr={2} />
          {text}
        </Button>
      </Link>
    </Box>
  );
}

export default ButtonComponent;
