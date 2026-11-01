import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Header, page, footer
const Layout = () => {
    return (
        <div id="content">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

            {/* Pop-up messages (React Hot Toast) */}
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: "#141a2e",
                        color: "#f3f4fa",
                        border: "1px solid rgba(243, 244, 250, 0.08)"
                    }
                }} />
        </div>
    );
};

export default Layout;
