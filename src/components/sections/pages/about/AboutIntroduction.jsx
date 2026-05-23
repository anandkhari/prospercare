import React from "react";

const AboutIntroduction = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">


      <div className="container mx-auto px-6 lg:px-20 max-w-8xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[2px] bg-teal-500 rounded-full" />
              <p className="text-lg text-gray-800 tracking-tight">
                <span className="font-bold text-teal-600 text-xl">17</span> Years of Experience
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium text-gray-900 leading-[1.15] tracking-tight">
              Creating <span className="text-teal-500">Safe Spaces</span> <br className="hidden sm:block" />
              for Better Living
            </h2>

            <div className="space-y-4">
              <p className="text-gray-600 text-base lg:text-[17px] leading-relaxed max-w-xl">
                At Prosper Care Solutions, we are dedicated to delivering exceptional,
                person-centred care to individuals with complex needs. Our team is
                passionate about fostering independence, dignity, and a higher quality
                of life for all our residents.
              </p>
              <p className="text-gray-600 text-base lg:text-[17px] leading-relaxed max-w-xl">
                With over 17 years of experience in health and social care, we are
                committed to making a meaningful impact on the lives of those we
                support. We are committed to making a meaningful impact on the 
                lives of those we support and a higher quality of life for all our 
                residents.
              </p>
            </div>

            {/* Subtle separator line shown in screenshot */}
            <div className="w-full h-px bg-gray-100 mt-10" />
          </div>

          {/* Right Image */}
          <div className="relative group mt-10">
            <div className=" rounded-sm  h-full min-h-[300px]">
              <img
                src="/about.jpg"
                alt="Therapy session showing supportive interaction"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntroduction;
