import { useEffect, useRef } from "react";
import { GridItem, Box } from "@chakra-ui/react";
import { TiMessages } from "react-icons/ti";

import Message from "./Message";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { loading, messages } = useGetMessages();
  const messagesContainerRef = useRef(null);

  useListenMessages();

  useEffect(() => {
    // Set the selected conversation when the component mounts
    setSelectedConversation(selectedConversation);
  }, [setSelectedConversation, selectedConversation]);

  useEffect(() => {
    // Scroll to the bottom with smooth scroll when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <GridItem as={Box} bg="white" overflowY="auto">
      <Box display="flex" flexDirection="column" height="100%">
        <Box
          ref={messagesContainerRef}
          flex="1"
          p={2}
          overflowY="auto"
          style={{ scrollBehavior: "smooth" }}
        >
          {selectedConversation && messages?.length > 0 ? (
            messages.map((message) => (
              <Message key={message.id} message={message} loading={loading} />
            ))
          ) : (
            <NoChatSelected />
          )}
        </Box>
        <MessageInput />
      </Box>
    </GridItem>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.username}</p>
        <p>Send a message to start a conversation</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default Messages;
