"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { useToast } from "@chakra-ui/react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react"
import { handleForgotPassword } from "@/redux/user/userActions"

export default function ForgotPasswordPage() {
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
      await dispatch(handleForgotPassword(data))
      toast({
        title: "Reset code sent",
        description: "Please check your email for the reset code",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      router.push("/auth/confirm-reset-password")
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

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            isLoading={isSubmitting}
          >
            Send Reset Code
          </Button>

          <Text>
            Remember your password?{" "}
            <Link color="blue.500" onClick={() => router.push("/auth/login")}>
              Sign in
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  )
}
