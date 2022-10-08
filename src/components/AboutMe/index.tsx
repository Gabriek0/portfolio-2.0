// Chakra UI
import { Flex, HStack, Image, Text, useMediaQuery } from "@chakra-ui/react";

// Components
import ButtonComponent from "../Button";

// React Icons
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

function AboutMe() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex my={[12, 28]} gap={28} justify="space-between">
      {isLargerThan1024 && (
        <Flex>
          <Image
            h="367px"
            w="367px"
            src="https://avatars.githubusercontent.com/u/89749843?v=4"
          />
        </Flex>
      )}
      <Flex
        flexDir="column"
        w={["100%", "100%", "100%", "500px"]}
        gap={4}
        px={[8, 8, 24, 24, 0]}
      >
        <Text mb={4} color="white" fontWeight="bold" fontSize={["2xl", "xl"]}>
          SOBRE MIM
        </Text>

        <Text fontWeight="500" fontSize="xl" color="white">
          São Paulo, Brasil
        </Text>

        <Text color="gray.100" fontWeight="500" fontSize={18} lineHeight={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac
          commodo dolor, nec bibendum velit.
        </Text>

        <HStack spacing={4} cursor="pointer">
          <SiJavascript color="#00D2DF" size={28} />
          <SiTypescript color="#00D2DF" size={28} />
          <AiFillHtml5 color="#00D2DF" size={28} />
          <SiCss3 color="#00D2DF" size={28} />
          <DiReact color="#00D2DF" size={28} />
          <TbBrandNextjs color="#00D2DF" size={28} />
        </HStack>

        <Flex mt={12} gap={4}>
          <ButtonComponent
            icon={AiOutlineCloudDownload}
            text="Currículo"
            color="pink"
          />
          <ButtonComponent
            linkTo="mailto:gabriel.sanches170@gmail.com"
            icon={AiOutlineMail}
            text="E-mail"
            color="blue"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AboutMe;
