import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderLoggedIn from "../../components/Header/HeaderLoggedIn";
import { User, SetLoggedIn } from "../../types/types";


const Layout = ({ loggedUser, setLoggedIn}: {loggedUser: User | "", setLoggedIn: SetLoggedIn} ) => {
    return (
        <>
            {loggedUser? <HeaderLoggedIn setLoggedIn={setLoggedIn}/> : <Header />}
            <Outlet />
        </>
    );
};

export default Layout;