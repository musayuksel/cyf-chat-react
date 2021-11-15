import React, { useEffect } from "react";

export default function ShowMessages({
  messages,
  fetchMsg,
}) {
  const deleteFunc = async (id) => {
    await fetch(
      `https://musayuksel3-chat-server.glitch.me/messages/${id}`,
      { method: "DELETE" }
    );
    fetchMsg();
  };

  const messageList = messages.map((message) => {
    return (
      <li key={message.id} className="message">
        <div>
          <h3 className="messageFrom"> {message.from}</h3>{" "}
          <p className="messageText">{message.text}</p>
        </div>
        <i
          className="fa fa-trash"
          onClick={() => deleteFunc(message.id)}
          aria-hidden="true"
        ></i>
      </li>
    );
  });
  return <ul className="messageList">{messageList}</ul>;
}
