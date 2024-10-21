import { Link } from 'react-router-dom'
import './ContactCompo.css'
import { BsArrowRight } from 'react-icons/bs'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactCompo = () => {
  return (
    <>
      <section className='fuhadShiblu_contactBanner w-full h-[250px] mt-5 flex flex-col justify-center items-center'>
        <h2 className='md:text-[100px] text-[50px] text-white uppercase font-bold'>contact</h2>
        <ul className='flex gap-5 items-center'>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/'}>home</Link>
            <BsArrowRight className='text-3xl text-[#180161]'/>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/contact'}>contact</Link>
        </ul>
      </section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 md:flex md:justify-between md:items-center md:flex-row mt-10">
            <form className='p-5 bg-[rgba(25,31,119,0.5)] flex flex-col gap-10 rounded-xl'>
                <h1 className='text-2xl text-white font-bold text-center'>Get in Touch with me</h1>
                <div className="flex flex-col md:flex gap-5 md:items-center md:flex-row">
                    <div className="flex flex-col gap-1">
                        <label className='text-2xl pl-5 text-white font-bold'>First Name</label>
                        <input className='md:w-[250px] bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(75,75,75,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="text" placeholder='Enter your first name'/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-2xl pl-5 text-white font-bold'>Last Name</label>
                        <input className='md:w-[250px] bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(75,75,75,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="text" placeholder='Enter your last name'/>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='text-2xl pl-5 text-white font-bold'>E-Mail Address</label>
                    <input className='bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(71,71,71,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="email" placeholder='Enter your e-mail address'/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='text-2xl pl-5 text-white font-bold'>Subject</label>
                    <input className='bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(71,71,71,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="email" placeholder='Enter your topic'/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='text-2xl pl-5 text-white font-bold'>Message</label>
                    <textarea className='h-[100px] bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(71,71,71,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="email" placeholder='Enter your message'/>
                </div>
            </form>
            <div className="flex flex-col gap-[100px]">
                <div className="flex gap-5 items-center">
                    <div className="w-[50px] h-[50px] bg-[#789DBC] flex justify-center items-center rounded-full">
                        <FaPhoneAlt className='text-3xl text-white'/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className='text-xl text-white font-bold'>Phone</p>
                        <p className='text-xl text-white font-bold'>+8801839055083</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="w-[50px] h-[50px] bg-[#789DBC] flex justify-center items-center rounded-full">
                        <MdEmail className='text-3xl text-white'/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className='text-xl text-white font-bold'>E-Mail</p>
                        <p className='text-xl text-white font-bold'>fuhadshiblu.web@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="w-[50px] h-[50px] bg-[#789DBC] flex justify-center items-center rounded-full">
                        <FaLocationDot className='text-3xl text-white'/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className='text-xl text-white font-bold'>Location</p>
                        <p className='text-xl text-white font-bold'>Uttara, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactCompo