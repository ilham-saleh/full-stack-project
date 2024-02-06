import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3030")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default App;
