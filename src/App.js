import React, { useState } from "react";
import "./App.css";
import ShowMessages from "./componenets/ShowMessages";

function App() {
  const [endPoint, setEndPoint] = useState("messages");
  return (
    <section className="App">
      <ShowMessages endPoint={endPoint} />

      <button
        onClick={() => setEndPoint("messages/lastest")}
      >
        Lastest messages
      </button>
    </section>
  );
}

export default App;
