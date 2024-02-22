import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createConversation = async (senderId, receiverId) => {
  const conversation = await prisma.conversation.create({
    data: {
      participants: {
        connect: [{ id: Number(senderId) }, { id: Number(receiverId) }],
      },
    },
  });

  return conversation;
};

export const getConversations = async (senderId) => {
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

export const createMessage = async (
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
