// App.js
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Messages from "./pages/messages";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import { useAuthContext } from "./AuthContext";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <LoginPage />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
