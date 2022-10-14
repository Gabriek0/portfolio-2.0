import {
  Box,
  Flex,
  ScaleFade,
  Slide,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function ExperienceDesktop() {
  return (
    <Tabs display="flex" width="100%" variant="unstyled" gap={36}>
      <Flex flexDir="column">
        <Text mb={8} fontSize="2xl" fontWeight="600" color="white">
          EXPERIÊNCIA
        </Text>
        <Tab
          w={48}
          py={4}
          px={9}
          fontWeight="500"
          fontSize="md"
          color="white"
          _selected={{
            background: "#151515",
            borderLeft: "2px solid #00D2DF",
            fontWeight: "700",
          }}
        >
          YOUDevelop
        </Tab>
        <Tab
          w={48}
          py={4}
          px={9}
          fontSize="md"
          fontWeight="500"
          color="white"
          _selected={{
            background: "#151515",
            borderLeft: "2px solid #00D2DF",
            fontWeight: "700",
          }}
        >
          LocalSIG
        </Tab>
      </Flex>
      <TabPanels>
        <TabPanel w="630px">
          <Box>
            <Flex color="white" justify="space-between" align="center" mb={6}>
              <Text fontSize="xl" fontWeight="500">
                Desenvolvedor Front End
              </Text>
              <Text fontSize="sm" fontWeight="500">
                Abr 2022 - Atual
              </Text>
            </Flex>
            <Text color="blue.100" mb={6} fontWeight="700">
              YOUDevelop
            </Text>

            <Text color="gray.100" fontWeight="500" textAlign="justify">
              Desenvolvimento Web Front-End utilizando tecnologias, como:
              React.js, Next.js, Typescript, Styled-components, juntamente coma
              integração com o Firebase e S3 da AWS para armazenamento de dados
              e arquivos. Também, tive contato com metodologias agéis, como o
              Scrum, e o consumo de API's no Front End.
            </Text>
          </Box>
        </TabPanel>
        <TabPanel w="630px">
          <Box>
            <Flex color="white" justify="space-between" align="center" mb={6}>
              <Text fontSize="xl" fontWeight="500">
                Estágio em Desenvolvimento Web
              </Text>
              <Text fontSize="sm" fontWeight="500">
                Fev 2022 - Abr 2022
              </Text>
            </Flex>
            <Text color="blue.100" mb={6} fontWeight="700">
              LocalSIG
            </Text>

            <Text color="gray.100" fontWeight="500" textAlign="justify">
              No estágio, tive contato com o Desenvolvimento de Sites utilizando
              Wordpress, juntamente com seus diversos plugins, mais
              especificamente o Elementor PRO. Ademais, desenvolvi interfaces
              utilizando o Figma, e a aplicação das interfaces na prática,
              utilizando Next.js, Typescript e Styled-components. Também, tive
              contato com o Desenvolvimento Mobile utilizando React Native, no
              qual desenvolvemos um aplicativo para uma empresa terceirizada
              realizar vistorias em alguns pontos da cidade.
            </Text>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ExperienceDesktop;
