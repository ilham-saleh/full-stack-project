import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-toastify";

const UseSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const token = localStorage.getItem("token");

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message }),
      };
      const res = await fetch(
        `http://localhost:3030/message/send/${selectedConversation?.id}`,
        options
      );
      const result = await res.json();
      console.log(result.error);
      if (result.error) {
        // throw new Error(result.error);
        toast(result.error);
      }

      setMessages([...messages, result.data]);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default UseSendMessage;
