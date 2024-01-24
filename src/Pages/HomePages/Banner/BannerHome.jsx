// import React from 'react';
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import cover1 from '../../../assets/banner/cover1.jpg';
import cover2 from '../../../assets/banner/cover2.jpg';
import cover3 from '../../../assets/banner/cover3.jpg';
import cover5 from '../../../assets/banner/cover5.jpg';

const BannerHome = () => {
    return (
        <div className="w-11/12 mx-auto my-10 flex flex-col lg:flex-row items-center gap-5">

            <div className="w-1/2 mx-auto text-purple-700 text-center lg:text-left">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                    {" "}
                    <Typewriter
                        words={[
                            "Find Remote Jobs",
                            "Hire Global Talents",
                            "Post Jobs",
                            "Get Work Done",
                        ]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>

                <p className="mb-5 text-black text-xs lg:text-lg">
                    Meet clients you're excited to work with and take your career or
                    business to new heights.
                </p>

                <Link to='/login'><button className="bg-purple-800 p-3 text-white font-bold rounded-lg">Get Started</button></Link>

                {/* <div className="flex justify-center gap-2 mt-10">
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
                    </div> */}
            </div>

            <div className="w-1/2 mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <img className="w-full h-[400px]" src={cover1} alt="cover" />
                        {/* <img className="w-full h-96" src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[400px]" src={cover2} alt="cover" />
                        {/* <img className="w-full h-96" src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[400px]" src={cover3} alt="cover" />
                        {/* <img className="w-full h-96" src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="w-full h-[400px]" src={cover5} alt="cover" />
                        {/* <img className="w-full h-96" src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
                    </SwiperSlide>
                </Swiper>

            </div>
        </div >
    );
};

export default BannerHome;