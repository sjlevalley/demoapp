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
} from "@chakra-ui/react"
import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi"

export default function Contact() {
  const bgGradient = useColorModeValue(
    "linear(to-br, gray.50, white)",
    "linear(to-br, gray.900, gray.800)"
  )
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Location",
      content: "Benicia, CA",
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "(555) 123-4567",
    },
    {
      icon: FiMail,
      title: "Email",
      content: "contact@howeneat.com",
    },
    {
      icon: FiClock,
      title: "Hours",
      content: "Mon-Fri: 9AM - 5PM",
    },
  ]

  return (
    <Box bgGradient={bgGradient} minH="100vh">
      {/* Page Title */}
      <Box py={8}>
        <Container maxW="container.2xl" px={4}>
          <Heading
            as="h1"
            size="3xl"
            mb={6}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            Contact
          </Heading>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Box py={8}>
        <Container maxW="container.2xl" px={4}>
          <VStack spacing={6} align="start" mb={8}>
            <Heading
              as="h2"
              size="xl"
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
            >
              Get in Touch
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              Have questions about our services? We'd love to hear from you.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
            {contactInfo.map((info, index) => (
              <Box
                key={index}
                bg={cardBg}
                p={6}
                borderRadius="xl"
                boxShadow="xl"
                border="1px"
                borderColor={borderColor}
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "2xl",
                }}
              >
                <Flex align="center" mb={4}>
                  <Icon as={info.icon} w={6} h={6} color="cyan.500" mr={3} />
                  <Heading as="h3" size="md">
                    {info.title}
                  </Heading>
                </Flex>
                <Text
                  fontSize="lg"
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {info.content}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Contact Form */}
          <Box
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="xl"
            border="1px"
            borderColor={borderColor}
          >
            <VStack spacing={6} align="start">
              <Heading
                as="h2"
                size="xl"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                bgClip="text"
              >
                Send us a Message
              </Heading>
              <Divider />
              <Stack spacing={4} w="full">
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Your name" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="your@email.com" />
                </FormControl>
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input type="text" placeholder="Message subject" />
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your message..." rows={6} />
                </FormControl>
                <Button colorScheme="blue" size="lg">
                  Send Message
                </Button>
              </Stack>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
