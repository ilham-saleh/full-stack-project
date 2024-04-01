import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createConversationDB = async (senderId, receiverId) => {
  const conversation = await prisma.conversation.create({
    data: {
      participants: {
        connect: [{ id: Number(senderId) }, { id: Number(receiverId) }],
      },
    },
  });

  return conversation;
};

export const getConversationsDB = async (senderId) => {
  try {
    const userWithConversation = await prisma.user.findUnique({
      where: { id: Number(senderId) },
      include: {
        conversations: {
          include: {
            participants: true,
            messages: true,
          },
        },
      },
    });

    return userWithConversation?.conversations || [];
  } catch (error) {
    console.error("Error retrieving conversations:", error);
    return [];
  }
};

export const createMessageDB = async (
  text,
  senderId,
  receiverId,
  conversationId
) => {
  try {
    const message = await prisma.message.create({
      data: {
        text,
        sender: {
          connect: { id: Number(senderId) },
        },
        receiver: {
          connect: { id: Number(receiverId) },
        },
        conversation: {
          connect: { id: Number(conversationId) },
        },
      },
    });

    return message;
  } catch (error) {
    console.error("Error creating message:", error);
  }
  
};

export const deleteMessageDB = async (messageId) => {
  try {
    const deletedMessage = await prisma.message.delete({
      where: { id: Number(messageId) },
    });

    return deletedMessage;
  } catch (error) {
    console.error("Error deleting message:", error);
  }
};

export const deleteConversationDB = async (conversationId) => {
  try {
    // Parse the conversationId to ensure it's a number
    const parsedConversationId = parseInt(conversationId, 10);

    // Find the conversation and include messages
    const conversationWithMessages = await prisma.conversation.findUnique({
      where: { id: parsedConversationId },
      include: { messages: true },
    });

    // Check if the conversation exists
    if (!conversationWithMessages) {
      console.error(
        `Conversation with ID ${parsedConversationId} not found in Prisma`
      );
      return null; // Return null if the conversation doesn't exist
    }

    // If it was the last conversation and it had messages, delete them
    if (
      conversationWithMessages.messages &&
      conversationWithMessages.messages.length > 0
    ) {
      await prisma.message.deleteMany({
        where: {
          id: {
            in: conversationWithMessages.messages.map((msg) => msg.id),
          },
        },
      });
    }

    // Delete the conversation after deleting related messages
    const deletedConversation = await prisma.conversation.delete({
      where: { id: parsedConversationId },
    });

    return deletedConversation;
  } catch (error) {
    console.error("Error deleting conversation:", error);
    throw error; // Re-throw the error to be handled by the calling function
  }
};
