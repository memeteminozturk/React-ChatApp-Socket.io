import { useState } from "react";
import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessages((messages) => [...messages, { message: message, isMe: true}]);
    sendMessage(message);

    setMessage("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="Mesajınızı yazın"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          {" "}
          Gönder{" "}
        </button>
      </form>
    </div>
  );
}

export default ChatForm;
