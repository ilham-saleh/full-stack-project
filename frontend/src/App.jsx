import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Messages from "./pages/Messages";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import { useAuthContext } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/Home";
import Community from "./pages/Community";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { authUser } = useAuthContext();

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
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
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
