import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ShowImageAndVideo = ({
  imageVideoUrl,
  imageVideoPath,
  uploadingPercent,
}) => {
  console.log(imageVideoPath);
  return (
    <div className=" border shadow-sm p-1 w-fit rounded bg-primary relative">
      <span className="w-0 h-0 border-r-[22px] border-primary border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent absolute -right-[10px] top-[-4.5px] rotate-[158deg]"></span>

      <div className="relative flex justify-center items-center">
        {imageVideoPath.type === "image" && (
          <img
            src={
              imageVideoUrl.pathName
                ? imageVideoUrl.pathName
                : imageVideoPath.pathName
            }
            alt={imageVideoPath.type}
            className="max-w-[180px] max-h-[280px] rounded"
          />
        )}
        {imageVideoPath.type === "video" && (
          <video className="w-[250px]" autoPlay muted>
            <source src={imageVideoPath.pathName} type="video/mp4"></source>
            <source src={imageVideoPath.pathName} type="video/ogg"></source>
            Your browser does not support the video
          </video>
        )}

        <div
          className={`absolute top-0 left-0 bg-slate-400 w-full h-full rounded flex justify-center items-center bg-opacity-5 ${
            imageVideoUrl && "hidden"
          }`}
        >
          <span className="w-[40px] h-[40px] block font-bold">
            <CircularProgressbar
              value={uploadingPercent}
              text={`${uploadingPercent}%`}
              strokeWidth={10}
              background={true}
              styles={buildStyles({
                textSize: "25px",
                pathColor: `teal`,
                textColor: "black",
                trailColor: "white",
                backgroundColor: "#ffffff49",
              })}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowImageAndVideo;
