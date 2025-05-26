"use client"

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Center,
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react"
import { FiCode, FiServer, FiGlobe, FiCpu, FiCheck } from "react-icons/fi"
import { useState } from "react"

export default function Jobs() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedJob, setSelectedJob] = useState(null)
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const modalBg = useColorModeValue("white", "gray.800")

  const jobs = [
    {
      icon: FiCode,
      category: "Development",
      title: "Frontend Web Developer",
      description:
        "Join our team to build modern, responsive web applications using React and Next.js. Experience with TypeScript and modern frontend frameworks required.",
      location: "Benicia, CA",
      type: "Full-time",
      fullDescription: {
        overview:
          "We are seeking a talented Frontend Web Developer to join our team. You will be responsible for building and maintaining modern web applications that help our clients monitor and manage their industrial operations.",
        responsibilities: [
          "Develop and maintain responsive web applications using React and Next.js",
          "Implement modern UI/UX designs with attention to detail",
          "Write clean, maintainable, and well-documented code",
          "Collaborate with backend developers to integrate APIs",
          "Participate in code reviews and team discussions",
        ],
        requirements: [
          "3+ years of experience with React and modern JavaScript",
          "Strong knowledge of TypeScript",
          "Experience with Next.js or similar frameworks",
          "Understanding of responsive design principles",
          "Familiarity with version control systems (Git)",
        ],
        benefits: [
          "Competitive salary and benefits package",
          "Flexible work arrangements",
          "Professional development opportunities",
          "Collaborative and innovative work environment",
          "Health, dental, and vision insurance",
        ],
      },
    },
    {
      icon: FiServer,
      category: "Development",
      title: "Backend Web Developer",
      description:
        "Help us build scalable backend services and APIs. Experience with Node.js, Python, and database technologies required.",
      location: "Benicia, CA",
      type: "Full-time",
      fullDescription: {
        overview:
          "We are looking for a Backend Web Developer to help build and maintain our scalable backend services. You will work on developing APIs and services that power our industrial monitoring solutions.",
        responsibilities: [
          "Design and implement RESTful APIs",
          "Develop and maintain backend services using Node.js and Python",
          "Optimize database queries and data models",
          "Implement security best practices",
          "Write unit tests and documentation",
        ],
        requirements: [
          "3+ years of backend development experience",
          "Strong knowledge of Node.js and Python",
          "Experience with SQL and NoSQL databases",
          "Understanding of API design principles",
          "Familiarity with cloud services (AWS, Azure, or GCP)",
        ],
        benefits: [
          "Competitive salary and benefits package",
          "Remote work options",
          "Professional development budget",
          "Collaborative team environment",
          "Health and wellness benefits",
        ],
      },
    },
    {
      icon: FiGlobe,
      category: "Development",
      title: "Full-Stack Web Developer",
      description:
        "Work on both frontend and backend development. Experience with React, Node.js, and database technologies required.",
      location: "Benicia, CA",
      type: "Full-time",
      fullDescription: {
        overview:
          "Join our team as a Full-Stack Web Developer to work on end-to-end solutions for our industrial clients. You will be involved in both frontend and backend development of our web applications.",
        responsibilities: [
          "Develop full-stack web applications",
          "Design and implement database schemas",
          "Create responsive user interfaces",
          "Build and maintain RESTful APIs",
          "Collaborate with cross-functional teams",
        ],
        requirements: [
          "4+ years of full-stack development experience",
          "Proficiency in React and Node.js",
          "Experience with SQL and NoSQL databases",
          "Understanding of web security principles",
          "Strong problem-solving skills",
        ],
        benefits: [
          "Competitive compensation package",
          "Flexible work schedule",
          "Learning and development opportunities",
          "Modern office environment",
          "Comprehensive benefits package",
        ],
      },
    },
    {
      icon: FiServer,
      category: "Operations",
      title: "DevOps Engineer",
      description:
        "Manage our cloud infrastructure and CI/CD pipelines. Experience with AWS, Docker, and Kubernetes required.",
      location: "Benicia, CA",
      type: "Full-time",
      fullDescription: {
        overview:
          "We are seeking a DevOps Engineer to help manage and optimize our cloud infrastructure and deployment pipelines. You will play a crucial role in ensuring our systems are reliable, secure, and scalable.",
        responsibilities: [
          "Manage cloud infrastructure on AWS",
          "Implement and maintain CI/CD pipelines",
          "Configure and optimize Docker containers",
          "Manage Kubernetes clusters",
          "Monitor system performance and security",
        ],
        requirements: [
          "3+ years of DevOps experience",
          "Strong knowledge of AWS services",
          "Experience with Docker and Kubernetes",
          "Understanding of infrastructure as code",
          "Familiarity with monitoring tools",
        ],
        benefits: [
          "Competitive salary package",
          "Remote work flexibility",
          "Professional development support",
          "Collaborative team environment",
          "Comprehensive benefits package",
        ],
      },
    },
    {
      icon: FiCpu,
      category: "Engineering",
      title: "Embedded Systems Engineer",
      description:
        "Develop embedded systems and IoT solutions. Experience with C/C++, microcontrollers, and hardware interfaces required.",
      location: "Benicia, CA",
      type: "Full-time",
      fullDescription: {
        overview:
          "Join our team as an Embedded Systems Engineer to develop innovative IoT solutions for industrial applications. You will work on creating robust and efficient embedded systems.",
        responsibilities: [
          "Design and develop embedded systems",
          "Implement IoT solutions using microcontrollers",
          "Write and optimize C/C++ code",
          "Interface with various hardware components",
          "Test and debug embedded systems",
        ],
        requirements: [
          "3+ years of embedded systems experience",
          "Strong C/C++ programming skills",
          "Experience with microcontrollers",
          "Knowledge of hardware interfaces",
          "Understanding of IoT protocols",
        ],
        benefits: [
          "Competitive compensation",
          "Flexible work arrangements",
          "Professional development opportunities",
          "Innovative work environment",
          "Comprehensive benefits package",
        ],
      },
    },
  ]

  const handleViewJob = (job) => {
    setSelectedJob(job)
    onOpen()
  }

  return (
    <Box
      bgGradient={useColorModeValue(
        "linear(to-br, gray.50, white)",
        "linear(to-br, gray.900, gray.800)"
      )}
      minH="100vh"
    >
      {/* Page Title */}
      <Box>
        <Container maxW="container.2xl" px={4}>
          <Heading
            as="h1"
            size="xl"
            // mb={6}
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
          >
            Available Positions
          </Heading>
        </Container>
      </Box>

      {/* Jobs Section */}
      <Box py={8}>
        <Container maxW="container.2xl" px={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {jobs.map((job, index) => (
              <Box
                key={index}
                maxW={"445px"}
                w={"full"}
                bg={cardBg}
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
                borderColor={borderColor}
                display="flex"
                flexDirection="column"
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
                    <Icon as={job.icon} w={20} h={20} color="white" />
                  </Center>
                </Box>
                <Stack flex="1">
                  <Text
                    color={"cyan.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    {job.category}
                  </Text>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    {job.title}
                  </Heading>
                  <Text color={"gray.500"}>{job.description}</Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                  <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                    <Text fontWeight={600}>{job.location}</Text>
                    <Text color={"gray.500"}>{job.type}</Text>
                  </Stack>
                </Stack>
                <Button
                  mt={6}
                  w="full"
                  bgGradient="linear(to-r, cyan.400, blue.500)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, cyan.500, blue.600)",
                  }}
                  onClick={() => handleViewJob(job)}
                >
                  View Full Job Description
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Job Description Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg={modalBg}>
          <ModalHeader
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            fontSize="2xl"
          >
            {selectedJob?.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedJob && (
              <Stack spacing={6}>
                <Box>
                  <Heading size="md" mb={2}>
                    Overview
                  </Heading>
                  <Text color={useColorModeValue("gray.600", "gray.300")}>
                    {selectedJob.fullDescription.overview}
                  </Text>
                </Box>

                <Box>
                  <Heading size="md" mb={2}>
                    Responsibilities
                  </Heading>
                  <List spacing={2}>
                    {selectedJob.fullDescription.responsibilities.map(
                      (item, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FiCheck} color="cyan.500" />
                          {item}
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>

                <Box>
                  <Heading size="md" mb={2}>
                    Requirements
                  </Heading>
                  <List spacing={2}>
                    {selectedJob.fullDescription.requirements.map(
                      (item, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FiCheck} color="cyan.500" />
                          {item}
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>

                <Box>
                  <Heading size="md" mb={2}>
                    Benefits
                  </Heading>
                  <List spacing={2}>
                    {selectedJob.fullDescription.benefits.map((item, index) => (
                      <ListItem key={index}>
                        <ListIcon as={FiCheck} color="cyan.500" />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Button
                  w="full"
                  bgGradient="linear(to-r, cyan.400, blue.500)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, cyan.500, blue.600)",
                  }}
                >
                  Apply Now
                </Button>
              </Stack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
