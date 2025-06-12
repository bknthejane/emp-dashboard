import axios from "axios";

export const axiosInstance = () => {
    return axios.create({
    baseURL: `https://api.escuelajs.co/api/v1`,
    headers: {
      "Content-Type": "application/json",
    },
  })
};