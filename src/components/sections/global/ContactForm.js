import React from "react";
import Container from "@/components/ui/Container";

const ContactForm = () => {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-10 lg:px-24 bg-[#BCE3D5]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-stretch">
          
          {/* Left Side - Info Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-[30px] md:rounded-[40px] p-6 md:p-10 h-full shadow-xl flex flex-col">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-heading font-medium text-gray-800 leading-tight">
                  Get <span className="text-[#14B8A6]">Care</span> Information
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mt-2">Contact Us today</p>
                <div className="w-full h-px bg-gray-100 my-6"></div>
              </div>

              <div className="space-y-6 flex-grow">
                {/* Call Item */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#B3D44D] rounded-xl flex items-center justify-center shadow-lg shadow-lime-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">Call us</h4>
                    <p className="text-gray-500 text-sm md:text-base">07976370231</p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#B3D44D] rounded-xl flex items-center justify-center shadow-lg shadow-lime-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-heading font-medium text-gray-800">Email us</h4>
                    <p className="text-gray-500 text-sm md:text-base break-words">
                      admin@prospercaresolutions.com
                    </p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#B3D44D] rounded-xl flex items-center justify-center shadow-lg shadow-lime-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      className="md:w-6 md:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-medium text-gray-800">
                      Prosper Care Solutions
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[220px]">
                      58 Park Road East, WV1 4QB, Wolverhampton, United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-7 flex flex-col justify-center w-full">
            <form className="space-y-5 md:space-y-6">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-gray-700 font-medium ml-1 text-sm md:text-base">
                  Full Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white border border-gray-100 rounded-xl h-12 md:h-14 px-5 outline-none shadow-sm text-gray-800 placeholder:text-gray-400 focus:border-[#14B8A6] focus:shadow-md transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-gray-700 font-medium ml-1 text-sm md:text-base">
                  Email Address :
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-gray-100 rounded-xl h-12 md:h-14 px-5 outline-none shadow-sm text-gray-800 placeholder:text-gray-400 focus:border-[#14B8A6] focus:shadow-md transition-all"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-1">
                <label className="text-gray-700 font-medium ml-1 text-sm md:text-base">
                  Contact Number :
                </label>
                <input
                  type="tel"
                  placeholder="Enter your contact number"
                  className="w-full bg-white border border-gray-100 rounded-xl h-12 md:h-14 px-5 outline-none shadow-sm text-gray-800 placeholder:text-gray-400 focus:border-[#14B8A6] focus:shadow-md transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-gray-700 font-medium ml-1 text-sm md:text-base">
                  Enter Your Message :
                </label>
                <textarea
                  placeholder="Type your message..."
                  className="w-full bg-white border border-gray-100 rounded-2xl p-5 outline-none shadow-sm text-gray-800 placeholder:text-gray-400 focus:border-[#14B8A6] focus:shadow-md transition-all h-32 md:h-40 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <div className="pt-2">
                <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#14B8A6] hover:bg-[#0D9488] text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg active:scale-95 group">
                  Send Your Message
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#14B8A6"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;