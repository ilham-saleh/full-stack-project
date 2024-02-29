import {
  createConversationDB,
  createMessageDB,
  getConversationsDB,
} from "../domain/messages.js";
import sendDataResponse from "../utils/responses.js";

export const sendMessage = async (req, res) => {
  const receiverId = req.params.id;
  const { message } = req.body;
  const senderId = req.user.id;

  try {
    let conversation = await getConversationsDB(senderId);

    if (!Array.isArray(conversation)) {
      throw new Error("Conversations is not an array");
    }

    // Find the conversation with the specific receiver
    const targetConversation = conversation.find((conv) =>
      conv.participants.some(
        (participant) => participant.id === Number(receiverId)
      )
    );

    if (!targetConversation) {
      conversation = await createConversationDB(senderId, receiverId);
    }

    const newMessage = await createMessageDB(
      message,
      senderId,
      receiverId,
      targetConversation?.id || conversation.id
    );

    // Check if conversation.messages is an array
    if (!Array.isArray(targetConversation?.messages)) {
      // Assign a default value to conversation.messages if it is undefined
      targetConversation.messages = targetConversation.messages || [];
    }

    if (newMessage) {
      targetConversation.messages.push(newMessage);
    }

    console.log(targetConversation.messages);

    res.json({ data: newMessage });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    const conversations = await getConversationsDB(senderId);

    if (!conversations || conversations.length === 0) {
      return res.json([]);
    }

    // Find the conversation with the specific receiver
    const targetConversation = conversations.find((conv) =>
      conv.participants.some(
        (participant) => participant.id === Number(receiverId)
      )
    );

    if (!targetConversation) {
      return res.json([]);
    }

    const messages = targetConversation.messages || [];

    res.status(200).json({ messages });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};
