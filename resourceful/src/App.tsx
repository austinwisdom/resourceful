import './App.scss'
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


function App() {

  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Homepage />}></Route>
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
