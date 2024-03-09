import { Box, Flex, Heading, Text, Link, Button, Image, VStack, Container, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaPodcast, FaRegEnvelope } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={10} align="center">
        <Flex direction="column" align="center" my={10}>
          <Heading as="h1" size="2xl" fontWeight="bold" mb={2}>
            Martin McGloin
          </Heading>
          <Text fontSize="lg" color={textColor} mb={6}>
            👋 I'm the Marketing Manager, always pondering how IoT, software, and sensors can simplify and optimize our building operations. Passionate about enhancing the everyday life of building occupants, I'm on a mission to ensure the right data reaches the right people in an understandable format.
            <br />
            Previously a software developer in the fintech industry, I've witnessed a sector's transformation thanks to digitalization, open data, and newcomers. I've also disrupted customer services across various industries with my startup, Sorry as a Service, recognized by Forbes with a "Forbes 30 Under 30" inclusion in 2017.
            <br />
            Overall, a cheerful person from Drammen with Irish roots.{" "}
            <Link href="https://www.linkedin.com/in/martinmcgloin" color="teal.500" isExternal>
              Connect with me on LinkedIn.
            </Link>
          </Text>
          <Text fontSize="lg" color={textColor} mb={6}>
            👋 By day, I'm the Marketing Manager at Airthings for Business, always pondering how IoT, software, and sensors can simplify and optimize our building operations. Passionate about enhancing the everyday life of building occupants, I'm on a mission to ensure the right data reaches the right people in an understandable format.
            <br />
            Previously a software developer in the fintech industry, I've witnessed a sector's transformation thanks to digitalization, open data, and newcomers. I've also disrupted customer services across various industries with my startup, Sorry as a Service, recognized by Forbes with a "Forbes 30 Under 30" inclusion in 2017.
            <br />
            Overall, a cheerful person from Drammen with Irish roots.{" "}
            <Link href="https://www.linkedin.com/in/martinmcgloin" color="teal.500" isExternal>
              Connect with me on LinkedIn.
            </Link>
          </Text>
          <Heading as="h1" size="2xl" fontWeight="bold" mb={2}>
            Martin McGloin
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Product Leader | Podcast Host | PropTech Enthusiast
          </Text>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcmFrdGlzayUyMFByb3BUZWNoJTIwUG9kY2FzdHxlbnwwfHx8fDE3MDk5OTkzNDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Praktisk PropTech" />
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Praktisk PropTech
            </Heading>
            <Text mb={4}>Co-hosted with Tommy Hagenes, Praktisk PropTech is the Norwegian podcast dedicated to demystifying property technology. We're passionate about leveraging IoT, sensor technology, and digital tools to provide actionable insights for more sustainable and healthier buildings.</Text>
            <Button as={Link} href="https://www.praktiskproptech.com" leftIcon={<FaPodcast />} colorScheme="teal">
              Visit Podcast
            </Button>
          </Box>

          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1515191107209-c28698631303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxFbmVyZ3klMjBDb250cm9sJTIwQVN8ZW58MHx8fHwxNzA5OTk5MzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Energy Control AS" />
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Energy Control AS
            </Heading>
            <Text mb={4}>As the Chief Product Officer, I lead product development initiatives focusing on innovative energy-saving solutions. Our work with entities like the Norwegian Road Administration aims to sustainably and efficiently manage building portfolios.</Text>
          </Box>

          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5kYWIlMjBOb3J3YXklMjBBaXJmbHVlbnNlcnxlbnwwfHx8fDE3MDk5OTkzNDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lindab Airfluenser" />
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              Lindab Norway
            </Heading>
            <Text mb={4}>As an Airfluenser, I'm injecting a breath of fresh tech into HVAC with Lindab's UltraLink VAV dampers. I'm all about elevating indoor air quality and championing energy efficiency with a mix of humor and expertise.</Text>
          </Box>

          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1599585896662-85853131f259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxOb3J3ZWdpYW4lMjBTb2NpZXR5JTIwb2YlMjBIVkFDJTIwRW5naW5lZXJzfGVufDB8fHx8MTcwOTk5OTM0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Norwegian Society of HVAC Engineers" />
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={2}>
              NORSK VVS
            </Heading>
            <Text mb={4}>Proudly serving on the board of the Oslo chapter of the Norwegian Society of HVAC Engineers, I am committed to contributing to the advancement of ventilation, indoor air quality, and energy efficiency.</Text>
          </Box>
        </SimpleGrid>

        <Flex direction="column" align="center" my={10}>
          <Heading as="h2" size="xl" fontWeight="bold" mb={4}>
            Let's Connect
          </Heading>
          <Button as={Link} href="mailto:martin@martinmcgloin.com" size="lg" colorScheme="green" leftIcon={<FaRegEnvelope />}>
            Get in Touch
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
