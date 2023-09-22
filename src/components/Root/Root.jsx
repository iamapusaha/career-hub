import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <h1>this is our Root path</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;