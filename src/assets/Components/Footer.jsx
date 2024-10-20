import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="text-lg md:text-xl text-center mt-[50px] text-white font-light mb-[100px]">&#169;2024, <Link className="font-bold hover:underline" to={'/'}>Fuhad Hasan Shiblu</Link> | All Rights Reserved</footer>
      <div className="w-full h-1 block md:hidden"></div>
    </>
  )
}

export default Footer