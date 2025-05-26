import { Heading, Container, Box } from "@chakra-ui/react"

const PageTitle = ({ title }) => {
  return (
    <Box>
      <Container maxW="container.2xl" px={4}>
        <Heading
          as="h1"
          size="xl"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          {title}
        </Heading>
      </Container>
    </Box>
  )
}

export default PageTitle
