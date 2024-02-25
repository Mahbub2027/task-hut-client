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

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Footer = () => {
  return (
    <div className="mt-auto">
      <footer className="footer p-10 text-white bg-indigo-950">
        <aside>
          <div>
            <h2 className="text-4xl font-bold">
              Task<span className="text-purple-400">Hut</span>
            </h2>
          </div>
          {/* <img className="w-12" src="https://i.ibb.co/vsNFnW0/Taskhut.jpg" alt="" /> */}

          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="grid grid-flow-col gap-4 mt-8 text-3xl "
          >
            <Link
              className="hover:text-purple-500"
              target="_blank"
              to="https://www.linkedin.com/taskhutltd"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              className="hover:text-purple-500"
              target="_blank"
              to="https://www.twitter.com/taskhutltd"
            >
              <FaTwitter></FaTwitter>
            </Link>
            <Link
              className="hover:text-purple-500"
              target="_blank"
              to="https://www.github.com/taskhutltd"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              className="hover:text-purple-500"
              target="_blank"
              to="https://www.facebook.com/taskhutltd"
            >
              <FaFacebook></FaFacebook>
            </Link>
            <Link
              className="hover:text-purple-500"
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
      <hr className="h-0.5  bg-purple-400" />
      <footer className="footer footer-center p-4 text-white bg-indigo-950">
        <aside>
          <div className="justify-center ">
            <p className="my-4 text-2xl">Subscribe to our newsletter</p>
            <div className="container mx-auto flex justify-center w-full  rounded-r-full">
              <form onSubmit={null} className="flex">
                {/* // To Do : Add newsletter service functionality */}
                <input
                  type="email"
                  className="py-3 px-4 w-auto rounded-l-md focus:outline-none focus:ring focus:border-blue-300 text-black"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="bg-purple-500 py-3 px-6 rounded-r-full transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr />

          <p className="font-bold">
            Copyright © 2024 - All right reserved by{" "}
            <Link to="/">
              Task <span className="text-purple-400">Hut</span>
            </Link>{" "}
            Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
