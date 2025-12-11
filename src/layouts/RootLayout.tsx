import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Banner } from "../components/home/Banner";
import { Newsletter } from "../components/home/Newsletter";
import { Sheet } from "../components/shared/sheet";
import { NavbarMobile } from "../components/shared/NavBarMobile";
import { useGlobalStore } from "../store/global.store";

export const RouteLayout = () => {
  const {pathname} = useLocation();

  const isSheetOpen = useGlobalStore(state => state.isSheetOpen);

  const activeNavMobile = useGlobalStore(
    state => state.activeNavMobile
  );
  
  return (
    <div className="h-screen flex flex-col font-montserrat">
      <Navbar />

      {pathname === '/' && <Banner />}

    <main className="container my-8 flex-1">
        <Outlet />
    </main>

      {pathname === '/' && <Newsletter />}

      {isSheetOpen && <Sheet />}

      {activeNavMobile && <NavbarMobile />}
      
      <Footer />
    </div>
  );
};