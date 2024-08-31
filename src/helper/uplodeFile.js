const url = `https://api.cloudinary.com/v1_1/${
  import.meta.env.REACT_APP_COUDINARY_CLUDE_NAME
}/image/upload`;
import axios from "axios";

const uploadFile = async (file, setUploadedPersecent) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chat-connect-app-file");

  const response = await axios.post(url, formData, {
    onUploadProgress: (data) => {
      setUploadedPersecent(Math.round((data.loaded / data.total) * 100));
    },
  });

  const responseData = await response.data;

  return responseData;
};

export default uploadFile;
