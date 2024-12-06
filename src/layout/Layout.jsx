import { useEffect, useState } from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { useLocation } from "react-router-dom"

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    const [show, setShow] = useState(true);

    useEffect(() => {
        setShow(!pathname.includes("/error"));
    }, [pathname]);

    return (
        <>
            {show && <Header/>}
            <main className="mx-auto container w-full p-1">
                { children }
            </main>
            {show && <Footer/>}
        </>
    )
}

export default Layout