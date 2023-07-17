import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import Layout from "./pages/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import axios, { AxiosResponse, AxiosError } from "axios";
import "./App.scss";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import "@fontsource/lato"

function App() {
  type User = {
    userName: string;
  };

  type SetUser = (user: User | "") => void;

  const [loggedUser, setLoggedUser]: [
    loggedUser: User | "",
    setLoggedUser: SetUser
  ] = useState<User | "">("");

  useEffect(() => {
    const checkLoggedIn = () => {
      axios.defaults.withCredentials = true;
      axios
        .get("http://localhost:8080/users")
        .then((res: AxiosResponse<User>) => {
          console.log(res.data)
          setLoggedUser(res.data);
        })
        .catch((error:AxiosError) => {
          console.log(error.response!);
        });
    };
    checkLoggedIn();
  },[]);

  const browserRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<PageNotFound />}>
        {loggedUser ? (
          <Route path="/" element={<Homepage />}></Route>
        ) : (
          <Route path="/" element={<SignUpPage />}></Route>
        )}
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/log-in" element={<LogInPage />}></Route>
        <Route path="/resources/:id" element={<CategoryPage />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;
