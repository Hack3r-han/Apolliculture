import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
    return (
        <>   <div className= "bg-white">
            <Navbar />
            <Outlet />
            <Footer/>
            </div>
        </>
    )
}

export default Root;