import React from "react";
import { Grid } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import Messages from "../components/message/messages";
import Conversations from "../components/message/conversations";

const MessagesPage = () => {
  return (
    <Grid h="100vh" templateColumns="3fr 1fr" templateRows="1fr" gap={0}>
      <Messages />

      <Conversations />
    </Grid>
  );
};

export default MessagesPage;
