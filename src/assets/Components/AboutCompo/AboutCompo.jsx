import { Link } from 'react-router-dom'
import './AboutCompo.css'
import { BsArrowRight } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import html from '../../../../public/images/html.png'
import css from '../../../../public/images/css.png'
import js from '../../../../public/images/js.png'
import react from '../../../../public/images/react.png'
import bootstrap from '../../../../public/images/bootstrap.png'
import tailwind from '../../../../public/images/tailwind.png'

const AboutCompo = () => {
  return (
    <>
      <section className='fuhadShiblu_aboutBanner w-full h-[250px] mt-5 flex flex-col justify-center items-center'>
        <h2 className='md:text-[100px] text-[50px] text-white uppercase font-bold'>about</h2>
        <ul className='flex gap-5 items-center'>
            <Link className='md:text-xl text-sm uppercase font-bold text-[#180161]' to={'/'}>home</Link>
            <BsArrowRight className='text-xl text-[#180161]'/>
            <Link className='md:text-xl text-sm uppercase font-bold text-[#180161]' to={'/about'}>about</Link>
        </ul>
      </section>
      <div className="container mx-auto">
        <h3 className='md:text-[50px] text-[30px] text-center mt-10 mb-5 uppercase text-[#4c99d8] font-bold'>my resume</h3>
        <div className="flex flex-col gap-[100px] items-center md:flex md:justify-between md:items-center md:flex-row">
          <div className="flex flex-col gap-5">
              <h4 className='text-[30px] md:text-[50px] text-white'>Education</h4>
              <div className="flex gap-10 items-center">
                  <div className="w-1 h-[500px] bg-white relative">
                      <div className="z-10 w-5 h-5 bg-[#ffffff] rounded-full absolute top-0 left-[50%] translate-x-[-50%]"></div>
                      <div className="z-10 w-5 h-5 bg-[#ffffff] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      <div className="z-10 w-5 h-5 bg-[#ffffff] rounded-full absolute bottom-0 left-[50%] translate-x-[-50%]"></div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="flex gap-5">
                      <FaUserGraduate className='text-[50px] text-white'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-xl md:text-2xl text-white font-semibold'>2017 - 2022</p>
                        <p className='w-[300px] text-2xl md:text-3xl text-white font-semibold'>Diploma in Mechanical Technology</p>
                        <p className='w-[300px] text-xl md:text-2xl text-white font-semibold'>Mangrove Institute of Science and Technology</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <FaUserGraduate className='text-[50px] text-white'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-xl md:text-2xl text-white font-semibold'>Jan 2024 - Present</p>
                        <p className='w-[250px] text-2xl md:text-3xl text-white font-semibold'>Front-End Web Development</p>
                        <p className='text-xl md:text-2xl text-white font-semibold'>Creative IT Institute</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="flex flex-col gap-5">
              <h4 className='text-[30px] md:text-[50px] text-white'>Experience</h4>
              <div className="flex gap-10 items-center">
                  <div className="w-1 h-[500px] bg-white relative">
                      <div className="z-10 w-5 h-5 bg-[#ffffff] rounded-full absolute top-0 left-[50%] translate-x-[-50%]"></div>
                      <div className="z-10 w-5 h-5 bg-[#ffffff] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
                      <div className="z-10 w-5 h-5 bg-[#ffffff] rounded-full absolute bottom-0 left-[50%] translate-x-[-50%]"></div>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="flex gap-5">
                      <IoBriefcase className='text-[50px] text-white'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-xl md:text-2xl text-white font-semibold'>Dec 2021 - Mar 2022</p>
                        <p className='w-[300px] text-2xl md:text-3xl text-white font-semibold'>Internship</p>
                        <p className='w-[300px] text-xl md:text-2xl text-white font-semibold'>Bangladesh industrial Technical Assistance Centre</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <IoBriefcase className='text-[50px] text-white'/>
                      <div className="flex flex-col gap-5">
                        <p className='text-xl md:text-2xl text-white font-semibold'>2022 - Present</p>
                        <p className='w-[250px] text-2xl md:text-3xl text-white font-semibold'>Checkout Assistant</p>
                        <p className='text-xl md:text-2xl text-white font-semibold'>ACI Logistics Ltd.</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className='text-[30px] md:text-[50px] text-center mt-10 mb-5 uppercase text-[#4c99d8] font-bold'>my skills</h3>
        <div className="flex justify-center gap-10 items-center flex-wrap">
          <div className="w-[250px] h-[250px] flex justify-center items-center bg-[#32012F] rounded-xl border-2 border-solid border-[#32012F] hover:border-[#FF76CE] transition-all hover:scale-[1.1] opacity-[0.5] hover:opacity-[1]">
            <div className="flex flex-col gap-5 items-center">
              <img className='w-[100px] h-[100px]' src={html} alt="HTML" />
              <p className='text-xl text-white font-semibold uppercase'>html</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex justify-center items-center bg-[#32012F] rounded-xl border-2 border-solid border-[#32012F] hover:border-[#FF76CE] transition-all hover:scale-[1.1] opacity-[0.5] hover:opacity-[1]">
            <div className="flex flex-col gap-5 items-center">
              <img className='w-[100px] h-[100px]' src={css} alt="HTML" />
              <p className='text-xl text-white font-semibold uppercase'>css</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex justify-center items-center bg-[#32012F] rounded-xl border-2 border-solid border-[#32012F] hover:border-[#FF76CE] transition-all hover:scale-[1.1] opacity-[0.5] hover:opacity-[1]">
            <div className="flex flex-col gap-5 items-center">
              <img className='w-[100px] h-[100px]' src={js} alt="HTML" />
              <p className='text-xl text-white font-semibold uppercase'>javascript</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex justify-center items-center bg-[#32012F] rounded-xl border-2 border-solid border-[#32012F] hover:border-[#FF76CE] transition-all hover:scale-[1.1] opacity-[0.5] hover:opacity-[1]">
            <div className="flex flex-col gap-5 items-center">
              <img className='w-[100px] h-[100px]' src={react} alt="HTML" />
              <p className='text-xl text-white font-semibold uppercase'>react</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex justify-center items-center bg-[#32012F] rounded-xl border-2 border-solid border-[#32012F] hover:border-[#FF76CE] transition-all hover:scale-[1.1] opacity-[0.5] hover:opacity-[1]">
            <div className="flex flex-col gap-5 items-center">
              <img className='w-[100px] h-[100px]' src={bootstrap} alt="HTML" />
              <p className='text-xl text-white font-semibold uppercase'>bootstrap</p>
            </div>
          </div>
          <div className="w-[250px] h-[250px] flex justify-center items-center bg-[#32012F] rounded-xl border-2 border-solid border-[#32012F] hover:border-[#FF76CE] transition-all hover:scale-[1.1] opacity-[0.5] hover:opacity-[1]">
            <div className="flex flex-col gap-5 items-center">
              <img className='w-[100px] h-[100px]' src={tailwind} alt="HTML" />
              <p className='text-xl text-white font-semibold uppercase'>tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCompo