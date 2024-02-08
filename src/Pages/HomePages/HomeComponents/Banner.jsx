import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import companyToEmployee from '../../../assets/lottieAnimation/companyToEmployee.json'
import Lottie from 'lottie-react';

const  Banner =() =>{
  return (
    <div className="min-h-[85vh] flex flex-col-reverse lg:flex-row-reverse items-center bg-white">

      <div className="w-full lg:w-1/3 h-1/2 lg:h-[600px] mx-auto">
        <Lottie className="h-full" animationData={companyToEmployee} loop={true}/>
      </div>

      <div className="w-1/2 flex flex-col mx-auto pl-10 space-y-3 text-slate-700 text-center lg:text-left">
        <h1 className="lg:mb-5 lg:py-4 text-3xl lg:text-7xl font-extrabold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent">
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

        <p className="mb-5 lg:pb-4 text-md lg:text-2xl text-slate-500">
          We provide services to mitigate the gap between companies and potential professional.
          Find companies you’re excited to work with and take your career to new heights. 
        </p>
        
        
        <div>
          <Link to="/signup">
            <button className="m-1 shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-indigo-800 px-8 py-2 hover:bg-indigo-500 hover:border-indigo-500 text-white">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
