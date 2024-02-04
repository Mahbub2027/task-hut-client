import { Link } from "react-router-dom";
import banner from "../../assets/images/banner_updated.png";
import { Typewriter } from "react-simple-typewriter";
import banner1 from "../../assets/banner/banner2.jpg";
import banner2 from "../../assets/banner/banner4.jpg";
const  Banner =() =>{
  return (
    <div className="min-h-[85vh] flex flex-col-reverse lg:flex-row-reverse items-center bg-white">
    {/* <div className="min-h-screen flex flex-row-reverse items-center gap-10" style={{backgroundImage: `url(${banner1} )`, 
    backgroundSize: "cover", backgroundPosition: 'center' , backgroundRepeat: 'no-repeat'}}> */}

      <div className="w-full lg:w-1/2 h-1/2 lg:h-[600px] mx-auto">
        {/* <img className="w-full h-96 mt-10" src={banner} alt="" /> */}
        <iframe className="w-full h-full" src="https://lottie.host/embed/adc0ddc2-e9d3-4ffa-a284-d137e7340817/hRAcr1fpo1.json"></iframe>
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
            <button className="m-1 shadow-lg border-2 border-indigo-800 rounded-lg font-medium bg-indigo-800 px-8 py-2 text-indigo-200 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white">
              Get started
            </button>
          </Link>

        </div>
      </div>




      {/* <div className="hero h-[90vh]">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="flex flex-col lg:flex-row-reverse hero-content text-center text-neutral-content">
          <div>
            <img className="mt-10" src={banner} alt="" />
          </div>
          <div className=" text-white text-center lg:text-left">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
              {" "}
              <Typewriter
                words={[
                  "Find Remote Jobs",
                  "Hire Global Talents",
                  "Post Jobs",
                  "Get Work Done",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <p className="mb-5 text-xs lg:text-lg">
              Meet clients you’re excited to work with and take your career or
              business to new heights.
            </p>

            <div className="flex justify-center gap-2 mt-10">
              <div className="form-control w-36 lg:w-96">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered text-black w-36 md:w-auto"
                />
              </div>
              <div>
                <Link to="/signup">
                  <button className="btn btn-primary text-white text-xs font-bold">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
