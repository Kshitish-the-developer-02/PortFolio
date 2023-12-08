import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className=" w-full  h-screen  bg-gradient-to-b from-black  to-gray-800 text-white"
    >
      <div className=" flex flex-col  p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" pb-8">
          <p
            className=" text-4xl font-bold inline border-b-4
                         border-gray-400"
          >
            Contact
          </p>
          <p className=" py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex  justify-center items-center">
          <form
            action="https://getform.io/f/16152180-c290-4ca2-a9bd-74e50c8e45d5"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className=" p-2 bg-transparent text-white border-2
                                 rounded-md focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder=" Enter your email"
              className=" p-2 my-4 bg-transparent text-white border-2
                      rounded-md focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              className=" p-2 bg-transparent text-white border-2
                      rounded-md focus:outline-none"
            />
            <button
              className=" text-white bg-gradient-to-b from-cyan-600 to-blue-500
                               px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Lets'talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
