import { json } from "express";
import {
  createConversationDB,
  createMessageDB,
  deleteMessageDB,
  deleteConversationDB,
  getConversationsDB,
} from "../domain/messages.js";
import sendDataResponse from "../utils/responses.js";
import { getReceiverSocketId, io } from "../../socket/socket.js";

export const sendMessage = async (req, res) => {
  const receiverId = req.params.id;
  const { message } = req.body;
  const senderId = req.user.id;

  if (!message) {
    return sendDataResponse(res, 400, "Content is required!");
  }

  try {
    let conversations = await getConversationsDB(senderId);

    if (!Array.isArray(conversations)) {
      throw new Error("Conversations is not an array");
    }

    // Find the conversation with the specific receiver
    const targetConversation = conversations.find((conv) =>
      conv.participants.some(
        (participant) => participant.id === Number(receiverId)
      )
    );
    console.log("Targetted Convs", targetConversation);

    if (!targetConversation) {
      // If the conversation doesn't exist, create a new one
      conversations = await createConversationDB(senderId, receiverId);
    }

    // Get the conversation ID (either from existing or newly created conversation)
    const conversationId = targetConversation?.id || conversations.id;

    const newMessage = await createMessageDB(
      message,
      senderId,
      receiverId,
      conversationId
    );

    if (!targetConversation?.messages) {
      // If messages array doesn't exist, initialize it
      targetConversation.messages = [];
    }

    // Push the new message to the messages array
    targetConversation.messages.push(newMessage);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    // Respond with the updated conversation
    res.json({ data: newMessage });
  } catch (error) {
    // console.log(error);
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

    res.status(200).json({ data: messages });
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export const deleteMessage = async (req, res) => {
  const messageId = req.params.id;

  try {
    const deletedMessage = await deleteMessageDB(messageId);

    if (deletedMessage) {
      return res.json({
        status: "Success",
        message: "Message deleted successfully.",
      });
    } else {
      return sendDataResponse(res, 404, "Message not found");
    }
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export const deleteConversation = async (req, res) => {
  const conversationId = req.params.id;

  try {
    const deletedConversation = await deleteConversationDB(conversationId);

    if (deletedConversation) {
      return res.json({
        status: "Success",
        message: `Conversation with ID ${conversationId} deleted successfully.`,
      });
    } else {
      return sendDataResponse(res, 404, "Conversation not found");
    }
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};
