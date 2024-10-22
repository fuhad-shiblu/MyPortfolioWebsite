import { Link, NavLink } from 'react-router-dom'
import './PortfolioCompo.css'
import { BsArrowRight } from 'react-icons/bs'
import ngg from '../../../../public/images/ngg.png'
import { useState } from 'react'
import portfoliosCP from '../../../../public/cp/portfoliosCP'
import Footer from '../Footer'
import Navbar from '../Navbar/Navbar'

const PortfolioCompo = () => {
  const [clickAnim , setClickAnim] = useState(false)
  const [portfodata , setPortfoData] = useState(portfoliosCP)
  return (
    <>
    <Navbar/>
      <section className='fuhadShiblu_portfolioBanner w-full h-[250px] mt-5 flex flex-col justify-center items-center'>
        <h2 className='fuhadShiblu_Anim md:text-[100px] text-[50px] text-white uppercase font-bold'>portfolios</h2>
        <ul className='fuhadShiblu_Anim flex gap-5 items-center'>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/'}>home</Link>
            <BsArrowRight className='text-3xl text-[#180161]'/>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/portfolios'}>portfolios</Link>
        </ul>
      </section>
      <div className="container mx-auto">
        <h3 className='fuhadShiblu_Anim md:text-[50px] text-[30px] text-center mt-10 mb-5 uppercase text-[#4c99d8] font-bold'>my recent demo projects</h3>
        <p className='fuhadShiblu_Anim text-center text-white mb-10 text-sm md:text-xl font-bold'>Here are some projects about my works</p>
        <div className="fuhadShiblu_Anim m-auto px-6 p-3 bg-black rounded-xl mb-10">
            <ul className='flex justify-between items-center'>
                <li><NavLink to={'/portfolios'} className={({ isActive }) => isActive ? "text-sm md:text-xl text-white font-bold uppercase p-2 hover:bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-sm md:text-xl text-white font-bold uppercase p-2 bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}>All</NavLink></li>
                <li><NavLink to={'/portfolios/html'} className={({ isActive }) => isActive ? "text-sm md:text-xl text-white font-bold uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-sm md:text-xl text-white font-bold uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}>HTML</NavLink></li>
                <li><NavLink to={'/portfolios/react'} className={({ isActive }) => isActive ? "text-sm md:text-xl text-white font-bold uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-sm md:text-xl text-white font-bold uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}>ReactJS</NavLink></li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center md:flex md:flex-row md:justify-center md:items-center gap-10 flex-wrap">
          {
            portfodata.map((items)=>(
            <div key={items.portfolio_Id} className="fuhadShiblu_Anim md:w-[500px] mx-5 p-5 md:p-10 flex flex-col gap-10 justify-center items-center border-2 border-solid border-[#091057] transition-all hover:scale-[1.1] hover:bg-[#091057] rounded-3xl overflow-hidden relative">
                    {
                      clickAnim &&
                      <div className="fuhadShiblu_clickAnimPage m-5 text-justify text-white bg-black p-5 rounded-xl absolute">{items.portfolio_details}</div>
                    }
                    <p className='text-white text-xl md:text-2xl font-bold'>{items.portfolio_title}</p>
                    <img className='rounded-xl' src={items.portfolio_img} alt="Portfolio" />
                    <div className="flex gap-10 items-center">
                        {
                          clickAnim ?
                          <button onClick={()=>setClickAnim(!clickAnim)} className='text-sm md:text-xl px-4 py-2 bg-[#10375C] font-bold text-white rounded-xl hover:bg-[#285e91] transition-all active:scale-[1.1]'>Cancel details</button>
                          :
                          <button onClick={()=>setClickAnim(!clickAnim)} className='text-sm md:text-xl px-4 py-2 bg-[#10375C] font-bold text-white rounded-xl hover:bg-[#285e91] transition-all active:scale-[1.1]'>Details</button>
                        }
                        <Link className='text-sm md:text-xl px-4 py-2 bg-[#10375C] font-bold text-white rounded-xl hover:bg-[#2d689e] transition-all active:scale-[1.1]' target='_blank' to={items.portfolio_preview}>Live Preview</Link>
                    </div>
            </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default PortfolioCompo