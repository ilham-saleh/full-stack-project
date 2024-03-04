// App.js
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Messages from "./pages/messages";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
