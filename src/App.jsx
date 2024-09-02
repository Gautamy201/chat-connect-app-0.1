import { useEffect } from "react";
import io from "socket.io-client";
function App() {
  useEffect(() => {
    const url = [
      "https://chat-connect-app.netlify.app",
      "http://localhost:8080",
    ];
    // const socketConnection = io("http://localhost:8080/");
    const socketConnection = io(url[0]);

    console.log(socketConnection);
  }, []);
  return <>react App</>;
}

export default App;
