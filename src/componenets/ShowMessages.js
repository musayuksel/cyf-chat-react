import React, { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";

export default function ShowMessages({ endPoint }) {
  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "Musa",
      text: "Welcome to CYF chat system!",
    },
  ]);

  useEffect(() => {
    console.log(
      `useEffect run again with endpoint=>/${endPoint}`
    );
    fetchData(endPoint).then((messages) =>
      setMessages(messages)
    );
  }, [endPoint]);

  const messageList = messages.map((message) => {
    return (
      <li key={message.id} className="message">
        <h3 className="messageFrom"> {message.from}</h3>{" "}
        <p className="messageText">{message.text}</p>
      </li>
    );
  });
  return <ul className="messageList">{messageList}</ul>;
}
