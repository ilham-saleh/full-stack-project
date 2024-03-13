import React from "react";
import { Box, Avatar, Text, AvatarBadge, Divider } from "@chakra-ui/react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../AuthContext";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?.id === user.id;

  const handleClick = () => {
    setSelectedConversation(user); // Set the entire user object as the selectedConversation
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        p={2}
        cursor="pointer"
        _hover={!isSelected && { bg: "gray.200" }}
        onClick={handleClick}
        bg={isSelected ? "blue.200" : ""} // Use "blue.200" or any desired color
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
