import React, { useState } from "react";
import "./App.css";
import SendMessage from "./componenets/SendMessage";
import ShowMessages from "./componenets/ShowMessages";

function App() {
  const [endPoint, setEndPoint] = useState("messages");
  return (
    <section className="App">
      <ShowMessages endPoint={endPoint} />
      <SendMessage />
      <button
        onClick={() => setEndPoint("messages/lastest")}
        className="lastestMessages"
      >
        Lastest messages
      </button>
    </section>
  );
}

export default App;
