import sendDataResponse from "../utils/responses.js";

const sendMessage = async (req, res) => {
  const { id: receiverId } = Number(req.params);
  const { text } = req.body;
  const senderId = req.user.id;

  try {
  } catch (error) {
    console.log(error);
    return sendDataResponse(res, 500, "Internal server error");
  }
};

export default sendMessage;
