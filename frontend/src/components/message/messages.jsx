import React from "react";
import { GridItem, Box, Text, Button, Input } from "@chakra-ui/react";

import Message from "./message";

const Messages = ({ messages, users }) => {
  return (
    <GridItem as={Box} bg="white" overflowY="auto">
      <Box display="flex" flexDirection="column" height="100%">
        <Box flex="1" p={2}>
          {messages.length > 0 ? (
            messages.map((message) => (
              <Message key={message.id} message={message} />
            ))
          ) : (
            <Text fontSize="lg" color="gray.500" textAlign="center" mt={10}>
              Start a conversation
            </Text>
          )}
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

export default Messages;
