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
import { handleConfirmResetPassword } from "@/redux/user/userActions"
import { useForm } from "react-hook-form"

export default function ConfirmResetPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()
  const router = useRouter()
  const dispatch = useDispatch()
  const toast = useToast()

  const newPassword = watch("newPassword")

  const onSubmit = async (data) => {
    try {
      await dispatch(handleConfirmResetPassword(data))
      toast({
        title: "Success",
        description: "Your password has been reset successfully",
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
          <Heading textAlign="center">Reset Password</Heading>
          <Text textAlign="center">
            Enter the confirmation code sent to your email and your new
            password.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.code}>
                <FormLabel>Confirmation Code</FormLabel>
                <Input
                  {...register("code", {
                    required: "Confirmation code is required",
                  })}
                />
                <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.newPassword}>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.newPassword?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.confirmPassword}>
                <FormLabel>Confirm New Password</FormLabel>
                <Input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === newPassword || "The passwords do not match",
                  })}
                />
                <FormErrorMessage>
                  {errors.confirmPassword?.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isSubmitting}
              >
                Reset Password
              </Button>
            </VStack>
          </form>
          <Box textAlign="center">
            <Link href="/auth/login" color="blue.500">
              Back to Sign In
            </Link>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}
