import { Link, NavLink } from 'react-router-dom'
import './PortfolioCompo.css'
import { BsArrowRight } from 'react-icons/bs'
import ngg from '../../../../public/images/ngg.png'
import { useState } from 'react'

const PortfolioCompo = () => {
  const [clickAnim , setClickAnim] = useState(false)
  return (
    <>
      <section className='fuhadShiblu_portfolioBanner w-full h-[250px] mt-5 flex flex-col justify-center items-center'>
        <h2 className='md:text-[100px] text-[50px] text-white uppercase font-bold'>portfolios</h2>
        <ul className='flex gap-5 items-center'>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/'}>home</Link>
            <BsArrowRight className='text-3xl text-[#180161]'/>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/portfolios'}>portfolios</Link>
        </ul>
      </section>
      <div className="container mx-auto">
        <h3 className='md:text-[50px] text-[30px] text-center mt-10 mb-5 uppercase text-[#4c99d8] font-bold'>my recent demo projects</h3>
        <p className='text-center text-white mb-10 text-sm md:text-xl font-bold'>Here are some projects about my works</p>
        <div className="m-auto px-6 p-3 bg-black rounded-xl mb-10">
            <ul className='flex justify-between items-center'>
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-sm md:text-xl text-white font-bold uppercase p-2 hover:bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-sm md:text-xl text-white font-bold uppercase p-2 bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}>All</NavLink></li>
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-sm md:text-xl text-white font-bold uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-sm md:text-xl text-white font-bold uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}>HTML</NavLink></li>
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-sm md:text-xl text-white font-bold uppercase p-2 bg-[#0E2954] rounded-xl flex flex-col items-center gap-2" : "text-sm md:text-xl text-white font-bold uppercase p-2 hover:bg-[#0E2954] rounded-xl transition-all flex flex-col items-center gap-2"}>ReactJS</NavLink></li>
            </ul>
        </div>
        <div className="flex justify-center md:flex md:justify-between md:items-center gap-5">
            <div className="w-[300px] md:w-[500px] p-5 md:p-10 flex flex-col gap-10 justify-center items-center border-2 border-solid border-[#091057] transition-all hover:scale-[1.1] hover:bg-[#091057] rounded-3xl overflow-hidden relative">
                    {
                      clickAnim &&
                      <div className="fuhadShiblu_clickAnim p-5 bg-white rounded-xl absolute">
                        <button onClick={()=>setClickAnim(!clickAnim)}>Cancel</button>
                      </div>
                    }
                    <p className='text-white text-xl md:text-2xl font-bold'>Number Guessing Game</p>
                    <img className='rounded-xl' src={ngg} alt="Portfolio" />
                    <div className="flex gap-10 items-center">
                        {
                          clickAnim ?
                          <button onClick={()=>setClickAnim(!clickAnim)} className='text-sm md:text-xl px-4 py-2 bg-[#10375C] font-bold text-white rounded-xl hover:bg-[#285e91] transition-all active:scale-[1.1]'>Cancel details</button>
                          :
                          <button onClick={()=>setClickAnim(!clickAnim)} className='text-sm md:text-xl px-4 py-2 bg-[#10375C] font-bold text-white rounded-xl hover:bg-[#285e91] transition-all active:scale-[1.1]'>Details</button>
                        }
                        <Link className='text-sm md:text-xl px-4 py-2 bg-[#10375C] font-bold text-white rounded-xl hover:bg-[#2d689e] transition-all active:scale-[1.1]' target='_blank' to={'https://number-guesing-game-demo-with-html-fuhad-shiblu.vercel.app/'}>Live Preview</Link>
                    </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioCompo