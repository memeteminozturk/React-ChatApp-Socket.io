import { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init, subscribeToChat, subscribeToMessageList } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { setMessages } = useChat();
  useEffect(() => {
    init();

    // subscribeToMessageList((messageList) => {
    //   setMessages(messageList);
    // });

    subscribeToChat((message) => {
      setMessages((messages) => [
        ...messages,
        { message: message, isMe: false },
      ]);
    });
  }, [setMessages]);

  return (
    <div>
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
