import { useForm, ValidationError } from "@formspree/react";

const Support = () => {
    const [state, handleSubmit] = useForm("mwkgkopg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-indigo-600 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got any issue as a Company or Employee? Want to send feedback about a beta feature?
                    Need details about our Business plan? Let us know.
                </p>
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
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-indigo-600 dark:focus:ring-primary-800"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;


