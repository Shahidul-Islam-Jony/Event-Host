import { Outlet } from "react-router-dom";
// import Navbar from "../components/shared/Navbar";
// import Footer from "../components/shared/Footer";
import NavbarWoD from "../components/shared/NavbarWoD";
import FooterWoD from "../components/shared/FooterWoD";


const MainLayout = () => {
    return (
        <div className="bg-white">
            {/* <Navbar></Navbar> */}
            <NavbarWoD></NavbarWoD>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <FooterWoD></FooterWoD>
        </div>
    );
};

export default MainLayout;