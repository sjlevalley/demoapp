"use client"

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Link,
  useColorMode,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useBreakpointValue,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react"
import {
  FiHome,
  FiMenu,
  FiSettings,
  FiUsers,
  FiLogOut,
  FiLogIn,
  FiInfo,
  FiBriefcase,
  FiMail,
} from "react-icons/fi"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { usePathname, useRouter } from "next/navigation"
import { useSelector, useDispatch } from "react-redux"
import { handleUserLogout } from "@/redux/user/userActions"
import NextLink from "next/link"

const LinkItems = [
  { name: "Home", icon: FiHome, href: "/" },
  { name: "About", icon: FiInfo, href: "/about" },
  { name: "Jobs", icon: FiBriefcase, href: "/jobs" },
  { name: "Contact", icon: FiMail, href: "/contact" },
]

const SidebarContent = ({ onClose, ...rest }) => {
  const pathname = usePathname()
  const router = useRouter()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  const handleLogout = async () => {
    try {
      await dispatch(handleUserLogout())
      router.push("/auth/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Demo App
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          href={link.href}
          isActive={pathname === link.href}
        >
          {link.name}
        </NavItem>
      ))}
      <Box position="absolute" bottom="4" left="4" right="4">
        {user ? (
          <NavItem icon={FiLogOut} onClick={handleLogout}>
            Logout
          </NavItem>
        ) : (
          <NavItem icon={FiLogIn} href="/auth/login">
            Login / Sign Up
          </NavItem>
        )}
      </Box>
    </Box>
  )
}

const NavItem = ({ icon, children, href, isActive, onClick, ...rest }) => {
  const Component = href ? NextLink : Box
  const props = href ? { href } : { onClick }

  return (
    <Component
      {...props}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? "blue.400" : "transparent"}
        color={isActive ? "white" : "inherit"}
        _hover={{
          bg: isActive ? "blue.500" : "blue.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            as={icon}
            color={isActive ? "white" : "inherit"}
          />
        )}
        {children}
      </Flex>
    </Component>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const user = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()

  const handleLogout = async () => {
    try {
      await dispatch(handleUserLogout())
      router.push("/auth/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          size="md"
        />
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  size="sm"
                  name={user?.email || "Guest"}
                  bg={useColorModeValue("blue.400", "blue.600")}
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">
                    {user ? `Welcome, ${user.email}` : "Welcome, Guest"}
                  </Text>
                </VStack>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              {user ? (
                <MenuItem onClick={handleLogout}>Sign out</MenuItem>
              ) : (
                <MenuItem onClick={() => router.push("/auth/login")}>
                  Sign in
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.50", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}
