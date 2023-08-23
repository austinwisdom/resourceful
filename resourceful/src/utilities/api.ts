import axios, { AxiosResponse, AxiosError } from "axios";
import { ResourcesResponse, SetBoolean } from "../types/types";
import { Params } from "react-router-dom";

const backendURI = import.meta.env.VITE_BACKEND_URI;

export const getData = (
  id: string,
  setData: (response: ResourcesResponse[] | null) => void
) => {
  axios
    .get<ResourcesResponse[]>(`${backendURI}/resources/${id}`)
    .then((res: AxiosResponse<ResourcesResponse[]>) => {
      if (id) {
        setData(res.data);
      }
    })
    .catch((error: AxiosError) => {
      console.error(error.response!);
    });
};

export const checkLoggedIn = async (setLoggedIn: SetBoolean) => {
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.get(`${backendURI}/users`);
    setLoggedIn(true);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getResources = async (params: Params<string>, setLoggedIn: SetBoolean) => { 
  axios.defaults.withCredentials = true;
  try { 
    const id = params.id
    const response = await axios.get(`${backendURI}/resources/${id != undefined ? id : ""}`)
    setLoggedIn(true)
    return response
  } catch (error) { 
    console.error(error)
  }
}