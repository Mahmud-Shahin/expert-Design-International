import React from "react";

const ContactUsForm = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 border border-red-500 bg-white">
      <div className="p-5 space-y-5 shadow-xl">
        <h4 className="text-center text-3xl pb-5">Contact Us</h4>
        <form>
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="first Name"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="last Name"
            />
            <input
              type="email"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="email address"
            />
            <input
              type="text"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500"
              placeholder="phone number"
            />
            <textarea
              placeholder="Your message"
              className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-red-500 col-span-2"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
