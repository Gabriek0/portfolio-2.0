import { Flex, Tab, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

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

          <Text color="gray.100" fontWeight="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </Text>
        </TabPanel>
        <TabPanel w="630px">
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

          <Text color="gray.100" fontWeight="500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
            mattis metus. Nullam sit amet mauris condimentum, volutpat augue in,
            mattis urna.
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default ExperienceDesktop;
