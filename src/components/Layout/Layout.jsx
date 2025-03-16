import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <div>
      <header>
       <Navbar></Navbar>
      </header>
      <main>
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
}

export default Layout;
