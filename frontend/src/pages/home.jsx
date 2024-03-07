import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
  const { logout } = useLogout();

  return (
    <div>
      <h1>Home</h1>
      <Link to="/messages">Messages</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
