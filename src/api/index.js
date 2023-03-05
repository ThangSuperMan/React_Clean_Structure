import axios from "axios";

// const instance = axios.create({
//   baseURL: process.ENV.API_DOMAIN,
// });

export const getLikes = (id) => {
  console.log("getLikes");
  return 5;
  // return new Promise.resolve(id);
};

export const getComment = (id) => {
  console.log("getComment");
  return "Comment here";
};
