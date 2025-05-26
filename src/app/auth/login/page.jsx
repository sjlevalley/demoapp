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

  const onSubmit = async (data) => {
    try {
      await dispatch(handleUserLogin(data))
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      })
      router.push("/dashboard")
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
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
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

          <Text>
            Don't have an account?{" "}
            <Link color="blue.500" onClick={() => router.push("/auth/signup")}>
              Sign up
            </Link>
          </Text>

          <Link
            color="blue.500"
            onClick={() => router.push("/auth/forgot-password")}
          >
            Forgot password?
          </Link>
        </VStack>
      </form>
    </Box>
  )
}
