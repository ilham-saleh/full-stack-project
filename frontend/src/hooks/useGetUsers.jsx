
import { useEffect, useState } from "react";
import { useAuthContext } from "../AuthContext"; // Adjust the import path accordingly

const getCurrentUser = () => {
  // Assuming your authentication context provides the user information
  const { authUser } = useAuthContext(); // Adjust this based on your actual authentication context

  return authUser;
};

const useGetUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const currentUser = getCurrentUser();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // Fetch users data from your API
        const response = await fetch("http://localhost:3030/user");
        const result = await response.json();

        // Filter out the current user
        const filteredUsers = result.data.filter(
          (user) => user.id !== currentUser.id
        );

        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser.id]);

  return { loading, users };
};

export default useGetUsers;
