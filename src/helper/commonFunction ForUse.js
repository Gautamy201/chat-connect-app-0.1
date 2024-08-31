export const genratePathName = (string) => {
  const name = string.name
    .split(" ")
    .map((str) => {
      return str[0].toUpperCase() + str.slice(1);
    })
    .join();

  return `/${string._id}-${name}`;
};
