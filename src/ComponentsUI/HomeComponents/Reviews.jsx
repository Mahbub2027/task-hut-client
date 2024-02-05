import member1 from "../../assets/images/member1.png";
import member2 from "../../assets/images/member2.png";
import member3 from "../../assets/images/member3.png";
import member4 from "../../assets/images/member4.png";

function Reviews() {
  return (
    <section className="my-24">
      <h1 className="text-center font-bold text-2xl lg:text-4xl mb-16">
        What client say
      </h1>

      <div className="carousel w-full">
        {/* <!-- curousel 1 --> */}
        <div id="slide1" className="carousel-item relative w-full">
          <div>
            <div className="mx-24">
              <p>
                TaskHut has been a game-changer for our company`s projects. The
                platform`s talent pool is unparalleled. We`ve hired multiple
                experts for diverse tasks, and each freelancer has delivered
                top-notch quality work. Highly recommend!
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
              <div>
                <img className="w-1/2" src={member1} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Solace Engineers Inc.</h2>
                <h4>Engineering Firm</h4>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <!-- curousel 2 --> */}
        <div id="slide2" className="carousel-item relative w-full">
          <div>
            <div className="mx-24">
              <p>
                What sets TaskHut apart is their exceptional support team.
                Anytime we`ve encountered an issue or needed guidance, their
                support has been prompt, friendly, and effective. Knowing they
                have our back adds immense value to the overall experience.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
              <div>
                <img className="w-1/2" src={member2} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Isabel Austin</h2>
                <h4>Writer, Editor, Proofreader</h4>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <!-- curousel 3 --> */}
        <div id="slide3" className="carousel-item relative w-full">
          <div>
            <div className="mx-24">
              <p>
                TaskHut`s user-friendly interface makes finding and hiring
                freelancers a breeze. The streamlined process from posting a job
                to selecting a skilled professional is impressive. It saved us
                time and effort, ensuring we found the perfect match for our
                needs.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
              <div>
                <img className="w-1/2" src={member3} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">David Hussy</h2>
                <h4>IT solutions firm</h4>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <!-- curousel 4 --> */}
        <div id="slide4" className="carousel-item relative w-full">
          <div>
            <div className="mx-24">
              <p>
                TaskHut is not only a marketplace but a place to do business. We
                meet new clients and more often than not establish long-term
                business relationships, all through TaskHut. The flexibility in
                how projects can be structured and the many payment options
                available allows us to work with clients in a way they feel most
                comfortable. We have been with TaskHut for over 10 years and
                hope to be here much longer.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
              <div>
                <img className="w-1/2" src={member4} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">DScopic Software</h2>
                <h4>IT solutions firm</h4>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default Reviews;
