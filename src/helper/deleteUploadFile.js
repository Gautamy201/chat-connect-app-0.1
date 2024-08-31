const deleteUploadFile = async (fileName) => {
  let url = `http://localhost:8080/api/delete-uploded-file?imgUrl=${fileName}`;

  await fetch(url);
};

export default deleteUploadFile;
