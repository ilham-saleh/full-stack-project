import { useAuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  // const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  // const navigate = useNavigate();

  const logout = async () => {
    // setLoading(true);
    try {
      const res = await fetch("http://localhost:3030/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      if (result.error) {
        throw new Error(result.error);
      }
      console.log(result);
      localStorage.clear();
      setAuthUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { logout };
};
export default useLogout;
