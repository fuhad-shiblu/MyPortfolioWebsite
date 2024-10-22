import { Link } from 'react-router-dom'
import './ContactCompo.css'
import { BsArrowRight } from 'react-icons/bs'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';

const ContactCompo = () => {
    const [firstName , setFirstName] = useState('')
    const [firstNameErr , setFirstNameErr] = useState('')
    const [lastName , setLastName] = useState('')
    const [lastNameErr , setLastNameErr] = useState('')
    const [email , setEmail] = useState('')
    const [emailErr , setEmailErr] = useState('')
    const [subject , setSubject] = useState('')
    const [subjectErr , setSubjectErr] = useState('')
    const [message , setMessage] = useState('')
    const [messageErr , setMessageErr] = useState('')
    const handleFirstName = (e)=>{
        setFirstName(e.target.value)
        setFirstNameErr('')
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value)
        setLastNameErr('')
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailErr('')
    }
    const handleSubject = (e)=>{
        setSubject(e.target.value)
        setSubjectErr('')
    }
    const handleMessage = (e)=>{
        setMessage(e.target.value)
        setMessageErr('')
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!firstName){
            setFirstNameErr('Please enter your first name')
        }else if(!lastName){
            setLastNameErr('Please enter your last name')
        }else if(!email){
            setEmailErr('Please enter your email address')
        }else if(!subject){
            setSubjectErr('Please enter your topic')
        }else if(!message){
            setMessageErr('Please enter your message')
        }else{
            toast.success('Your message has been sent. Thank you!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
                });
        }
    }
  return (
    <>
      <section className='fuhadShiblu_contactBanner w-full h-[250px] mt-5 flex flex-col justify-center items-center'>
        <h2 className='fuhadShiblu_Anim md:text-[100px] text-[50px] text-white uppercase font-bold'>contact</h2>
        <ul className='fuhadShiblu_Anim flex gap-5 items-center'>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/'}>home</Link>
            <BsArrowRight className='text-3xl text-[#180161]'/>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/contact'}>contact</Link>
        </ul>
      </section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-10 md:flex md:justify-between md:items-center md:flex-row mt-10">
            <form onSubmit={handleSubmit} className='fuhadShiblu_Anim p-5 bg-[rgba(25,31,119,0.5)] flex flex-col gap-10 rounded-xl'>
                <h1 className='text-2xl text-white font-bold text-center'>Get in Touch with me</h1>
                <div className="flex flex-col md:flex gap-5 md:items-center md:flex-row">
                    <div className="flex flex-col gap-1">
                        <label className='text-2xl pl-5 text-white font-bold'>First Name</label>
                        <input onChange={handleFirstName} className='md:w-[250px] bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(75,75,75,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="text" placeholder='Enter your first name'/>
                        <p className='text-sm text-[#ff2121] font-light ml-5'>{firstNameErr}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className='text-2xl pl-5 text-white font-bold'>Last Name</label>
                        <input onChange={handleLastName} className='md:w-[250px] bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(75,75,75,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="text" placeholder='Enter your last name'/>
                        <p className='text-sm text-[#ff2121] font-light ml-5'>{lastNameErr}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='text-2xl pl-5 text-white font-bold'>E-Mail Address</label>
                    <input onChange={handleEmail} className='bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(71,71,71,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="email" placeholder='Enter your e-mail address'/>
                    <p className='text-sm text-[#ff2121] font-light ml-5'>{emailErr}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='text-2xl pl-5 text-white font-bold'>Subject</label>
                    <input onChange={handleSubject} className='bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(71,71,71,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="text" placeholder='Enter your topic'/>
                    <p className='text-sm text-[#ff2121] font-light ml-5'>{subjectErr}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <label className='text-2xl pl-5 text-white font-bold'>Message</label>
                    <textarea onChange={handleMessage} className='h-[100px] bg-black px-6 py-3 rounded-2xl text-sm text-white border-2 border-solid border-[rgba(71,71,71,0.5)] focus:border-[#AD49E1] transition-all placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-sm' type="text" placeholder='Enter your message'/>
                    <p className='text-sm text-[#ff2121] font-light ml-5'>{messageErr}</p>
                </div>
                <button className='text-2xl uppercase w-full bg-black text-white border-none outline-none py-5 rounded-3xl font-bold active:scale-[1.1] transition-all hover:bg-[#0c0c0c]'>send</button>
            </form>
            <div className="flex flex-col gap-[100px]">
                <div className="flex gap-5 items-center">
                    <div className="fuhadShiblu_Anim w-[50px] h-[50px] bg-[#789DBC] flex justify-center items-center rounded-full">
                        <FaPhoneAlt className='text-3xl text-white'/>
                    </div>
                    <div className="fuhadShiblu_Anim flex flex-col gap-3">
                        <p className='text-xl text-white font-bold'>Phone</p>
                        <p className='text-xl text-white font-bold'>+8801839055083</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="fuhadShiblu_Anim w-[50px] h-[50px] bg-[#789DBC] flex justify-center items-center rounded-full">
                        <MdEmail className='text-3xl text-white'/>
                    </div>
                    <div className="fuhadShiblu_Anim flex flex-col gap-3">
                        <p className='text-xl text-white font-bold'>E-Mail</p>
                        <p className='text-xl text-white font-bold'>fuhadshiblu.web@gmail.com</p>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="fuhadShiblu_Anim w-[50px] h-[50px] bg-[#789DBC] flex justify-center items-center rounded-full">
                        <FaLocationDot className='text-3xl text-white'/>
                    </div>
                    <div className="fuhadShiblu_Anim flex flex-col gap-3">
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