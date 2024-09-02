import { useEffect } from "react";
import { io } from "socket.io-client";
function App() {
  useEffect(() => {
    // const socketConnection = io("http://localhost:8080/");
    const socketConnection = io("https://chat-connect-app.netlify.app");

    console.log(socketConnection);
  }, []);
  return <>react App</>;
}

export default App;
