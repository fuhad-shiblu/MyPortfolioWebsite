import './HomeCompo.css'
import myProfile from '../../../../public/images/profile.jpg'
import { Link } from 'react-router-dom'
import { FaDownload } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const HomeCompo = () => {
  return (
    <>
    <section className='flex flex-col gap-[100px] items-center'>
      <div className="container m-auto md:flex-row mt-[50px] md:mt-[100px] md:flex md:items-center md:justify-center gap-[100px] flex flex-col items-center">
          <img className='w-[350px] rotate-[-10deg] hover:rotate-0 transition-all border-[5px] border-solid border-[rgba(3,176,210,0.5)] hover:border-[#03AED2] rounded-3xl' src={myProfile} alt="Profile" />
          <div className="flex flex-col gap-[50px]">
              <div className="flex text-center md:text-left flex-col gap-[25px] items-center md:items-start">
                  <h1 className='text-[50px] md:text-[60px] text-white font-bold'>Hello, I'm <span className='block font-semibold text-[30px] md:text-[50px]'>Fuhad Hasan Shiblu</span></h1>
                  <p className='text-[30px] md:text-[50px] font-bold text-[#5AB2FF]'>Front-End Web Developer</p>
                  <p className='w-[500px] text-white font-light text-xl'>I build a UI/UX friendly web applications and run with 100% responsive in devices</p>
              </div>
              <div className="flex flex-col gap-10 items-center md:flex-row">
                  <Link className='text-xl text-white font-bold bg-[#435585] px-6 py-3 rounded-3xl flex items-center gap-5 border-2 border-solid border-[#435585] hover:bg-transparent transition-all active:scale-[1.1]' to={'#'}><FaDownload/>Download Resume</Link>
                  <div className="flex gap-3">
                      <Link className='w-10 h-10 flex justify-center items-center text-xl text-white hover:text-[#6EACDA] border-2 rounded-full border-solid border-[#430A5D] transition-all hover:bg-[#430A5D]' to={'#'}><FaFacebookF/></Link>
                      <Link className='w-10 h-10 flex justify-center items-center text-xl text-white hover:text-[#6EACDA] border-2 rounded-full border-solid border-[#430A5D] transition-all hover:bg-[#430A5D]' to={'#'}><FaInstagram/></Link>
                      <Link className='w-10 h-10 flex justify-center items-center text-xl text-white hover:text-[#6EACDA] border-2 rounded-full border-solid border-[#430A5D] transition-all hover:bg-[#430A5D]' to={'#'}><FaYoutube/></Link>
                      <Link className='w-10 h-10 flex justify-center items-center text-xl text-white hover:text-[#6EACDA] border-2 rounded-full border-solid border-[#430A5D] transition-all hover:bg-[#430A5D]' to={'#'}><FaLinkedinIn/></Link>
                      <Link className='w-10 h-10 flex justify-center items-center text-xl text-white hover:text-[#6EACDA] border-2 rounded-full border-solid border-[#430A5D] transition-all hover:bg-[#430A5D]' to={'#'}><FaGithub/></Link>
                  </div>
              </div>
        </div>
      </div>
      <div className="w-full p-5 bg-[rgba(11,25,44,0.5)]">
        <div className="container mx-auto flex flex-col justify-center gap-5 items-center md:flex-row md:justify-between">
          <div className="flex gap-5 items-center">
            <h2 className='text-[100px] text-white'>3+</h2>
            <p className='w-[100px] text-xl text-white'>Years of Experience</p>
          </div>
          <div className="flex gap-5 items-center">
            <h2 className='text-[100px] text-white'>0+</h2>
            <p className='w-[100px] text-xl text-white'>Project Completed</p>
          </div>
          <div className="flex gap-5 items-center">
            <h2 className='text-[100px] text-white'>0+</h2>
            <p className='w-[100px] text-xl text-white'>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeCompo