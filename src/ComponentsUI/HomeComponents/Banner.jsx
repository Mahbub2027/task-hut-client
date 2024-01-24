import { Link } from "react-router-dom";
import banner from "../../assets/images/banner_updated.png";
import { Typewriter } from "react-simple-typewriter";
import banner1 from "../../assets/banner/banner2.jpg";
import banner2 from "../../assets/banner/banner4.jpg";
const  Banner =() =>{
  return (
    <div className=" min-h-screen flex flex-row-reverse items-center gap-10" style={{backgroundImage: `url(${banner1} )`, 
    backgroundSize: "cover", backgroundPosition: 'center' , backgroundRepeat: 'no-repeat'}}>

      <div className="w-1/2 mx-auto">
        {/* <img className="w-full h-96 mt-10" src={banner} alt="" /> */}
      </div>

      <div className="w-1/2 flex flex-col  mx-auto pl-10 space-y-3 text-black text-center lg:text-left">
        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
          {" "}
          <Typewriter
            words={[
              "Find Remote Jobs",
              "Hire Global Talents",
              "Post Jobs",
              "Secure Payment",
            ]}
            loop={false}
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


        <div>
          <Link to="/signup">
            <button className="bg-purple-800 p-3 rounded-lg text-white text-lg font-bold">
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
