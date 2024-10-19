import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer"

const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne