import { useNavigate } from "react-router-dom"

const Order = () => {
  const Navigate = useNavigate()
  return (
    <div className="flex h-screen flex-col justify-center text-center items-center ">
      <div>
        <img className="" src="/pizza.png" alt="pizza guy" width={350} />
      </div>
        <div className=" noto2-serif font-bold text-2xl mb-7">Pizza Ordered Successfully</div>
        <button onClick={()=> Navigate('/')} className="man3-rope bg-[#FBF3E4] drop-shadow-md border-2 hover:scale-[94%] transition-all duration-500 font-bold rounded-xl border-[#AD302F] px-3 py-2">Back to home</button>
    </div>
  )
}

export default Order