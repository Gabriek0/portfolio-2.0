import { ElementType, ReactElement, ReactNode } from "react";
import { Box, Button, Icon } from "@chakra-ui/react";
import { border } from "../../styles/theme";

interface ButtonProps {
  icon: ElementType;
  text: ReactNode;
  color: "pink" | "blue";
}

function ButtonComponent({ text, color, icon }: ButtonProps) {
  return (
    <Box w={36} borderRadius={8} overflow="hidden">
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
    </Box>
  );
}

export default ButtonComponent;
