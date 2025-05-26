"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
  Center,
  Stack,
} from "@chakra-ui/react"
import { FiCode, FiCpu, FiGlobe } from "react-icons/fi"

export default function OurServices() {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const services = [
    {
      icon: FiCode,
      title: "Product Development",
      description:
        "Do you need help managing your new product release or determining the direction for an existing product? We offer product development services to help create a product offering that meets and exceeds customer needs.",
    },
    {
      icon: FiGlobe,
      title: "Web Apps & Design",
      description:
        "Now more than ever, web applications require increased reliability and security to ensure success. Our expertise is in making intuitive applications and scaling them to work for your growing customer needs. We will work with you to design new apps or make changes to an existing app.",
    },
    {
      icon: FiCpu,
      title: "Embedded Systems",
      description:
        "Our team works with you to understand your needs and make recommendations to fit the customer requirements. Utilizing best practices, we help create products that are robust and meet customer needs. Some of the hardware products we have developed are used in GPS navigation, real-time sensing, and precision irrigation control, to name a few.",
    },
  ]

  return (
    <Box py={8} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.2xl" px={4}>
        <Heading
          as="h2"
          size="xl"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          mb={6}
        >
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {services.map((service, index) => (
            <Box
              key={index}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "2xl",
              }}
              border="1px"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Box
                h={"210px"}
                bg={useColorModeValue("gray.800", "gray.900")}
                pos={"relative"}
              >
                <Center h="full">
                  <Icon as={service.icon} w={20} h={20} color="white" />
                </Center>
              </Box>
              <Box p={6}>
                <Stack spacing={4}>
                  <Text
                    color={"cyan.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {service.title}
                  </Text>
                  <Text color={"gray.500"}>{service.description}</Text>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
