import { useEffect, useState } from "react";
import Avtar from "./Avtar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const UserSrearchCard = ({ user, onClose }) => {
  const [userDetail, setUserDetail] = useState([]);
  const onlineUser = useSelector((state) => state.user.onlineUser);
  const isUserOnline = onlineUser.includes(userDetail._id);
  useEffect(() => {
    setUserDetail(user);
  }, [user]);
  const navPath = userDetail.name
    ? `/${userDetail._id}-${userDetail.name
        .split(" ")
        .map((str) => {
          return str[0].toUpperCase() + str.slice(1);
        })
        .join("-")}`
    : "";

  return (
    <Link
      to={navPath}
      className="flex items-center mt-3 p-2 lg:p-4 border border-transparent border-b-slate-300 hover:border hover:border-primary rounded cursor-pointer hover:bg-teal-100 gap-5 relative"
      onClick={onClose}
    >
      <div className="">
        <Avtar
          imageUrl={user?.profile_Pic}
          name={user?.name}
          width={40}
          height={40}
          userId={user?._id}
        />
      </div>
      <div>
        <div className="font-semibold text-ellipsis line-clamp-1">
          {user?.name}
        </div>
        <p className="text-ellipsis line-clamp-1">{user?.email}</p>
      </div>
      <div className=" absolute z-50 right-3 bottom-1">
        {isUserOnline ? (
          <span className="text-green-600 text-xs">online</span>
        ) : (
          <span className="text-gray-600 text-xs">offline</span>
        )}
      </div>
    </Link>
  );
};

export default UserSrearchCard;
