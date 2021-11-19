import React from "react";

export default function ShowMessages({
  messages,
  fetchMsg,
}) {
  const deleteFunc = async (id) => {
    const response = await fetch(
      `https://musayuksel3-chat-server.glitch.me/messages/${id}`,
      { method: "DELETE" }
    );
    if (response.ok) {
      fetchMsg();
    }
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
