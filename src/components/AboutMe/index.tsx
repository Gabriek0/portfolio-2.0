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
import { motion } from "framer-motion";

function AboutMe() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Flex my={[12, 28]} gap={28} justify="space-between">
      {isLargerThan1024 && (
        <Flex
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition="ease 1s"
        >
          <Image h="367px" w="367px" src={Photo} />
        </Flex>
      )}
      <Flex
        flexDir="column"
        w={["100%", "100%", "100%", "500px"]}
        gap={4}
        px={[8, 8, 24, 24, 0]}
        as={motion.div}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition="ease 1s"
      >
        <Text mb={4} color="white" fontWeight="bold" fontSize={["2xl", "xl"]}>
          SOBRE MIM
        </Text>

        <Text fontWeight="500" fontSize="xl" color="white">
          São Paulo, Brasil
        </Text>

        <Text
          color="gray.100"
          fontWeight="500"
          fontSize={18}
          lineHeight={8}
          textAlign="justify"
        >
          Sou apaixonado por tecnologia e pelo impacto que ela pode ter na vida
          das pessoas. Dessa forma, possuo foco em Desenvolvimento Front-end, e
          tenho o objetivo de desenvolver projetos que visam resolver problemas
          do mundo real. Sou uma pessoa extremamente focada e autodidata sempre
          aberta a aprender mais e compartilhar meus conhecimentos.
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
