import axios from "axios";
import Cookies from 'js-cookie';


export const axiosInstance = () => {

  const token = Cookies.get("active");

    return axios.create({
    baseURL: `https://dummyjson.com`,
    headers: {
      "Content-Type": "application/json",
      ...(token && {Authorization: `Bearer ${token}`})
    },
  })
};