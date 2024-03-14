import React from "react";
import { Box, Avatar, Text, AvatarBadge, Divider } from "@chakra-ui/react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(String(user?.id));
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
        bg={isSelected ? "blue.200" : ""}
        borderRadius={10}
      >
        <Avatar src={user.profileImage} size="sm">
          {isOnline && <AvatarBadge boxSize="1em" bg="green" />}
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
