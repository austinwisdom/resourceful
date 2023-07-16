import { useEffect, useState } from "react";
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route, 
  Outlet
} from "react-router-dom"

import Header from './components/Header/Header';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import Layout from './pages/Layout/Layout';
import Homepage from './pages/Homepage/Homepage';
import axios from "axios";
import './App.scss'
import PageNotFound from "./pages/PageNotFound/PageNotFound";


function App() {

  const [loggedUser, setLoggedUser]: [loggedUser: User | "", setLoggedUser: SetUser ] = useState<User | "">("");

  useEffect(()=> {
    const checkLoggedIn = () => {
      axios.get("http://localhost:8080/users")
        .then((res) => {
          console.log(res.data)
          // setLoggedUser(res)
        })
    }
    checkLoggedIn()
  })

  type User = {
    userName: string,
    password: string,
}


type SetUser = ( user: User | "" ) => void

// interface LoggedUserProps {
//   loggedUser: boolean,
//   setLoggedUser: function name(params:type) {
  
    
//   }
// }

// const setLoggedUserProp: React.FC<LoggedUserProps> = (props:LoggedUserProps): JSX.Element => {
//   <>
//     {props.setLoggedUser}
//   </>
// }


  const user = false

  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<PageNotFound />}>
      {user ? ( <Route path='/' element={<Homepage />}></Route> ) : (
        <Route path='/' element={<SignUpPage />}></Route>
      )}
      <Route path='/sign-up' element={<SignUpPage />}></Route>
      <Route path='/log-in' element={<LogInPage />}></Route>
    </Route>


  ))

  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  )
}

export default App;
