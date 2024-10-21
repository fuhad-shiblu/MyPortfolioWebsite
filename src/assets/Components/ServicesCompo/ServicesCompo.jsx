import { Link } from 'react-router-dom'
import './ServicesCompo.css'
import { BsArrowRight } from 'react-icons/bs'
import { FaCode } from "react-icons/fa";

const ServicesCompo = () => {
  return (
    <>
      <section className='fuhadShiblu_serviceBanner w-full h-[250px] mt-5 flex flex-col justify-center items-center'>
        <h2 className='md:text-[100px] text-[50px] text-white uppercase font-bold'>services</h2>
        <ul className='flex gap-5 items-center'>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/'}>home</Link>
            <BsArrowRight className='text-3xl text-[#180161]'/>
            <Link className='md:text-3xl text-xl uppercase font-bold text-[#180161]' to={'/about'}>services</Link>
        </ul>
      </section>
      <div className="container mx-auto">
        <h3 className='md:text-[50px] text-[30px] text-center mt-10 mb-5 uppercase text-[#4c99d8] font-bold'>my services</h3>
        <p className='text-center text-white mb-10 text-sm md:text-xl font-bold'>Focused and offered services</p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
            <div className="p-10 flex flex-col gap-5 justify-center border-2 border-solid border-[#091057] transition-all hover:scale-[1.1] hover:bg-[#091057] rounded-3xl overflow-hidden">
                <FaCode className='text-white text-2xl md:text-3xl'/>
                <p className='text-white text-2xl md:text-3xl font-bold'>Web Design</p>
                <p className='text-sm md:text-lg text-white font-light text-justify'>Our web design services combine creativity and functionality to craft visually stunning and user-centric websites. We focus on responsive design, ensuring seamless experiences across devices, while emphasizing brand identity and engagement. Let us transform your ideas into captivating online experiences that leave a lasting impression on your audience.</p>
            </div>
            <div className="p-10 flex flex-col gap-5 justify-center border-2 border-solid border-[#091057] transition-all hover:scale-[1.1] hover:bg-[#091057] rounded-3xl overflow-hidden">
                <FaCode className='text-white text-2xl md:text-3xl'/>
                <p className='text-white text-2xl md:text-3xl font-bold'>Web Development</p>
                <p className='text-sm md:text-lg text-white font-light text-justify'>We offer expert web development services using ReactJS, delivering custom, high-performance applications tailored to your needs. Our focus on component-based architecture ensures scalability and fast rendering, while our comprehensive support covers everything from design to deployment. Elevate your online presence with our innovative and user-friendly solutions.</p>
            </div>
            <div className="p-10 flex flex-col gap-5 justify-center border-2 border-solid border-[#091057] transition-all hover:scale-[1.1] hover:bg-[#091057] rounded-3xl overflow-hidden">
                <FaCode className='text-white text-2xl md:text-3xl'/>
                <p className='text-white text-2xl md:text-3xl font-bold'>Website maintenance</p>
                <p className='text-sm md:text-lg text-white font-light text-justify'>
                Our website maintenance services ensure your site remains secure, up-to-date, and fully functional. We provide regular updates, performance optimization, and content management, allowing you to focus on your business. Trust us to enhance your website’s reliability and effectiveness, keeping it aligned with the latest trends and technologies.</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default ServicesCompo