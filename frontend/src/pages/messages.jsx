import React from "react";
import { Grid } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import Messages from "../components/message/messages";
import Users from "../components/message/users";

// Dummy data for messages and users
const messages = [
  // {
  //   id: 1,
  //   sender: "Alice",
  //   receiver: "Bob",
  //   content: "Hi Bob, how are you?",
  //   time: "10:00 AM",
  // },
  // {
  //   id: 2,
  //   sender: "Bob",
  //   receiver: "Alice",
  //   content: "I'm good, thanks. How about you?",
  //   time: "10:05 AM",
  // },
  // {
  //   id: 3,
  //   sender: "Alice",
  //   receiver: "Bob",
  //   content: "I'm fine too. Just working on a project.",
  //   time: "10:10 AM",
  // },
  // {
  //   id: 4,
  //   sender: "Bob",
  //   receiver: "Alice",
  //   content: "Oh, what kind of project?",
  //   time: "10:15 AM",
  // },
];

const users = [
  { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "David", avatar: "https://i.pravatar.cc/150?img=4" },
];

const MessagesPage = () => {
  return (
    <Grid h="100vh" templateColumns="3fr 1fr" templateRows="1fr" gap={0}>
      {/* Messages column */}
      <Messages messages={messages} />

      {/* Users column */}
      <Users users={users} />
    </Grid>
  );
};

export default MessagesPage;
