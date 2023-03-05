import axios from "axios";

const instance = axios.create({
  baseURL: process.ENV.API_DOMAIN,
});

export const getLikes = (id) => {
  console.log("getLikes");
  return new Promise.resolve(id);
};
