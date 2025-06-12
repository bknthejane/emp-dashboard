import axios from "axios";

export const axiosInstance = () => {
    return axios.create({
    baseURL: `https://fakestoreapi.com`,
    headers: {
      "Content-Type": "application/json",
    },
  })
};