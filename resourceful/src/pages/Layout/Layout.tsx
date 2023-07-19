import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderLoggedIn from "../../components/Header/HeaderLoggedIn";
import { User } from "../../App";


const Layout = ({ loggedUser, setLoggedIn}: {loggedUser: User | "", setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>} ) => {
    return (
        <>
            {loggedUser? <HeaderLoggedIn setLoggedIn={setLoggedIn}/> : <Header />}
            <Outlet />
        </>
    );
};

export default Layout;