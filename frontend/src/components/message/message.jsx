import React from "react";
import { Box, Text, Avatar, HStack, VStack } from "@chakra-ui/react";

const Message = ({ message }) => {
  console.log(message.content);
  const isSent = message.sender === "Alice";
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          {/* <time className="text-xs opacity-50">12:45</time> */}
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          {/* <time className="text-xs opacity-50">12:46</time> */}
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      {/* 
      <HStack className="chat chat-start">
        <Avatar size="sm" />
        <VStack

        // maxW="60%"
        // p={2}
        // m={2}
        // borderRadius={5}
        // bg={isSent ? "blue.100" : "gray.100"}
        // alignSelf={isSent ? "flex-end" : "flex-start"}
        >
          <Box>
            <Text fontSize="sm" color="gray.600">
              {message.sender}
            </Text>
          </Box>
          <Box
            bg={isSent ? "blue.100" : "gray.100"}
            borderRadius={10}
            padding={2}
            alignSelf={isSent ? "flex-end" : "flex-start"}
          >
            <Text fontSize="md">{message.content}</Text>
            <Text fontSize="xs" color="gray.500" textAlign="right">
              {message.time}
            </Text>
          </Box>
        </VStack>
      </HStack> */}
    </>
  );
};

export default Message;
