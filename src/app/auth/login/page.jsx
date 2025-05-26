"use client"

import { useRouter } from "next/navigation"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { handleUserLogin } from "@/redux/user/userActions"
import { useForm } from "react-hook-form"

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const router = useRouter()
  const dispatch = useDispatch()
  const toast = useToast()

  const onSubmit = async (data) => {
    try {
      await dispatch(handleUserLogin(data))
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
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="full"
        maxW="md"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={4} align="stretch">
          <Heading textAlign="center">Sign In</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
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
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isSubmitting}
              >
                Sign In
              </Button>
            </VStack>
          </form>
          <Box textAlign="center">
            <Link href="/auth/forgot-password" color="blue.500">
              Forgot Password?
            </Link>
          </Box>
          <Box textAlign="center">
            <Text>
              Don't have an account?{" "}
              <Link href="/auth/signup" color="blue.500">
                Sign Up
              </Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}
