import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3030/user");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setUsers(data.data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return { loading, users };
};
export default useGetUsers;
