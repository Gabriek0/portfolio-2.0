// Chakra UI
import { Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

// Components
import ButtonComponent from "../Button";
import IconSection from "../Icons";

// React Icons
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

// Images
import Photo from "../../assets/me.png";

function AboutMe() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex my={[12, 28]} gap={28} justify="space-between">
      {isLargerThan1024 && (
        <Flex>
          <Image h="367px" w="367px" src={Photo} />
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

        <IconSection />

        <Flex mt={12} gap={4}>
          <ButtonComponent
            icon={AiOutlineCloudDownload}
            text="Currículo"
            color="pink"
            linkTo="/public/Curriculo.pdf"
            download
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
