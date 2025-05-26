"use client"

import { useRouter } from "next/navigation"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link,
  useToast,
  FormErrorMessage,
  Heading,
  Container,
  useColorModeValue,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { handleUserLogin } from "@/redux/user/userActions"
import { useForm } from "react-hook-form"

export default function LoginPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const bgGradient = useColorModeValue(
    "linear(to-br, gray.50, white)",
    "linear(to-br, gray.900, gray.800)"
  )
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const onSubmit = async (data) => {
    try {
      await dispatch(handleUserLogin(data))
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Box bgGradient={bgGradient} minH="100vh" py={10}>
      <Container maxW="container.sm">
        <Box
          w="full"
          p={8}
          borderWidth={1}
          borderRadius="xl"
          boxShadow="2xl"
          bg={cardBg}
          borderColor={borderColor}
          transition="all 0.3s"
          _hover={{
            transform: "translateY(-5px)",
            boxShadow: "2xl",
          }}
        >
          <VStack spacing={6} align="stretch">
            <Heading
              textAlign="center"
              size="xl"
              mb={6}
              bgGradient="linear(to-r, cyan.400, blue.500)"
              bgClip="text"
            >
              Welcome Back
            </Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={4}>
                <FormControl isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    size="lg"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.password}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    size="lg"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  isLoading={isSubmitting}
                  mt={4}
                  bgGradient="linear(to-r, cyan.400, blue.500)"
                  _hover={{
                    bgGradient: "linear(to-r, cyan.500, blue.600)",
                  }}
                >
                  Sign In
                </Button>

                <Text
                  textAlign="center"
                  mt={4}
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  Don't have an account?{" "}
                  <Link
                    color="blue.500"
                    onClick={() => router.push("/auth/signup")}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Sign up
                  </Link>
                </Text>

                <Link
                  color="blue.500"
                  onClick={() => router.push("/auth/forgot-password")}
                  textAlign="center"
                  display="block"
                  _hover={{ textDecoration: "underline" }}
                >
                  Forgot password?
                </Link>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}
