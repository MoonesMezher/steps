import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/error" element={<ErrorPage/>}/>        
        <Route path="*" element={<Navigate to="/error"/>}/>
      </Routes>
    </Layout>
  )
}