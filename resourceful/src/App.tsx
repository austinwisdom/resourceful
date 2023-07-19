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

export  type User = {
  userName: string;
};

function App() {
 
  type SetUser = (user: User | "") => void;
  type LoggedIn = boolean 
  type SetLoggedIn = React.Dispatch<React.SetStateAction<boolean>>

  const [loggedIn, setLoggedIn]: [loggedIn: LoggedIn, setLoggedIn: SetLoggedIn ] = useState(false)
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
        <Route path="/resources/:id" element={<CategoryPage/>}></Route>
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
