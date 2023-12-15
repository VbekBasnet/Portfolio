import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="flex felx-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2  inline text-white">
            Contact
          </p>
          <p className="py-6 text-white">
            Submit the form below to get touch with me
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/b4c6e76d-4c2f-4f98-a448-22e3feb15c2c"
            method="POST"
            className=""
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              placeholder="Enter your message"
              name="message"
              rows={10}
              className="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none"
            />
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center
            rounded-md hover:scale-110 duration-300 "
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
