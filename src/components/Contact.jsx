import React from "react";

const Contact = () => {
  return (
    <div
      id="Testimonial"
      className="container mx-auto flex justify-center items-center flex-col  p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl lg:text-4xl font-bold">
        Contact{" "}
        <span className="font-light underline decoration-1 underline-offset-4  ">
          With Us
        </span>{" "}
      </h1>
      <p className=" max-w-80 text-center text-gray-600 mt-4">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>
      <from className="w-full sm:w-auto flex flex-col gap-5 mt-10 ">
        <div className=" sm:flex gap-5">
          <div className="flex flex-col gap-2">
            <label>Your Name</label>
            <input type="text" required placeholder="Your Name" className="border px-4 py-3 rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email Address</label>
            <input type="email" required placeholder="Email Address" className="border px-4 py-3 rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
            <label>Message</label>
            <input  type="text" placeholder="Message" className="border px-4 py-3" />
        </div>
        <div className="flex items-center justify-center">
        
        <button type="button" className="bg-blue-600 py-3 text-white rounded w-1/2">Send Message</button>
        </div>
      </from>
    </div>
  );
};

export default Contact;
