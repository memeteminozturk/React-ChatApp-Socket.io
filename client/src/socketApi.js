import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor...");

  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  socket.on("connect", () => {
    console.log("Bağlantı sağlandı.");
  });
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

export const subscribeToChat = (cb) => {
  if (!socket) return;

  socket.on("receive-message", (message) => {
    console.log("Mesajınız var: ", message);
    cb(message);
  });
};

export const subscribeToMessageList = (cb) => {
  if (!socket) return;

  socket.on("message-list", (messages) => {
    console.log("Mesaj listesi: ", messages);
    cb(messages);
  });
};
