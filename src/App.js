import React, { useState } from "react";
import "./App.css";
import SendMessage from "./componenets/SendMessage";
import ShowMessages from "./componenets/ShowMessages";

function App() {
  const [endPoint, setEndPoint] = useState("messages");
  const [isFetchAgain, setIsFetchAgain] = useState(true);
  return (
    <section className="App">
      <ShowMessages
        endPoint={endPoint}
        setIsFetchAgain={setIsFetchAgain}
        isFetchAgain={isFetchAgain}
      />
      <SendMessage setIsFetchAgain={setIsFetchAgain} />
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
