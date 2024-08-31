import { Children } from "react";

import logo from "/assets/image/Chat-Connect logo.png";
const AuthLayout = ({ children }) => {
  return (
    <>
      <header className=" flex justify-center items-center py-3 h-20 shadow-md bg-white">
        <img src={logo} alt="chat-connect logo" width={200} height={60} />
      </header>
      {children}
    </>
  );
};

export default AuthLayout;
