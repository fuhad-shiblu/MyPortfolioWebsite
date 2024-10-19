import { Link } from "react-router-dom"

const Error404Compo = () => {
  return (
    <>
      <div className="h-screen flex flex-col gap-10 items-center justify-center">
        <h1 className="text-[50px] text-white font-bold">Page not Found</h1>
        <p className="text-2xl text-white font-semibold">404: The Page You’re Looking For Isn’t Here. Try again to search</p>
        <Link className="text-xl p-5 bg-[#03346E] rounded-xl font-bold text-white hover:bg-[#4B70F5] transition-all active:scale-[1.1]" to={'/'}>Go to Homepage</Link>
      </div>
    </>
  )
}

export default Error404Compo