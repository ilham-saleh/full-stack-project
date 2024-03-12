import useLogout from "../hooks/useLogout";

const Home = () => {
  const { logout } = useLogout();
  return (
    <div>
      <p>Home</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
