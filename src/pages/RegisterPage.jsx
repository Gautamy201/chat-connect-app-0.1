import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import uploadFile from "../helper/uplodeFile";
import deleteUploadFile from "../helper/deleteUploadFile.js";
import axios from "axios";
import toast from "react-hot-toast";
import ProgressBar from "../components/ProgressBar.jsx";
import SpinLoader from "../components/SpinLoader.jsx";
const RegisterPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profile_Pic: "",
  });
  const [uploadPhoto, setUploadPhoto] = useState("");
  const [uplodedPersecent, setUploadedPersecent] = useState(null);
  const [clearFileLoader, setClearFileLoader] = useState(false);
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
  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];

    const uploadPhoto = await uploadFile(file, setUploadedPersecent);
    setData((preve) => {
      return {
        ...preve,
        profile_Pic: uploadPhoto?.url,
      };
    });

    setUploadPhoto(file);
    setUploadedPersecent(null);
  };

  // console.log(uplodedPersecent); // <--- console
  const handleClearUploadPhoto = async () => {
    setClearFileLoader(true);
    await deleteUploadFile(data.profile_Pic);
    setUploadPhoto("");
    setData((preve) => {
      return {
        ...preve,
        profile_pic: "",
      };
    });
    setUploadedPersecent(null);
    setClearFileLoader(false);
  };
  const handleSubmite = async (e) => {
    e.preventDefault();
    const URL = `${import.meta.env.REACT_APP_BACKEND_URL}/api/register`;
    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);
      if (response.data.success) {
        setData({
          name: "",
          email: "",
          password: "",
          profile_Pic: "",
        });
        setUploadPhoto("");
        navigate("/email");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md mx:2 rounded overflow-hidden p-4 mx-auto md:mx-auto">
        <h3 className="font-semibold text-[20px]">
          Welcome to Chat-Conect app!
        </h3>
        <form onSubmit={handleSubmite} className="grid gap-4 mt-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              autoFocus
              className="bg-[slate-100] px-2 py-1 focus:outline-none focus:border-primary focus:border-2 border-2 rounded"
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>
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
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="bg-[slate-100] px-2 py-1 focus:outline-none focus:border-primary focus:border-2 border-2 rounded"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="profile_Pic">
              Photo :
              <div className="h-14 bg-slate-200 flex justify-center items-center border-2 rounded hover:border-primary cursor-pointer transition-all duration-100 relative mt-1 overflow-hidden">
                {/* progress bar */}
                {uplodedPersecent && (
                  <ProgressBar progressPrecent={uplodedPersecent} />
                )}
                {/* ------------ */}

                {clearFileLoader && <SpinLoader />}

                {/* ------------ */}
                <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1 flex items-center gap-5 z-[2]">
                  {uploadPhoto && (
                    <img
                      className=" h-[32px] w-[32px] border border-black rounded-sm"
                      src={URL.createObjectURL(uploadPhoto)}
                      alt={uploadPhoto.name}
                    />
                  )}
                  {uploadPhoto.name
                    ? uploadPhoto?.name
                    : "Upload profile photo"}
                </p>

                {uploadPhoto.name && (
                  <button
                    type="button"
                    className="text-lg ml-2 hover:text-red-600 cursor-pointer active:scale-[1.1] z-[2]"
                    onClick={handleClearUploadPhoto}
                    title="clear file"
                  >
                    <MdClose />
                  </button>
                )}

                {!uploadPhoto.name && (
                  <input
                    type="file"
                    id="profile_Pic"
                    name="profile_Pic"
                    className="absolute w-full h-full bg-red-200 opacity-0"
                    onChange={handleUploadPhoto}
                    required
                  />
                )}
              </div>
              {/* ----- */}
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-secondry text-white  px-4 py-2 rounded mt-2 transition-all duration-100 active:scale-[1.02] font-bold leading-relaxed tracking-wide"
          >
            Register
          </button>
        </form>

        <p className="my-2 text-center">
          Already have account ?
          <Link to={"/email"} className="hover:text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
