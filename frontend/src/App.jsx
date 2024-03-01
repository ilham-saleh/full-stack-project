import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Messages from "./pages/messages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </>
  );
}

export default App;
