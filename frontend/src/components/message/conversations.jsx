import React from "react";
import { Box, Avatar, Text, AvatarBadge, Divider } from "@chakra-ui/react";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = ({ user }) => {
  // const { loading, conversations } = useGetConversations();
  // console.log(conversations);
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        p={2}
        cursor="pointer"
        _hover={{ bg: "gray.200" }}
      >
        <Avatar src={user.avatar} size="sm">
          <AvatarBadge boxSize="1em" bg="green" />
        </Avatar>
        <Text fontSize="md" ml={2}>
          {user.name}
        </Text>
      </Box>
      <Divider />
    </>
  );
};

export default Conversations;