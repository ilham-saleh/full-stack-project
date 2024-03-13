// useConversation.js
import { create } from "zustand";

const useConversation = create((set) => {
  const storedSelectedConversation = localStorage.getItem(
    "selectedConversation"
  );

  return {
    selectedConversation: storedSelectedConversation
      ? JSON.parse(storedSelectedConversation)
      : null,
    setSelectedConversation: (selectedConversation) => {
      localStorage.setItem(
        "selectedConversation",
        JSON.stringify(selectedConversation)
      );
      set({ selectedConversation });
    },
    message: [],
    setMessage: (message) => set({ message }),
  };
});

export default useConversation;
