import whychoose from "../../../assets/images/why_choose_1.jpg";

import trusted from '../../../assets/lottieAnimation/trusted.json';
import support from '../../../assets/lottieAnimation/support.json';
import security from '../../../assets/lottieAnimation/security.json';
import valueTime from '../../../assets/lottieAnimation/valueTime.json';
import Lottie from 'lottie-react';


function WhyUs() {
  return (
    <section className="my-96 bg-[#1D4ED8] text-white py-20 px-14">
      <div className='text-center space-y-4 w-2/3 mx-auto my-20'>
        <h2 className='text-white text-5xl font-extrabold'>Why Choose Us</h2>
        <p className='text-slate-50 text-2xl font-medium'>We provide services to mitigate the gap between <span className='bg-yellow-500 p-1'>Companies</span> who looking for potential employees and <span className='bg-yellow-500 p-1'>Professionals</span> who looking for career opportunities.</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-12">
        <div className="w-1/2">
          <img
            className="rounded-xl"
            src={whychoose}
            alt=""
          />
        </div>

        <div className="w-1/2">
          <div className="space-y-3">
            <div className="flex flex-col lg:flex-row items-start gap-8 border-2 border-white rounded-3xl p-4 hover:bg-indigo-500 backdrop-blur-xl bg-opacity-5 bg-white/30">
              <div className="w-56 h-auto">
                <Lottie animationData={trusted} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Credibility: Trust & Verification</h1>{" "}
                <hr className="w-14 my-2" />
                <p className="mb-5">
                  Building trust is paramount; hence, both companies and employees are required to verify their profiles. This feature ensures that users engaging on the platform are genuine and enhances the overall reliability of the community.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-8 border-2 border-white rounded-3xl p-4 hover:bg-indigo-500 backdrop-blur-xl bg-opacity-5 bg-white/30">
              <div className="w-56 h-auto">
                <Lottie animationData={security} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Security: Two-Factor Authentication</h1>{" "}
                <hr className="w-14 my-2" />
                <p className="mb-5">
                  The platform prioritizes user security with a robust two-factor authentication system. This additional layer of verification enhances the protection of user accounts, instilling confidence in the safety of sensitive data shared on the website.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-8 border-2 border-white rounded-3xl p-4 hover:bg-indigo-500 backdrop-blur-xl bg-opacity-5 bg-white/30">
              <div className="w-56 h-auto">
                <Lottie animationData={support} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Support: 24/7</h1>{" "}
                <hr className="w-14 my-2" />
                <p className="mb-5">
                  Users, whether representing a company or an employee, can easily reach out to the admin for any support-related inquiries. Our dedicated support team works 24/7 to resolve all of your
                  queries over the phone or email, no matter where you are
                  located.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-8 border-2 border-white rounded-3xl p-4 hover:bg-indigo-500 backdrop-blur-xl bg-opacity-5 bg-white/30">
              <div className="w-80 h-auto">
                <Lottie animationData={valueTime} alt="" />
              </div>
              <div>
                <h1 className="text-xl font-medium">Value: Save Time for Hiring Potential Employees</h1>{" "}
                <hr className="w-14 my-2" />
                <p>
                  Focused on efficiency, the platform optimizes the hiring process, allowing companies to swiftly navigate tasks like job posting and candidate assessment. This time-saving feature enables companies to identify and connect with qualified candidates efficiently, streamlining the overall recruitment journey and adding significant value to the hiring process.
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
