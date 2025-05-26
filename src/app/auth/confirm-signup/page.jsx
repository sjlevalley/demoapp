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
import { handleConfirmSignup } from "@/redux/user/userActions"

export default function ConfirmSignupPage() {
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
      await dispatch(handleConfirmSignup(data))
      toast({
        title: "Email verified",
        description: "Your account has been verified successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      })
      router.push("/auth/login")
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

          <FormControl isInvalid={errors.code}>
            <FormLabel>Verification Code</FormLabel>
            <Input
              {...register("code", {
                required: "Verification code is required",
              })}
            />
            <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            isLoading={isSubmitting}
          >
            Verify Email
          </Button>

          <Text>
            Didn't receive a code?{" "}
            <Link color="blue.500" onClick={() => router.push("/auth/signup")}>
              Sign up again
            </Link>
          </Text>
        </VStack>
      </form>
    </Box>
  )
}
