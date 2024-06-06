import { Outlet } from "react-router-dom";
// import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import NavbarWoD from "../components/shared/NavbarWoD";


const MainLayout = () => {
    return (
        <div className="bg-white">
            {/* <Navbar></Navbar> */}
            <NavbarWoD></NavbarWoD>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;