const ProgressBar = ({ progressPrecent }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full z-10 bg-slate-300">
      <div
        className="bg-green-400 h-full"
        style={{ width: `${progressPrecent}%` }}
      ></div>
      <div className=" w-full h-full flex justify-center items-center gap-4 absolute left-0 top-0 text-slate-900">
        <span className=" text-lg ">{progressPrecent}%</span>{" "}
        <span className="text-sm animate-prime">
          File uploading please wait...
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
