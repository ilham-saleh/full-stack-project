import React from "react";
import { GridItem, Box, Input } from "@chakra-ui/react";

import Conversations from "./conversations";

const Users = ({ users }) => {
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
        {users.map((user) => (
          <Conversations key={user.id} user={user} />
        ))}
      </Box>
    </GridItem>
  );
};

export default Users;
