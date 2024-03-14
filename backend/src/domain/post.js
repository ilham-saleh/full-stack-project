import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPostDB = async (name, prompt, image) => {
  try {
    const newPost = await prisma.post.create({
      data: {
        name,
        prompt,
        image,
      },
    });
    return newPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const getPostsDB = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};
