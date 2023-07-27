import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderLoggedIn from "../../components/Header/HeaderLoggedIn";
import { SetLoggedIn } from "../../types/types";


const Layout = ({ loggedIn, setLoggedIn}: {loggedIn: boolean, setLoggedIn: SetLoggedIn} ) => {
    return (
        <>
            {loggedIn? <HeaderLoggedIn setLoggedIn={setLoggedIn}/> : <Header />}
            <Outlet />
        </>
    );
};

export default Layout;