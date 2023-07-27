import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoggedIn, SetLoggedIn } from "./types/types";
import { checkLoggedIn, getResources } from "./utilities/api";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import Layout from "./pages/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage";
import "@fontsource/lato";
import "./App.scss";

function App() {
  const [loggedIn, setLoggedIn]: [
    loggedIn: LoggedIn,
    setLoggedIn: SetLoggedIn
  ] = useState(false);

  const browserRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        errorElement={<PageNotFound />}
      >
        <Route
          path="/"
          element={<Homepage />}
          errorElement={<SignUpPage />}
          loader={() => checkLoggedIn(setLoggedIn)}
        ></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
        <Route
          path="/log-in"
          element={<LogInPage setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
        ></Route>
        <Route
          path="/resources/:id"
          element={<CategoryPage />}
          loader={({ params }) => getResources(params, setLoggedIn)}
          errorElement={<ForbiddenPage />}
        ></Route>
        <Route path="/forbidden" element={<ForbiddenPage />}></Route>
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
