import { Link } from "react-router-dom";
import banner from "../../assets/images/banner_updated.png";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="flex flex-col lg:flex-row-reverse hero-content text-center text-neutral-content">
          <div>
            <img className="mt-10" src={banner} alt="" />
          </div>
          <div className=" text-white text-center lg:text-left">
            <h1 className="mb-5 text-3xl lg:text-6xl font-bold">
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
      </div>
    </div>
  );
}

export default Banner;
