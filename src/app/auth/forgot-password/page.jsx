"use client"

import { useState } from "react"
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
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { handleForgotPassword } from "@/redux/user/userActions"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const toast = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await dispatch(handleForgotPassword({ email }))
      toast({
        title: "Success",
        description: "Check your email for the confirmation code",
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
    } finally {
      setIsLoading(false)
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
            Enter your email address and we'll send you a code to reset your
            password.
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isLoading}
              >
                Send Reset Code
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
