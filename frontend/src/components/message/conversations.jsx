import React, { useState, useEffect } from "react";
import { GridItem, Box, Input } from "@chakra-ui/react";

import User from "./User";
import useGetUsers from "../../hooks/useGetUsers";

const Conversations = () => {
  const { loading, users } = useGetUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    // Filter users based on the search term
    const filtered = users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  // Helper function to generate skeleton elements
  const renderSkeletons = (count) => {
    return [...Array(count)].map((_, index) => (
      <div key={index} className="flex gap-4 items-center">
        <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
    ));
  };

  const userCount = users.length;
  return (
    <GridItem as={Box} bg="gray.50" overflowY="auto">
      <Box p={2}>
        <Input
          type="text"
          placeholder="Search users"
          variant="filled"
          bg="gray.100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Box p={2} overflowY="auto">
        {loading || users.length === 0
          ? renderSkeletons(userCount)
          : filteredUsers.map((user) => <User key={user.id} user={user} />)}
      </Box>
    </GridItem>
  );
};

export default Conversations;
