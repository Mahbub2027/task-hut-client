import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import logo from "../../../public/TaskhutClear.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";
AOS.init();

const Footer = () => {
  const axiosPublic = useAxiosPublic();



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const newsLetterData = {
      email,
    }
    const newsLetter = await axiosPublic.post("/newsletter", newsLetterData)
    if (newsLetter.data.insertedId) {
      
      Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Subscribed to TaskHut Newsletter!",
          showConfirmButton: false,
          timer: 1500
      });
  }

  }




  return (
    <div className="mt-auto">
      <footer className="footer p-10 text-white bg-indigo-900">
        <aside>
          <div className="bg-white py-2 px-6 rounded-full shadow-lg">
            <Link to='/'><img className="w-28 h-12" src={logo} alt="" /></Link>
          </div>
          {/* <img className="w-12" src="https://i.ibb.co/vsNFnW0/Taskhut.jpg" alt="" /> */}

          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="grid grid-flow-col gap-4 mt-8 text-3xl "
          >
            <Link
              className="text-indigo-200 hover:text-white hover:scale-110 hover:shadow-lg transition-all ease-in-out delay-75 duration-500"
              target="_blank"
              to="https://www.linkedin.com/taskhutltd"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              className="text-indigo-200 hover:text-white hover:scale-110 hover:shadow-lg transition-all ease-in-out delay-75 duration-500"
              target="_blank"
              to="https://www.twitter.com/taskhutltd"
            >
              <FaTwitter></FaTwitter>
            </Link>
            <Link
              className="text-indigo-200 hover:text-white hover:scale-110 hover:shadow-lg transition-all ease-in-out delay-75 duration-500"
              target="_blank"
              to="https://www.github.com/taskhutltd"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              className="text-indigo-200 hover:text-white hover:scale-110 hover:shadow-lg transition-all ease-in-out delay-75 duration-500"
              target="_blank"
              to="https://www.facebook.com/taskhutltd"
            >
              <FaFacebook></FaFacebook>
            </Link>
            <Link
              className="text-indigo-200 hover:text-white hover:scale-110 hover:shadow-lg transition-all ease-in-out delay-75 duration-500"
              target="_blank"
              to="https://www.instagram.com/taskhutltd"
            >
              <FaInstagram></FaInstagram>
            </Link>
          </div>

          <p className="mt-4 flex justify-center gap-4">
            <FaPhone />
            +8801722100839
          </p>

          <p className="flex justify-center gap-4">
            <IoIosMail />
            taskhutweb@gmail.com
          </p>
          <p className="flex justify-center gap-4">
            <FaLocationDot />
            Sylhet, Bangladesh
          </p>

        </aside>

        <nav>
          <header className="footer-title">Services</header>
          <Link to="/findJobs" className="link link-hover font-semibold">
            Find Jobs
          </Link>
          <Link to="/findEmployee" className="link link-hover font-semibold">
            Find Employees
          </Link>
          <Link to="/allCompanies" className="link link-hover font-semibold">
            List of Companies
          </Link>
          <Link to="/blogs" className="link link-hover font-semibold">
            Blogs
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to="/aboutUs" className="link link-hover font-semibold">
            About Us
          </Link>
          <Link to="/support" className="link link-hover font-semibold">
            Contact
          </Link>
          <Link to="/career" className="link link-hover font-semibold">
            Career
          </Link>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <Link to="/terms" className="link link-hover font-semibold">
            Terms of use
          </Link>
          <Link to="/privacy" className="link link-hover font-semibold">
            Privacy Policy
          </Link>
          <Link to="/cookie" className="link link-hover font-semibold">
            Cookie
          </Link>
        </nav>
      </footer>{" "}
      <div className="h-[1px] bg-indigo-400"></div>
      <footer className="footer footer-center p-4 text-white bg-indigo-950">
       
          <div className="">
            <p className="my-4 font-extrabold md:text-2xl uppercase">Subscribe to our newsletter</p>
            <div className="flex justify-center rounded-r-full">
              <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row gap-4 md:gap-0">
                <input
                  type="email"
                  name="email"
                  className="py-3 px-4 rounded-md md:rounded-r-none focus:outline-none focus:ring focus:border-blue-300 text-black"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="uppercase bg-indigo-600 hover:bg-indigo-500 py-3 px-6 rounded-full md:rounded-l-none transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <p className="font-bold flex flex-wrap justify-center">
            Copyright © 2024 - All right reserved by{" "}
            <Link to="/">
              Task <span className="text-indigo-400">Hut</span>
            </Link>{" "}
            Ltd.
          </p>
       
      </footer>
    </div>
  );
};


export default Footer;
