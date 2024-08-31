import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import UserSrearchCard from "./UserSrearchCard";
import axios from "axios";
import { useSelector } from "react-redux";
const SearchUser = ({ onClose }) => {
  const [searchUser, setSearchUser] = useState(["gautam"]);
  const [loading, setloading] = useState(false);
  const [searchUserInput, setSearchUserInput] = useState("");
  const user = useSelector((state) => state.user);
  const handleSearchUser = async () => {
    setloading(true);
    const URL = `${import.meta.env.REACT_APP_BACKEND_URL}/api/serch-user`;
    try {
      const response = await axios.post(URL, {
        search: searchUserInput,
      });

      const data = response.data.data;
      const onlineUsers = data.filter((u) => {
        return u._id !== user._id;
      });

      setSearchUser(onlineUsers);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };
  useEffect(() => {
    handleSearchUser();
  }, [searchUserInput]);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-20 bg-slate-700 bg-opacity-40 p-2">
      <button
        title="Close"
        onClick={onClose}
        className="absolute right-0 top-0 active:scale-[0.9] hover:text-red-500 px-3 py-3 lg:text-3xl"
      >
        <IoClose size={25} />
      </button>
      <div className="w-full max-w-lg mx-auto mt-12">
        <div className="bg-white rounded h-14 overflow-hidden flex">
          <input
            type="text"
            placeholder="Search user by name, email..."
            className="w-full outline-none py-1 h-full px-2"
            value={searchUserInput}
            onChange={(e) => setSearchUserInput(e.target.value)}
          />
          <button className="h-140 w-14 flex justify-center items-center active:scale-[0.9]">
            <IoMdSearch size={25} />
          </button>
        </div>
        {/* display search user */}
        <div className="bg-white mt-2 w-full p-4 rounded">
          {searchUser.length === 0 && !loading && (
            <p className="text-center text-slate-500 ">No user found</p>
          )}
          {/* loding */}
          {loading && <p className="text-slate-400">Search user...</p>}
          {/* display user */}
          {searchUser !== 0 &&
            !loading &&
            searchUser.map((user, index) => {
              return (
                <UserSrearchCard key={index} user={user} onClose={onClose} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
