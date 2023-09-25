import { toast } from "react-toastify"
import { axiosInstance } from "./axiosInstance"
import { REACT_APP_TMBD_API_KEY } from "../config"

export const moviesList = params =>
  new Promise((resolve, reject) =>
    axiosInstance
      .get(`/movie/now_playing?api_key=${REACT_APP_TMBD_API_KEY}`, {params: params})
      .then(response => {
        resolve(response?.data)
      })
      .catch(error => {
        toast.error(error.response?.data?.status_message || 'Something Went Wrong')
        reject(error.response?.data?.data)
      })
  )

  export const movieListById = movieId =>
  new Promise((resolve, reject) =>
    axiosInstance
      .get(`/movie/${movieId}?api_key=${REACT_APP_TMBD_API_KEY}`)
      .then(response => {
        resolve(response?.data)
      })
      .catch(error => {
        toast.error(error.response?.data?.status_message || 'Something Went Wrong')
        reject(error.response?.data?.data)
      })
  )
  
  export const moviesListBySearch = params =>
  new Promise((resolve, reject) =>
    axiosInstance
      .get(`/search/movie?api_key=${REACT_APP_TMBD_API_KEY}`, {params:params})
      .then(response => {
        resolve(response?.data)
      })
      .catch(error => {
        toast.error(error.response?.data?.status_message || 'Something Went Wrong')
        reject(error.response?.data?.data)
      })
  )
  