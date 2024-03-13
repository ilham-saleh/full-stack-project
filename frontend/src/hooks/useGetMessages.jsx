import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from "react-toastify";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3030/message/${selectedConversation?.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await res.json();

        if (result.error) {
          // throw new Error(result.error);
          toast(result.error);
        }
        setMessages(result.data);
      } catch (error) {
        toast(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?.id) getMessages();
  }, [selectedConversation?.id, setMessages]);

  return { messages, loading };
};
export default useGetMessages;
