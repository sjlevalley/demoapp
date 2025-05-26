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
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Stack,
  Divider,
  Center,
} from "@chakra-ui/react"
import {
  FiMail,
  FiMessageSquare,
  FiCode,
  FiCpu,
  FiGlobe,
  FiBriefcase,
  FiInfo,
} from "react-icons/fi"
import {
  ProductDevTeamIllustration,
  WebAppsTeamIllustration,
  EmbeddedTeamIllustration,
  AwardIllustration,
} from "@/components/HomeIllustrations"
import OurServices from "@/components/OurServices"

export default function Home() {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.50, white)",
    "linear(to-br, gray.900, gray.800)"
  )
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const services = [
    {
      icon: FiCode,
      title: "Product Development",
      description:
        "Do you need help managing your new product release or determining the direction for an existing product? We offer product development services to help create a product offering that meets and exceeds customer needs.",
      illustration: ProductDevTeamIllustration,
    },
    {
      icon: FiGlobe,
      title: "Web Apps & Design",
      description:
        "Now more than ever, web applications require increased reliability and security to ensure success. Our expertise is in making intuitive applications and scaling them to work for your growing customer needs. We will work with you to design new apps or make changes to an existing app.",
      illustration: WebAppsTeamIllustration,
    },
    {
      icon: FiCpu,
      title: "Embedded Systems",
      description:
        "Our team works with you to understand your needs and make recommendations to fit the customer requirements. Utilizing best practices, we help create products that are robust and meet customer needs. Some of the hardware products we have developed are used in GPS navigation, real-time sensing, and precision irrigation control, to name a few.",
      illustration: EmbeddedTeamIllustration,
    },
  ]

  const updates = [
    {
      title: "Job Posting - DevOps",
      description: "Now hiring..",
    },
    {
      title: "Job Posting - Frontend Web Developer",
      description: "Now hiring..",
    },
    {
      title: "Job Posting - Backend Web Developer",
      description: "Now hiring..",
    },
    {
      title: "Job Posting - Full-Stack Web Developer",
      description: "Now hiring..",
    },
    {
      title: "New Office and Lab",
      description: "New Office in Benicia, CA..",
    },
  ]

  return (
    <Box bgGradient={bgGradient} minH="100vh">
      {/* Page Title */}
      <Box>
        <Container maxW="container.2xl" px={4}>
          <Heading
            as="h1"
            size="xl"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            Home
          </Heading>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box py={8}>
        <Container maxW="container.2xl" px={4}>
          <VStack spacing={4} align="start" mb={8}>
            <Heading
              as="h1"
              size="2xl"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Howe Neat, Inc.
            </Heading>
            <Text
              fontSize="xl"
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              Specializing in Industrial Internet of Things (IIoT) and software
              solutions for remote monitoring and task management
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Services Section */}
      <OurServices />

      {/* Updates, About, and Contact Cards Section */}
      <Box py={8} bg={useColorModeValue("white", "gray.800")}>
        <Container maxW="container.2xl" px={4}>
          <Heading
            as="h2"
            size="xl"
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            mb={6}
          >
            See More
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {/* Updates Card */}
            <Box
              as="a"
              href="/jobs"
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
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
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Center h="full">
                  <Icon as={FiBriefcase} w={20} h={20} color="white" />
                </Center>
              </Box>
              <Stack>
                <Text
                  color={"cyan.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Careers
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Latest Updates
                </Heading>
                <Text color={"gray.500"}>
                  View our latest job openings and company updates. Join our
                  team and help us build the future of industrial technology.
                </Text>
              </Stack>
            </Box>

            {/* About Card */}
            <Box
              as="a"
              href="/about"
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
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
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Center h="full">
                  <Icon as={FiInfo} w={20} h={20} color="white" />
                </Center>
              </Box>
              <Stack>
                <Text
                  color={"cyan.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Company
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  About Us
                </Heading>
                <Text color={"gray.500"}>
                  Learn more about Howe Neat, Inc. and our mission to
                  revolutionize industrial technology through innovative
                  solutions.
                </Text>
              </Stack>
            </Box>

            {/* Contact Card */}
            <Box
              as="a"
              href="/contact"
              maxW={"445px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
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
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Center h="full">
                  <Icon as={FiMail} w={20} h={20} color="white" />
                </Center>
              </Box>
              <Stack>
                <Text
                  color={"cyan.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Get in Touch
                </Text>
                <Heading
                  color={useColorModeValue("gray.700", "white")}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  Contact Us
                </Heading>
                <Text color={"gray.500"}>
                  Have questions about our services? We'd love to hear from you.
                  Reach out to our team for more information.
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={6} borderTop="1px" borderColor={borderColor}>
        <Container maxW="container.2xl" px={4}>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            Demo Copyright ⓒ 2025 Howe Neat, Inc.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
