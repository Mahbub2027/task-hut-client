import { useForm, ValidationError } from "@formspree/react";
import { IoBusiness } from "react-icons/io5";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const Support = () => {
    const [state, handleSubmit] = useForm("mwkgkopg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="bg-indigo-100 w-full h-[200px] py-10">
                <h2 className="mb-4 text-2xl md:text-4xl lg:text-6xl tracking-tight font-extrabold text-center text-indigo-600 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-slate-600 dark:text-gray-400 md:text-xl">
                    Got any issue? Want to send feedback about any feature? Let us know.
                </p>
            </div>
            <div className="flex flex-wrap gap-8 justify-center my-10">
                <div className="group p-10 space-y-2 rounded-xl border shadow-sm text-start hover:border-green-600 transition-all ease-in-out delay-100 duration-500">
                    <FaEnvelope className="w-8 h-8 text-green-500 group-hover:text-green-400 transition-all ease-in-out delay-100 duration-500" />
                    <p className="text-2xl font-bold group-hover:text-green-500 transition-all ease-in-out delay-150 duration-500">Email Address</p>
                    <small className="text-lg text-slate-700 group-hover:text-slate-500">taskhutweb@gmail.com</small>
                </div>
                <div className="group p-10 space-y-2 rounded-xl border shadow-sm text-start hover:border-amber-600 transition-all ease-in-out delay-100 duration-500">
                    <FaPhoneAlt className="w-8 h-8 text-amber-500 group-hover:text-amber-400 transition-all ease-in-out delay-100 duration-500" />
                    <p className="text-2xl font-bold group-hover:text-amber-500 transition-all ease-in-out delay-150 duration-500">Phone</p>
                    <small className="text-lg text-slate-700 group-hover:text-slate-500">(+880 ) 1722100839 <br />(+880 ) 1735564942</small>
                </div>
                <div className="group p-10 space-y-2 rounded-xl border shadow-sm text-start hover:border-indigo-600 transition-all ease-in-out delay-100 duration-500">
                    <IoBusiness className="w-8 h-8 text-indigo-500 group-hover:text-indigo-400 transition-all ease-in-out delay-100 duration-500" />
                    <p className="text-2xl font-bold group-hover:text-indigo-500 transition-all ease-in-out delay-150 duration-500">Business Address</p>
                    <small className="text-lg text-slate-700 group-hover:text-slate-500">Leading University, <br />Kamalbazar, Sylhet, Bangladesh</small>
                </div>
            </div>
            
            <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md border rounded-xl my-10">
                <h2 className="mb-5 text-3xl tracking-tight font-extrabold text-center text-indigo-600 dark:text-white">
                    Let us know your concern
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-300 form-control">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="your name"
                        required
                    />

                    <label //for="email"
                        className="block mb-2 text-sm font-medium 
                    text-gray-900 dark:text-gray-300 form-control"
                        htmlFor="email"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@example.com"
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label //for="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 form-control"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500t"
                        placeholder="Let us know how we can help you"
                        required
                    />

                    <label //for="message"
                        className="sm:col-span-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 form-control"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                    ></textarea>

                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        Send message
                    </button>
                </form>
            </div>
            <div className="w-screen h-[400px] p-10 bg-indigo-600">
                <iframe className="w-full h-full rounded-3xl shadow-xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14479.351350612727!2d91.8049219!3d24.8693875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sen!2sbd!4v1708627270226!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Support;


