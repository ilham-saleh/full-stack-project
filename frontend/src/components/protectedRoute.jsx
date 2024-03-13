import {
  Box,
  Text,
  Button,
  IconButton,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import useLogout from "../hooks/useLogout";

const ProtectedRoute = ({ children }) => {
  const { logout } = useLogout();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Box display="flex" minH="100vh">
      {/* Sidebar/Menu */}
      <Box
        bg="gray.800"
        color="white"
        w={{ base: "16", md: "64" }}
        p="4"
        transition="transform 0.3s ease-in-out"
        transform={{
          base: menuOpen ? "translateX(0)" : "translateX(-100%)",
          md: "translateX(0)",
        }}
      >
        <VStack spacing="4" align="stretch" height="100%">
          <Box textAlign="center">
            <Link to="/" fontSize="2xl" fontWeight="bold">
              Logo
            </Link>
          </Box>

          <Link to="/">Home</Link>
          <Link to="/messages">Messages</Link>

          <Spacer />

          <Button
            onClick={logout}
            variant="outline"
            colorScheme="whiteAlpha"
            leftIcon={<ArrowForwardIcon />}
          >
            Logout
          </Button>
        </VStack>
      </Box>

      <Box flex="1" p="4">
        <Box display={{ md: "none" }}>
          <IconButton
            icon={<HamburgerIcon />}
            onClick={toggleMenu}
            fontSize="2xl"
          />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default ProtectedRoute;
