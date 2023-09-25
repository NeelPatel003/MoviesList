import axios from "axios";
import { REACT_APP_TMDB_API_BASE_URL } from "../config";

export const axiosInstance = axios.create({
  baseURL: REACT_APP_TMDB_API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  config.headers = {
    "Content-Type": "application/json",
  };
  return config;
});

