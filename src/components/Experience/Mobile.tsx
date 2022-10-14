import { Flex, Tab, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

function ExperienceMobile() {
  return (
    <Tabs px={6} variant="unstyled" display="column" gap={28}>
      <Flex flexDir="column" pb={8}>
        <Text mb={8} fontSize="2xl" fontWeight="600" color="white">
          EXPERIÊNCIA
        </Text>
        <Flex>
          <Tab
            py={4}
            px={9}
            fontWeight="500"
            fontSize="md"
            color="white"
            _selected={{
              fontWeight: "700",
              background: "#151515",
              borderBottom: "2px solid #00D2DF",
            }}
          >
            YOUDevelop
          </Tab>
          <Tab
            py={4}
            px={9}
            fontSize="md"
            fontWeight="500"
            color="white"
            _selected={{
              fontWeight: "700",
              background: "#151515",
              borderBottom: "2px solid #00D2DF",
            }}
          >
            LocalSIG
          </Tab>
        </Flex>
      </Flex>
      <TabPanels>
        <TabPanel w="100%">
          <Text color="white" fontSize="xl" fontWeight="500" mb={6}>
            Desenvolvedor Front End
          </Text>

          <Flex color="white" justify="space-between" align="center" mb={6}>
            <Text color="blue.100" fontWeight="700">
              YOUDevelop
            </Text>
            <Text color="white" fontSize="sm" fontWeight="500">
              Abr 2022 - Atual
            </Text>
          </Flex>

          <Text color="gray.100" fontWeight="500" textAlign="justify">
            Desenvolvimento Web Front-End utilizando tecnologias, como:
            React.js, Next.js, Typescript, Styled-components, juntamente coma
            integração com o Firebase e S3 da AWS para armazenamento de dados e
            arquivos. Também, tive contato com metodologias agéis, como o Scrum,
            e o consumo de API's no Front End.
          </Text>
        </TabPanel>
        <TabPanel w="100%">
          <Text color="white" fontSize="xl" fontWeight="500" mb={6}>
            Estágio em Desenvolvimento Web
          </Text>

          <Flex justify="space-between" align="center" mb={6}>
            <Text color="blue.100" fontWeight="700">
              LocalSIG
            </Text>
            <Text color="white" fontSize="sm" fontWeight="500">
              Fev 2022 - Abr 2022
            </Text>
          </Flex>

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
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ExperienceMobile;
