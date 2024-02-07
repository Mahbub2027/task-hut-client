import React from 'react';

// lottieFile animation json
import createProfile from '../../../assets/lottieAnimation/createProfile.json';
import postJob from '../../../assets/lottieAnimation/postJob.json';
import findEmployee from '../../../assets/lottieAnimation/findEmployee.json';
import applyJobs from '../../../assets/lottieAnimation/applyJobs.json';
import contact from '../../../assets/lottieAnimation/contact.json';
import interview from '../../../assets/lottieAnimation/interview.json';
import feedback from '../../../assets/lottieAnimation/feedback.json';
import notification from '../../../assets/lottieAnimation/notification.json';
import Lottie from 'lottie-react';

const Services = () => {
    return (
        <div className='my-20'>
            <div className='text-center space-y-4 w-2/3 mx-auto'>
                <h2 className='text-slate-700 text-5xl font-extrabold'>Our Services</h2>
                <p className='text-slate-500 text-2xl font-medium'>We provide services to mitigate the gap between <span className='bg-yellow-300 p-1'>Companies</span> who looking for potential employees and <span className='bg-yellow-300 p-1'>Professionals</span> who looking for career opportunities.</p>
            </div>
            <div className='flex flex-col items-center gap-10 w-9/12 mx-auto my-20'>
                <div className='sticky top-32 lg:top-[150px]  w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={createProfile} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Create Profile</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Users(company or employee) can easily establish their presence on the website by creating detailed profiles. This ensures a comprehensive overview of their professional identity and helps in building trust within the community.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[160px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={postJob} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-violet-500 via-violet-600 to-violet-700 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Post a Job</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Exclusive to companies, this feature allows for the seamless posting of job opportunities. Companies can provide detailed information about the position, enabling them to attract the most suitable candidates for the role.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[170px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={findEmployee} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-cyan-500 via-cyan-500 to-cyan-600 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Find Employees</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Companies can efficiently discover talented and verified professionals using the platform's search and filtering capabilities. This feature streamlines the hiring process by connecting companies with a pool of pre-qualified candidates.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[180px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={applyJobs} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Apply Jobs</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Employees have the ability to directly apply for posted jobs, making the job-seeking process straightforward. This feature empowers individuals to express their interest and showcase their skills to potential employers.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[190px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={contact} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Connect with Employees</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Facilitating real-time communication, companies can engage with employees through a built-in chat system. This feature fosters direct and immediate interaction, enhancing the efficiency of the hiring process.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[200px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={interview} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Easy Interviewing</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Companies can set tasks for interviews and effortlessly receive task reports. This feature simplifies the assessment process, allowing companies to gauge the skills and capabilities of candidates in a structured manner.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[210px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={feedback} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Feedback</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Employees can share their experiences by providing valuable feedback on companies. This feature not only contributes to the transparency of the platform but also helps companies in understanding and improving their employer brand.</p>
                    </div>
                </div>
                <div className='sticky top-32 lg:top-[220px] w-full lg:w-9/12 flex justify-between items-center shadow-md rounded-3xl'>
                    <div className='hidden lg:block w-1/3 h-full bg-white rounded-l-3xl'>
                        <Lottie className="w-full h-64" animationData={notification} />
                    </div>
                    <div className='w-full lg:w-2/3 p-8 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-3xl lg:rounded-l-none space-y-3 lg:space-y-6'>
                        <h2 className='text-white font-bold text-2xl lg:text-4xl'>Notifications</h2>
                        <p className='text-slate-50 text-justify text-lg lg:text-2xl'>Both companies and employees receive timely notifications, including system notifications (such as admin approvals and profile verifications), job-related updates (job applications and interview tasks), and communication alerts (new chat messages).</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;