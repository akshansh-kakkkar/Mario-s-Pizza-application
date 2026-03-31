import Navbar from "./Navbar";
import '../index.css'
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const Navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 h-[88vh] place-items-center ">

        <div onClick={()=>Navigate('/registerform')} className="col-span-1 flex-col flex justify-center items-center w-[500px] h-[500px] flex justify-center items-center transition-all duration-300 hover:scale-[105%] hover:bg-[#f7dba8] backdrop-blur-2xl drop-shadow-sm bg-[#F5EDDE] rounded-2xl">
          <lord-icon
            src="https://cdn.lordicon.com/shcfcebj.json"
            trigger="loop"
            delay="300"
            colors="primary:#629110,secondary:#0a5c15"
            className="animate-pulse duration-1000"
            style={{ width: 250, height: 250 }}
          ></lord-icon>
          <div className="text-[#1E1B13] text-4xl font-bold tracking-widest noto-serif">
            Register
          </div>
        </div>
        <div onClick={()=>Navigate('/orderform')} className="col-span-1  flex-col flex justify-center items-center hover:scale-[105%] hover:bg-[#f7dba8] transition-all duration-300 w-[500px] h-[500px]  backdrop-blur-2xl drop-shadow-sm rounded-2xl bg-[#F5EDDE]">
          <lord-icon
            src="https://cdn.lordicon.com/urdbeoyx.json"
            trigger="loop"
            delay="300"
            className="animate-pulse duration-1000"
            colors="primary:#629110,secondary:#c71f16"
            style={{width:250, height:250}}
          ></lord-icon>
                    <div className="text-[#1E1B13] text-4xl font-bold tracking-widest noto-serif">
           Mario's Pizza
          </div>
        </div>
      </div>

    </>
  );
};

export default LandingPage;
