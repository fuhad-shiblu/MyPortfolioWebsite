import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="w-full px-1 py-2 bg-[#4477CE] fixed bottom-0 z-10 block md:hidden">
        <ul className='flex gap-3 items-center justify-center px-1'>
            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><FaUser className='text-xl'/>about</NavLink></li>
            <li><NavLink to={'/services'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><FaServicestack className='text-xl'/>services</NavLink></li>
            <li><NavLink to={'/skills'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><GiSkills className='text-xl'/>skills</NavLink></li>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><FaHome className='text-xl'/>home</NavLink></li>
            <li><NavLink to={'/portfolios'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><FaProjectDiagram className='text-xl'/>portfolios</NavLink></li>
            <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><FaBlog className='text-xl'/>blog</NavLink></li>
            <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-[10px] text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-[10px] text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}><FaHeadphones className='text-xl'/>contact</NavLink></li>
        </ul>
    </div>
      <div className="container m-auto">
        <div className="md:flex mt-5 md:justify-between md:items-center flex justify-between items-center">
            <Link className='text-xl text-white font-bold hover:text-[rgba(255,255,255,0.5)] transition-all' to={'/'}>Fuhad Hasan Shiblu</Link>
            <Link className='fuhadShiblu_hireMe text-xl text-white uppercase px-5 py-3 font-bold rounded-3xl active:scale-[1.1] transition-all hover:opacity-[0.5] hidden md:block' to={'/contact'}>hire me</Link>
            <ul className='flex gap-5 items-center hidden md:inline-flex'>
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>home</NavLink></li>
                <li><NavLink to={'/about'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>about</NavLink></li>
                <li><NavLink to={'/services'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>services</NavLink></li>
                <li><NavLink to={'/portfolios'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>portfolios</NavLink></li>
                <li><NavLink to={'/skills'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>skills</NavLink></li>
                <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>blog</NavLink></li>
                <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? "text-sm text-white font-normal uppercase p-2 bg-[#0E2954] rounded-xl" : "text-sm text-white font-normal uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all"}>contact</NavLink></li>
            </ul>
            <Link className='fuhadShiblu_hireMe text-xl text-white uppercase px-5 py-3 font-bold rounded-3xl active:scale-[1.1] transition-all hover:opacity-[0.5] md:hidden' to={'/contact'}>hire me</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar