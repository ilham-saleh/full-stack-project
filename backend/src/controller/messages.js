import {
  createConversation,
  createMessage,
  getConversations,
} from "../domain/messages.js";
import sendDataResponse from "../utils/responses.js";

const sendMessage = async (req, res) => {
  const receiverId = req.params.id;
  const { message } = req.body;
  const senderId = req.user.id;

  try {
    let conversation = await getConversations(senderId);

    if (!Array.isArray(conversation)) {
      throw new Error("Conversations is not an array");
    }

    // Assign a default value to conversation if it is undefined
    conversation = conversation ?? {};

    if (!conversation.id) {
      conversation = await createConversation(senderId, receiverId);
    }

    const newMessage = await createMessage(
      message,
      senderId,
      receiverId,
      conversation.id
    );

    // Check if conversation.messages is an array
    if (!Array.isArray(conversation.messages)) {
      // Assign a default value to conversation.messages if it is undefined
      conversation.messages = conversation.messages || [];
    }

    if (newMessage) {
      conversation.messages.push(newMessage);
    }

    res.json({ data: newMessage });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export default sendMessage;
