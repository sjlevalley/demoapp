"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import theme from "../theme"
import { store } from "../redux/store"

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Provider>
  )
}
