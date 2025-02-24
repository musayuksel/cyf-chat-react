import React, { useState } from "react";

export default function SendMessage({ fetchMsg }) {
  //every time i don't have to say "event.target.value",
  // I created my own state for form element
  function useFormState(initial) {
    const [value, setValue] = useState(initial);
    function setEvent(event) {
      setValue(event.target.value);
    }
    return [value, setEvent];
  }
  const [from, setFrom] = useFormState("");
  const [text, setText] = useFormState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`From submited`);
    fetch(
      "https://musayuksel3-chat-server.glitch.me/messages",
      {
        method: "POST",
        body: JSON.stringify({
          from: from,
          text: text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        fetchMsg();
      }
      if (response.status === 400) {
        window.alert("Please enter name and message");
      }
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from"
          placeholder="Your Name"
          value={from}
          onChange={setFrom}
          required
        />

        <input
          type="text"
          name="text"
          placeholder="The message..."
          value={text}
          onChange={setText}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
