import { useEffect } from "react";
import { GridItem, Box, Text, Button, Input } from "@chakra-ui/react";
import { TiMessages } from "react-icons/ti";

import Message from "./message";
import { useAuthContext } from "../../AuthContext";
import useConversation from "../../zustand/useConversation";

const Messages = ({ messages }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // Set the selected conversation when the component mounts
    setSelectedConversation(selectedConversation);
  }, [setSelectedConversation, selectedConversation]);

  return (
    <GridItem as={Box} bg="white" overflowY="auto">
      <Box display="flex" flexDirection="column" height="100%">
        <Box flex="1" p={2}>
          {selectedConversation && messages.length > 0
            ? messages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  selectedConversation={selectedConversation}
                />
              ))
            : NoChatSelected()}
        </Box>
        <Box as="form" display="flex" alignItems="center" p={2}>
          <Input
            type="text"
            placeholder="Type a message"
            variant="flushed"
            flex="1"
            mr={2}
          />
          <Button colorScheme="blue" type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </GridItem>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.username} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default Messages;
