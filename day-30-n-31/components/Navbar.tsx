import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const tglIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <chakra.header
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      // my={-10}
      shadow="md"
      position="fixed"
      top="0"
      zIndex={2}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a href="/" display="flex" alignItems="center">
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
              App
            </chakra.h1>
          </chakra.a>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: "none", md: "inline-flex" }}
          >
            <chakra.a href="/wishlist" display="flex" alignItems="center">
              <Button variant="ghost">Wish List</Button>
            </chakra.a>
          </HStack>
          <Button
            leftIcon={tglIcon}
            colorScheme="purple"
            size="sm"
            onClick={() => {
              toggleColorMode();
            }}
          >
            Toogle Mode
          </Button>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<HamburgerIcon />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <chakra.a href="/wishlist" display="flex" alignItems="center">
                <Button w="full" variant="ghost">
                  Wishlist
                </Button>
              </chakra.a>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}

export default Navbar;
