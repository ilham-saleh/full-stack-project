import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import UseSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  console.log(message);

  const { loading, sendMessage } = UseSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };
  return (
    <Box
      as="form"
      display="flex"
      alignItems="center"
      p={2}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        placeholder="Type a message"
        variant="flushed"
        flex="1"
        mr={2}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {loading ? (
        <div className="loading loading-spinner"></div>
      ) : (
        <Button colorScheme="blue" type="submit">
          Send
        </Button>
      )}
    </Box>
  );
};

export default MessageInput;
