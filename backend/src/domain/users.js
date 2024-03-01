import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createUserDB = async (
  fullName,
  username,
  hashedPassword,
  gender,
  profileImage
) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        fullName: fullName,
        username: username,
        password: hashedPassword,
        gender: gender,
        profileImage: profileImage,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const findUserDB = async (username) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    return existingUser;
  } catch (error) {
    console.log("Error finding the USER:", error);
    throw error;
  }
};

export const getUserByIdDB = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });

  return user;
};

export const getUsersDB = async () => {
  return await prisma.user.findMany();
};
