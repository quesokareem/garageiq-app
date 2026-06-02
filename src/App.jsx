import { useState } from "react";

function GarageIQ() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setChat([...chat, { text: message, sender: "user" }]);
    setMessage("");

    // fake AI response (you can replace later)
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { text: "AI response coming soon...", sender: "bot" },
      ]);
    }, 500);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GarageIQ</h1>

      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {chat.map((msg, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <strong>{msg.sender === "user" ? "You" : "AI"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about your car..."
        style={{ width: "70%", padding: "8px" }}
      />
      <button onClick={sendMessage} style={{ padding: "8px 12px" }}>
        Send
      </button>
    </div>
  );
}

export default function App() {
  return <GarageIQ />;
}
