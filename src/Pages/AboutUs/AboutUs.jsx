import { Helmet } from "react-helmet";
import logo from "../../../public/TaskhutClear.png";
import developer from "../../assets/images/developer.jpg";
import WhyTaskHut from "./WhyTaskHut";
import Statistics from "./Statistics";
import { Typewriter } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const  AboutUs = () => {

  const {user} = useAuth();
  AOS.init();

  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us || TaskHut</title>
      </Helmet>

      <h1 className="text-center p-10 font-bold text-5xl">
        About Us -<span className="text-black"> Task</span>
        <span className="text-indigo-600">Hut</span>
      </h1>
      

      <div className="text-black text-center">
        <h3 className="mb-5 text-2xl font-bold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent">
          <span className="text-slate-700 text-3xl block">Empowering Global Talent</span>
          <br />{" "}
          <Typewriter
            words={["Unveiling TaskHut`s Mission in the Digital Workspace"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h3>
      </div>

      <div className="lg:flex items-center justify-evenly p-20 bg-purple-200">
        <div data-aos="fade-right" data-aos-duration="500">
          <img src={logo} alt="" />
        </div>

        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="card w-96 bg-purple-700 text-primary-content items-center"
        >
          <div className="card-body">
            <p className="p-8 text-wrap text-white text-justify">
              Welcome to TaskHut, where innovation meets opportunity in the
              dynamic realm of remote work. <br /> At TaskHut, we are dedicated
              to revolutionizing the way companies connect with top-tier
              developers <br />
              from around the world, and how skilled professionals unlock
              exciting remote tasks and jobs.
            </p>
            <div className="card-actions justify-end">
              <Link to="/login">
                <button className="btn font-bold">Join TaskHut</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl font-bold text-center mt-16">Our Mission</h1>
      <div className="lg:flex items-center justify-between p-20">
        <div
          data-aos="zoom-out-up"
          data-aos-duration="1000"
          className="bg-purple-200 rounded sm:w-auto"
        >
          <p className=" lg:text-xl text-black text-justify p-10">
            TaskHut was born out of a vision to create a global marketplace that
            seamlessly brings together companies seeking technical expertise and
            talented developers eager to take on exciting challenges. As the
            digital landscape evolves, so does the need for a platform that
            transcends geographical boundaries, fostering collaboration and
            innovation on a truly global scale
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          <img src={developer} alt="" className="m-5 rounded-xl" />
        </div>
      </div>

      <div className="grid gap-6 justify-center">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-bubble">Hey, Looking for jobs?</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-bubble">
            There are hundreds of jobs available
          </div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-bubble">for you, on TaskHut.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="chat-bubble">Yes, I am looking for jobs.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div className="chat-bubble">What to do?</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-bubble">
            Sign Up and Start applying for jobs.
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-sine"
        className="card-actions justify-center p-10"
      >
        <Link to="/login">
          {
            !user?.emailVerified && <button className="primary-btn">
            Join TaskHut
          </button> 
          }
        </Link>
      </div>

      <h1 className="text-5xl font-bold text-center my-16">Why Us?</h1>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="items-center justify-center lg:w-1/2 lg:ml-96 mb-10"
      >
        <WhyTaskHut></WhyTaskHut>
      </div>

      {/* <h1 className="text-5xl font-bold text-center">Statistics</h1> */}
      <div className="lg:flex items-center justify-center p-20">
        {/* <Statistics></Statistics> */}
      </div>
    </div>
  );
}

export default AboutUs;
