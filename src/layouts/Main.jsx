import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="relative">
      <NavBar />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;