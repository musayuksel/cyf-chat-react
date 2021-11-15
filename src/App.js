import React, { useEffect, useState } from "react";
import "./App.css";
import SendMessage from "./componenets/SendMessage";
import ShowMessages from "./componenets/ShowMessages";
import fetchData from "./utils/fetchData";

function App() {
  const [endPoint, setEndPoint] = useState("messages");
  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "Musa",
      text: "Welcome!",
    },
  ]);

  const fetchMsg = () => {
    console.log(
      `Data will fetch with-> ${endPoint} endpoint`
    );
    fetchData(endPoint).then((messages) =>
      setMessages(messages)
    );
  };
  useEffect(() => {
    fetchMsg();
  }, [endPoint]);

  return (
    <section className="App">
      <ShowMessages
        fetchMsg={fetchMsg}
        messages={messages}
      />
      <SendMessage fetchMsg={fetchMsg} />
      <button
        onClick={() => setEndPoint("messages/lastest")}
        className="lastestMessages"
      >
        Last 10 messages
      </button>
      <button
        onClick={() => setEndPoint("messages")}
        className="lastestMessages"
      >
        All messages
      </button>
    </section>
  );
}

export default App;
