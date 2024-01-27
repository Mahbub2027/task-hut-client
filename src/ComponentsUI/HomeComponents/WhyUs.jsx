import whychoose from "../../assets/images/why_choose_1.jpg";
import credibility from "../../assets/icons/credibility.png";
import security from "../../assets/icons/security.png";
import support from "../../assets/icons/support.png";
import value from "../../assets/icons/value.png";

function WhyUs() {
  return (
    <section className="my-20 bg-[#1D4ED8] text-white py-20 px-14">
      <h1 className="text-center font-semibold text-2xl lg:text-5xl mb-14 ">
        Why Choose Us
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-12">
        <div>
          <img
            className="rounded-xl"
            src={whychoose}
            alt=""
          />
        </div>

        <div>
          <div className="space-y-3">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="w-16">
                <img src={credibility} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Credibility</h1>{" "}
                <hr className="w-14 my-2" />
                <p className="mb-5">
                  We verify Freelancers, publish their feedback scores and
                  All-Time Transaction Data to help you identify time-tested
                  professionals across the globe.
                </p>
              </div>
            </div>
            <div className="flex  flex-col lg:flex-row items-center gap-5">
              <div className="w-14">
                <img src={security} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Security</h1>{" "}
                <hr className="w-14 my-2" />
                <p className="mb-5">
                  We offer SafePay payment protection and your choice of
                  preferred payment method for financial peace of mind.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="w-14">
                <img src={support} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Support</h1>{" "}
                <hr className="w-14 my-2" />
                <p className="mb-5">
                  Our dedicated support team works 24/7 to resolve all of your
                  queries over the phone or email, no matter where you are
                  located.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <div className="w-14">
                <img src={value} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Value</h1>{" "}
                <hr className="w-14 my-2" />
                <p>
                  We provide multiple Payment terms and flexible Agreements to
                  enable you to work the way you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
