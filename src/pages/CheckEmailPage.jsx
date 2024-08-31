import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CheckEmailPage = () => {
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmite = async (e) => {
    e.preventDefault();
    const URL = `${import.meta.env.REACT_APP_BACKEND_URL}/api/email`;
    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);
      if (response.data.success) {
        setData({
          email: "",
        });
        navigate("/password", {
          state: response?.data.data,
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md mx:2 rounded overflow-hidden p-4 mx-auto md:mx-auto">
        <div className="flex justify-center mb-2">
          <FaRegCircleUser size={"80"} />
        </div>
        <h3 className="font-semibold text-[20px]">
          Welcome to Chat-Conect app!
        </h3>
        <form onSubmit={handleSubmite} className="grid gap-4 mt-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="bg-[slate-100] px-2 py-1 focus:outline-none focus:border-primary focus:border-2 border-2 rounded"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-secondry text-white  px-4 py-2 rounded mt-2 transition-all duration-100 active:scale-[1.02] font-bold leading-relaxed tracking-wide"
          >
            Let's Go
          </button>
        </form>

        <p className="my-2 text-center">
          New User ?
          <Link
            to={"/register"}
            className="hover:text-primary font-semibold pl-1"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckEmailPage;
