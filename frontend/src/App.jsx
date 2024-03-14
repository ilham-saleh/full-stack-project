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
import { useAuthContext } from "./context/AuthContext";
import useLogout from "./hooks/useLogout";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/protectedRoute";

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
        <Route
          path="/"
          element={
            authUser ? (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
