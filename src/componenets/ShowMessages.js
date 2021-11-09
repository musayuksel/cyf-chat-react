import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

export default function ShowMessages({
  endPoint,
  setIsFetchAgain,
  isFetchAgain,
}) {
  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "Musa",
      text: "Welcome!",
    },
  ]);

  useEffect(() => {
    console.log(
      `useEffect run again with endpoint=>/${endPoint}`
    );
    fetchData(endPoint).then((messages) =>
      setMessages(messages)
    );
  }, [endPoint, isFetchAgain]);

  const messageList = messages.map((message) => {
    return (
      <li key={message.id} className="message">
        <div>
          <h3 className="messageFrom"> {message.from}</h3>{" "}
          <p className="messageText">{message.text}</p>
        </div>
        <i
          className="fa fa-trash"
          onClick={() => {
            fetch(
              `https://musayuksel3-chat-server.glitch.me/messages/${message.id}`,
              { method: "DELETE" }
            ).then((response) => {
              if (response.ok) {
                setIsFetchAgain((prev) => !prev);
              }
            });
          }}
          aria-hidden="true"
        ></i>
      </li>
    );
  });
  return <ul className="messageList">{messageList}</ul>;
}
