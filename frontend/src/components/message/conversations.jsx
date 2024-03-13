import React from "react";
import { GridItem, Box, Input } from "@chakra-ui/react";

import User from "./user";
import useGetUsers from "../../hooks/useGetUsers";

const Conversations = () => {
  const { loading, users } = useGetUsers();
  const count = users.length;

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
  console.log(users);

  return (
    <GridItem as={Box} bg="gray.50" overflowY="auto">
      <Box p={2}>
        <Input
          type="text"
          placeholder="Search users"
          variant="filled"
          bg="gray.100"
        />
      </Box>
      <Box p={2} overflowY="auto">
        {loading || users.length === 0
          ? // Show skeletons if loading or no users
            renderSkeletons(count) // Adjust the count as needed
          : // Render actual content when loading is false and users exist
            users.map((user) => <User key={user.id} user={user} />)}
      </Box>
    </GridItem>
  );
};

export default Conversations;
