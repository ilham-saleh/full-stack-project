import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  IconButton,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Home from "./pages/home";
import Messages from "./pages/messages";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import { useAuthContext } from "./AuthContext";
import useLogout from "./hooks/useLogout";

function App() {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ChakraProvider>
      {/* Routes */}
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <LoginPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
