// ToDO:
// Code for : Onclick "Send Message" send an automated email at taskhut@gmail.com
// import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactComponents() {
  const [state, handleSubmit] = useForm("mwkgkopg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-pink-600 dark:text-white">
          Contact Us
        </h2>
        <p
          className="mb-8 lg:mb-16 font-light text-center
             text-gray-500 dark:text-gray-400 sm:text-xl"
        >
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <label //for="name"
            className="block mb-2 text-sm font-medium
                    text-gray-900 dark:text-gray-300 form-control"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300
                         text-gray-900 text-sm rounded-lg focus:ring-primary-500 
                         focus:border-primary-500 block w-full p-2.5 
                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
            className="shadow-sm bg-gray-50 border 
                        border-gray-300 text-gray-900 text-sm rounded-lg
                         focus:ring-primary-500 focus:border-primary-500 block w-full
                          p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 
                           dark:shadow-sm-light"
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
            className="block p-3 w-full text-sm 
                        text-gray-900 bg-gray-50 rounded-lg border
                         border-gray-300 shadow-sm focus:ring-primary-500 
                         focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                          dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
                          dark:focus:border-primary-500 dark:shadow-sm-light"
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-pink-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-pink-600 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
export default ContactComponents;
