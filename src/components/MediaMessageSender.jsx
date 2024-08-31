import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiSendPlane2Fill } from "react-icons/ri";
import { Document, Page } from "react-pdf";
const MediaMessageSender = ({ imageVideoPadth, close, sendBtn }) => {
  const [message, setMessage] = useState("");
  return (
    <div className="absolute w-full h-[100%] bg-slate-600 left-0 top-0 bg-opacity-70 overflow-scroll z-40">
      <header className="bg-transparent h-14 w-full relative">
        <button
          className="absolute p-2 rounded top-1 left-1 active:scale-[1.2] "
          onClick={close}
        >
          <IoMdClose size={25} />
        </button>
      </header>
      {/* content */}
      <div className="h-[calc(100vh-184px)] relative flex justify-center items-center ">
        <div className=" max-w-2xl max-h-[300px]">
          {/* for image */}
          {imageVideoPadth.type === "image" && (
            <img
              src={imageVideoPadth.pathName}
              alt=""
              className={`max-w-2xl max-h-[300px] rounded`}
            />
          )}
          {/* for video */}
          {imageVideoPadth.type === "video" && (
            <video className="w-[360px] sm:w-auto" controls>
              <source src={imageVideoPadth.pathName} type="video/mp4"></source>
              <source src={imageVideoPadth.pathName} type="video/ogg"></source>
              Your browser does not support the video
            </video>
          )}
          {/* for document */}
          {imageVideoPadth.type === "document" && (
            <div>
              <Document file={imageVideoPadth.pathName}>
                <Page pageNumber={1}></Page>
              </Document>
            </div>
          )}
        </div>
        {/* input fild */}
        <div className="w-full flex justify-center absolute bottom-3">
          <input
            type="text"
            placeholder="Add a caption"
            className="w-full max-w-2xl py-2 rounded-sm px-4 outline-none focus:outline-primary bg-slate-200"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      {/* footer */}
      <div className="h-16 border-t border-slate-50 border-opacity-30 relative px-5 bg-white">
        <button
          className=" rounded-full p-3 bg-primary active:scale-[1.1] absolute right-5 top-1/2 -translate-y-1/2"
          onClick={() => sendBtn(message, imageVideoPadth.type)}
        >
          <RiSendPlane2Fill size={15} color="white" />
        </button>
      </div>
    </div>
  );
};

export default MediaMessageSender;
