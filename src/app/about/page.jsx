"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react"
import { FiAward, FiUsers, FiMapPin } from "react-icons/fi"
import OurServices from "@/components/OurServices"
import PageTitle from "@/components/PageTitle"

export default function About() {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.50, white)",
    "linear(to-br, gray.900, gray.800)"
  )
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const stats = [
    {
      icon: FiUsers,
      label: "Team Members",
      value: "20+",
    },
    {
      icon: FiAward,
      label: "Years Experience",
      value: "10+",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Benicia, CA",
    },
  ]

  return (
    <Box bgGradient={bgGradient} minH="100vh">
      <PageTitle title="About" />

      {/* Hero Section */}
      <Box py={8}>
        <Container maxW="container.2xl" px={4}>
          <VStack spacing={6} align="start" mb={8}>
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
            >
              Our Story
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              Howe Neat, Inc. is a product development company specializing in
              the Industrial Internet of Things (IIoT), and software that makes
              remote monitoring of equipment and task management easier.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={8} bg={useColorModeValue("gray.50", "gray.900")}>
        <Container maxW="container.2xl" px={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {stats.map((stat, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="xl"
                border="1px"
                borderColor={borderColor}
              >
                <Flex align="center" mb={4}>
                  <Icon as={stat.icon} w={6} h={6} color="cyan.500" mr={3} />
                  <Heading as="h3" size="md">
                    {stat.label}
                  </Heading>
                </Flex>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "white")}
                >
                  {stat.value}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <OurServices />

      {/* Company Info Section */}
      <Box py={8}>
        <Container maxW="container.2xl" px={4}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Box>
              <Heading
                as="h2"
                size="xl"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                bgClip="text"
                mb={4}
              >
                Our Mission
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.300")}
                mb={4}
              >
                We are committed to delivering innovative solutions that help
                our clients succeed in the digital age. Our team of experts
                works tirelessly to create products that are not only functional
                but also user-friendly and scalable.
              </Text>
            </Box>
            <Box>
              <Heading
                as="h2"
                size="xl"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                bgClip="text"
                mb={4}
              >
                Our Vision
              </Heading>
              <Text
                fontSize="lg"
                color={useColorModeValue("gray.600", "gray.300")}
                mb={4}
              >
                To be the leading provider of IIoT solutions and software
                development services, helping businesses transform their
                operations through technology and innovation.
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}
