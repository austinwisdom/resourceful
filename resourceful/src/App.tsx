import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";
import { User, SetUser, LoggedIn, SetLoggedIn } from "./types/types";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import Layout from "./pages/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import "@fontsource/lato"
import "./App.scss";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage";


function App() {

  const [loggedIn, setLoggedIn]: [loggedIn: LoggedIn, setLoggedIn: SetLoggedIn ] = useState(false)
  const [loggedUser, setLoggedUser]: [
    loggedUser: User | "",
    setLoggedUser: SetUser
  ] = useState<User | "">("");

  useEffect(() => {
    const checkLoggedIn = () => {
      axios.defaults.withCredentials = true;
      axios
        .get("https://backend.resourceful.tips/users")
        .then((res: AxiosResponse<User>) => {
          setLoggedUser(res.data);
        })
        .catch((error:AxiosError) => {
          console.log(error.response!);
        });
    };
    checkLoggedIn();
  },[loggedIn]);

  const browserRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout loggedUser={loggedUser} setLoggedIn={setLoggedIn}/>} errorElement={<PageNotFound />}>
        <Route path="/" element={loggedUser? <Homepage/> : <SignUpPage/>}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route path="/log-in" element={<LogInPage setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}></Route>
        <Route path="/resources/:id" element={<CategoryPage loggedUser={loggedUser}/>}></Route>
        <Route path="/forbidden" element={<ForbiddenPage/>}></Route>
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
