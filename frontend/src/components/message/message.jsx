import React from "react";
import useGetUsers from "../../hooks/useGetUsers";
import MessageSkeleton from "../messageSkeleton";
import { useAuthContext } from "../../AuthContext";
import useConversation from "../../zustand/useConversation";

const Message = ({ message, loading }) => {
  const { authUser } = useAuthContext();
  // console.log(authUser);
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser.id;

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profileImage = fromMe
    ? authUser.profileImage
    : selectedConversation?.profileImage;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <>
      {loading ? (
        <MessageSkeleton />
      ) : (
        <>
          <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={profileImage}
                />
              </div>
            </div>
            <div className="chat-header">
              {fromMe ? authUser.username : selectedConversation.username}
              {/* <time className="text-xs opacity-50">12:45</time> */}
            </div>
            <div className={`chat-bubble ${bubbleBgColor}`}>{message.text}</div>
            <div className="chat-footer opacity-50">{message.createdAt}</div>
          </div>
        </>
      )}
    </>
  );
};

{
  /*
  <div className="chat chat-end">
<div className="chat-image avatar">
  <div className="w-10 rounded-full">
    <img
      alt="Tailwind CSS chat bubble component"
      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
    />
  </div>
</div>
<div className="chat-header">
  {authUser.username}
  {/* <time className="text-xs opacity-50">12:46</time> */
}
{
  /* </div>
<div className="chat-bubble">{message.text}</div>
<div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
*/
}

export default Message;
