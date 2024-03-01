import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/user")
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
        console.log(data.users);
      });
  }, []);

  return (
    <>
      {data.map((data) => (
        <p key={data.id}>{data.username}</p>
      ))}
    </>
  );
}

export default App;
