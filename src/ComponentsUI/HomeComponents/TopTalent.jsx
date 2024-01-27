import { FaAndroid, FaCode, FaDatabase, FaFileCode, FaHotel, FaNetworkWired, FaSwatchbook } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { CiSquareMore } from "react-icons/ci";


const TopTalent =()  => {
  return (
    <section className="my-20 mx-24">
      <h1 className="text-center font-bold text-xl lg:text-4xl mt-32 mb-16">
        Find Top Talent{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-7">
        {/* <!-- card 1 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10 text-5xl">
            <div className="">
            <FaFileCode />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Web development & design</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 2 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaCode />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Programming & Software</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 3 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaAndroid />{" "}
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Apps & Mobile</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 4 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaDatabase />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Database design & Administration</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 5 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaSwatchbook />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Design & Creative</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 6 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaNetworkWired />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Networking & Hardware</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 7 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaHotel />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Engineering & Architecture</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 8 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <div className="mb-2 text-5xl">
            <FaMagnifyingGlassChart />
            </div>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Digital Marketing</a>
            </h2>
          </div>
        </div>
        {/* <!-- card 9 --> */}
        <div className="card  cursor-pointer bg-gray-50 hover:bg-base-200 shadow-lg">
        <figure className="px-10 pt-10">
        <div className="mb-2 text-5xl">
        <CiSquareMore />
        </div>
        </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <a href="#">Others</a>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopTalent;
