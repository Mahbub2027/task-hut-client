import softwareImg from '../../../assets/images/software-engineer.jpg';
import developerImg from '../../../assets/images/developer.jpg';
import { FaChrome, FaCode, FaDatabase, FaLaptopCode, FaMobileScreenButton, FaReact } from "react-icons/fa6";

const TopTalent = () => {
  return (
    <div className='w-11/12 xl:w-8/12 mx-auto my-40'>
      <div className='text-center space-y-4 w-full md:w-2/3 mx-auto my-20'>
        <h2 className='text-slate-700 text-3xl md:text-5xl font-extrabold'>Find Top Talents By Category</h2>
        <p className='text-slate-500 text-lg md:text-2xl font-medium'>Search talented <span className='bg-yellow-300 p-1'>professionals</span> for your company by our top <span className='bg-yellow-300 p-1'>Categories</span></p>
      </div>
      <div className='w-full group p-4 md:py-8 lg:py-14 lg:px-10 rounded-3xl lg:rounded-[100px] h-full flex flex-col md:flex-row justify-around bg-indigo-100 hover:bg-indigo-600 hover:shadow-md transition-all ease-in-out delay-0 duration-1000'>
        <div className='w-1/3 relative hidden lg:block'>
          <div className='w-2/3 lg:h-40 shadow-lg rounded-[50px] absolute top-0 left-0 group-hover:top-5 group-hover:left-8 transition-all ease-in-out delay-0 duration-1000'>
            <img className='w-full h-full rounded-[50px] object-cover' src={developerImg} alt="" />
          </div>
          <div className='w-2/3 lg:h-40 shadow-lg rounded-[50px] absolute bottom-4 right-4 group-hover:bottom-8 group-hover:right-8 transition-all ease-in-out delay-0 duration-1000'>
            <img className='w-full h-full rounded-[50px] object-cover' src={softwareImg} alt="" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-center items-center space-y-4 md:space-y-0'>
          <div className='space-y-4 md:space-y-10'>
            <div className='group border-4 rounded-3xl bg-white flex items-center gap-2 p-3 hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
              <FaDatabase className='w-16 h-16 text-indigo-400 group-hover:text-indigo-600' />
              <div className=''>
                <h3 className='font-medium'>Backend Developers</h3>
                <p>Open positions</p>
              </div>
            </div>
            <div className='group border-4 rounded-3xl bg-white flex items-center gap-2 p-3 hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
              <FaLaptopCode className='w-16 h-16 text-indigo-400 group-hover:text-indigo-600' />
              <div className=''>
                <h3 className='font-medium'>Frontend Developers</h3>
                <p>Open positions</p>
              </div>
            </div>
            <div className='group border-4 rounded-3xl bg-white flex items-center gap-2 p-3 hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
              <FaCode className='w-16 h-16 text-indigo-400 group-hover:text-indigo-600' />
              <div className=''>
                <h3 className='font-medium'>Software Engineers</h3>
                <p>Open positions</p>
              </div>
            </div>
          </div>
          <div className='space-y-4 md:space-y-10'>
            <div className='group border-4 rounded-3xl bg-white flex items-center gap-2 p-3 hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
              <FaMobileScreenButton className='w-16 h-16 text-indigo-400 group-hover:text-indigo-600' />
              <div className=''>
                <h3 className='font-medium'>Android Developers</h3>
                <p>Open positions</p>
              </div>
            </div>
            <div className='group border-4 rounded-3xl bg-white flex items-center gap-2 p-3 hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
              <FaChrome className='w-16 h-16 text-indigo-400 group-hover:text-indigo-600' />
              <div className=''>
                <h3 className='font-medium'>Web Developers</h3>
                <p>Open positions</p>
              </div>
            </div>
            <div className='group border-4 rounded-3xl bg-white flex items-center gap-2 p-3 hover:shadow-md hover:border-indigo-400 transition-all ease-out delay-0 duration-500'>
              <FaReact className='w-16 h-16 text-indigo-400 group-hover:text-indigo-600' />
              <div className=''>
                <h3 className='font-medium'>React Developers</h3>
                <p>Open positions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTalent;
