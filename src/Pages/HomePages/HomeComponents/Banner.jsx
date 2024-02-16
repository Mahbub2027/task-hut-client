import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import companyToEmployee from '../../../assets/lottieAnimation/companyToEmployee.json'
import Lottie from 'lottie-react';

const  Banner =() =>{
  return (
    <div className="min-h-[85vh] w-full flex flex-col md:flex-row-reverse items-center gap-4 bg-white">

      <div className="w-2/3 lg:w-1/2 h-1/2 lg:h-full mx-auto">
        <Lottie className="h-full" animationData={companyToEmployee} loop={true}/>
      </div>

      <div className="w-full md:w-1/2 flex flex-col mx-auto pl-10 space-y-3 text-slate-700 md:text-left">
        <h1 className="lg:mb-5 lg:py-4 text-3xl md:text-4xl lg:text-6xl font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent">
          <span className="text-slate-700">TaskHut Is To</span><br/>
          {" "}
          <Typewriter
            words={[
              "Find New Jobs",
              "Hire Global Talents",
              "Post Jobs",
              "Organize Time",
              "Contact to Employee",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <p className="mb-5 lg:pb-4 text-md lg:text-xl text-slate-500">
          We provide services to mitigate the gap between companies and potential professional.
          Find companies you’re excited to work with and take your career to new heights. 
        </p>
        
        
        <div>
          <Link to="/signup">
            <button className="text-white uppercase text-xs lg:text-base bg-gradient-to-r from-indigo-400 via-indigo-700 to-indigo-600 bg-[length:200%] hover:bg-right focus:ring-4 focus:outline-none focus:ring-indigo-300 shadow-lg shadow-indigo-500/50 font-medium rounded-full px-5 py-2.5 text-center transition-all ease-in-out delay-150 duration-500">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
