import React from "react";
import { Box, Avatar, Text, AvatarBadge, Divider } from "@chakra-ui/react";

const User = ({ user }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        p={2}
        cursor="pointer"
        _hover={{ bg: "gray.200" }}
      >
        <Avatar src={user.profileImage} size="sm">
          <AvatarBadge boxSize="1em" bg="green" />
        </Avatar>
        <Text fontSize="md" ml={2}>
          {user.username}
        </Text>
      </Box>
      <Divider />
    </>
  );
};

export default User;
