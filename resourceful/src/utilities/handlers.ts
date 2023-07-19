import axios, { AxiosError } from "axios";
import {
  LoginError,
  SetBoolean,
  InputEvent,
  SubmitEvent,
  SetLoggedIn,
  ClickEvent
} from "../types/types";
import { toast } from "react-toastify";

export const signupSubmit = (
  e: SubmitEvent,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  setSignedUp: SetBoolean
) => {
  e.preventDefault();

  axios
    .post("http://localhost:8080/users/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: username,
      password: password,
    })
    .then(() => {
      setSignedUp(true);
      toast.success("User successfully signed-up!");
    })
    .catch((error: AxiosError<LoginError>) => {
      const errorMessage =
        error.response?.data?.message ?? "Unknown error occurred";
      toast.error(`Sign-up failed with error: ${errorMessage}`);
    });
};

export const inputValue = (e: InputEvent) => {
  const value = e.target.value;
  return value;
};

export const signinSubmit = (
  e: SubmitEvent,
  username: string,
  password: string,
  setLoggedIn: SetLoggedIn
) => {
  e.preventDefault();

  axios.defaults.withCredentials = true;
  axios
    .post("http://localhost:8080/users/login", {
      userName: username,
      password: password,
    })
    .then(() => {
      setLoggedIn(true);
      toast.success("User successfully logged in!");
    })
    .catch((error: AxiosError<LoginError>) => {
      const errorMessage =
        error.response?.data?.message ?? "Unknown error occurred";
      toast.error(`Login failed with error: ${errorMessage}`);
    });
};

export const logOutHandler = (e: ClickEvent, setLoggedIn:SetLoggedIn) => {
    e.preventDefault();
   
    axios
    .get("http://localhost:8080/users/logout")
    .then(() => {
        setLoggedIn(false);
        window.location.reload() 
    })
    .catch ((error: AxiosError) => {
        console.error(error)
    })
  } 
