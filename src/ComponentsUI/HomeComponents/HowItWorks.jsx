import postimg from "../../assets/icons/post1.png";
import hireimg from "../../assets/icons/hire1.png";
import workimg from "../../assets/icons/work1.png";
import paymentimg from "../../assets/icons/payment1.png";
function HowItWorks() {
  return (
    <section className="my-24">
      <div>
        <h1 className="text-center font-bold text-xl lg:text-4xl mb-7">
          It is Easy to Get Work Done on{" "}
          <span className="text-[#4338CA]">Task</span>Hut
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* <!-- card 1 --> */}
        <div className="card w-96 bg-base-100 bg-white text-black mx-5">
          <figure className="px-10 pt-10">
            <img src={postimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Post a Job</h2>
            <p>
              Create your free job posting and start receiving Quotes within
              hours.
            </p>
          </div>
        </div>

        {/* <!-- card 2 --> */}
        <div className="card w-96 bg-base-100 bg-white text-black mx-5">
          <figure className="px-10 pt-10">
            <img src={hireimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Hire Freelancers</h2>
            <p>
              Compare the Quotes you receive and hire the best freelance
              professionals for the job.
            </p>
          </div>
        </div>

        {/* <!-- card 3 --> */}
        <div className="card w-96 bg-base-100 bg-white text-black mx-5">
          <figure className="px-10 pt-10">
            <img src={workimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Get Work Done</h2>
            <p>
              Decide on how and when payments will be made and use WorkRooms to
              collaborate, communicate and track work.
            </p>
          </div>
        </div>

        {/* <!-- card 4 --> */}
        <div className="card w-96 bg-base-100 bg-white text-black mx-5">
          <figure className="px-10 pt-10">
            <img src={paymentimg} alt="" className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Pay safely</h2>
            <p>
              Choose from multiple payment methods with SafePay payment
              protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
