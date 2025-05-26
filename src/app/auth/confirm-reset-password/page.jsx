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
import { handleConfirmResetPassword } from "@/redux/user/userActions"
import { useForm } from "react-hook-form"

export default function ConfirmResetPasswordPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const toast = useToast()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const bgGradient = useColorModeValue(
    "linear(to-br, gray.50, white)",
    "linear(to-br, gray.900, gray.800)"
  )
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const password = watch("password")

  const onSubmit = async (data) => {
    try {
      await dispatch(handleConfirmResetPassword(data))
      toast({
        title: "Password reset successful",
        description: "You can now login with your new password",
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
              Set New Password
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
                <FormControl isInvalid={errors.code}>
                  <FormLabel>Reset Code</FormLabel>
                  <Input
                    type="text"
                    size="lg"
                    {...register("code", {
                      required: "Reset code is required",
                    })}
                  />
                  <FormErrorMessage>{errors.code?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.password}>
                  <FormLabel>New Password</FormLabel>
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
                <FormControl isInvalid={errors.confirmPassword}>
                  <FormLabel>Confirm New Password</FormLabel>
                  <Input
                    type="password"
                    size="lg"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <FormErrorMessage>
                    {errors.confirmPassword?.message}
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
                  Reset Password
                </Button>
              </VStack>
            </form>
            <Text
              textAlign="center"
              mt={4}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Remember your password?{" "}
              <Link
                color="blue.500"
                onClick={() => router.push("/auth/login")}
                _hover={{ textDecoration: "underline" }}
              >
                Sign in
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}
