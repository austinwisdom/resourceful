import axios, {AxiosResponse, AxiosError} from "axios";
import { User, SetUser, ResourcesResponse } from "../types/types";

export const checkLoggedIn = (setLoggedUser:SetUser) => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:8080/users")
      .then((res: AxiosResponse<User>) => {
        setLoggedUser(res.data);
      })
      .catch((error:AxiosError) => {
        console.log(error.response!.data);
      });
  };

  export const getData = (id: string, setData:(response: ResourcesResponse[] | null) => void) => {
    axios
    .get<ResourcesResponse[]>(`http://localhost:8080/resources/${id}`)
    .then((res: AxiosResponse<ResourcesResponse[]>) => { 
        if(id) { 
            setData(res.data)
        }
    })
    .catch((error:AxiosError) => {
        console.log(error.response!);
    }) 
}