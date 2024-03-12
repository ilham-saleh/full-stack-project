import React from "react";

const MessageSkeleton = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full skeleton"></div>
        </div>
        <div className="chat-header">
          <div className="skeleton h-4 w-20"></div>
        </div>
        <div className="chat-bubble">
          <div className="skeleton h-6 w-48"></div>
        </div>
        <div className="chat-footer opacity-50">
          <div className="skeleton h-3 w-16"></div>
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full skeleton"></div>
        </div>
        <div className="chat-header">
          <div className="skeleton h-4 w-20"></div>
        </div>
        <div className="chat-bubble">
          <div className="skeleton h-6 w-48"></div>
        </div>
        <div className="chat-footer opacity-50">
          <div className="skeleton h-3 w-16"></div>
        </div>
      </div>
    </>
  );
};

export default MessageSkeleton;
