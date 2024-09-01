import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Avtar = ({ name, imageUrl, width, height, userId }) => {
  const onlineUser = useSelector((state) => state.user.onlineUser);
  let avtarName = "";
  if (name) {
    const splitName = name?.split(" ");
    if (splitName.length > 1) {
      avtarName = splitName[0][0] + splitName[1][0];
    } else {
      avtarName = splitName[0][0];
    }
  }

  const fontSize = String(Math.round(width / 3 + 2) + "px");
  const rendomNumber = Math.floor(Math.random() * 5);
  const bgColor = [
    "bg-salt-200",
    "bg-red-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-teal-200",
    "bg-rose-300",
    "bg-emerald-300",
    "bg-pink-300",
    "bg-fuchsia-300",
    "bg-purple-300",
    "bg-violet-300",
    "bg-indigo-300",
    "bg-blue-300",
    "bg-sky-300",
    "bg-cyan-300",
    "bg-lime-300",
    "bg-amber-300",
    "bg-orange-300",
    "bg-stone-300",
    "bg-neutral-300",
  ];

  const isUserOnline = onlineUser.includes(userId);
  return (
    <>
      <div
        className={`text-slate-800  rounded-full relative border overflow-hidden bg-white ${
          isUserOnline ? "border-primary" : "border-black"
        }`}
        style={{
          width: width,
          height: height,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            width={100}
            height={100}
            alt={name}
            className="overflow-hidden rounded-full"
          />
        ) : name ? (
          <div
            style={{
              width: width,
              height: height,
              fontSize: fontSize,
            }}
            className={`overflow-hidden w-full h-full rounded-full border flex justify-center items-center uppercase`}
          >
            <p className=" text-ellipsis text-nowrap">{avtarName}</p>
          </div>
        ) : (
          <FaRegCircleUser size={width} />
        )}
        {isUserOnline && (
          <div className="bg-green-500 absolute bottom-1 right-1  rounded"></div>
        )}
      </div>
    </>
  );
};

export default Avtar;
