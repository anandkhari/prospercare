import React from "react";
import {
  UserCheck,
  HeartHandshake,
  Brain,
  ShieldCheck,
  Search,
} from "lucide-react";

/* ✅ Banner strip items */
const bannerCards = [
  {
    title: "24-Hour Personalised Care",
    subtitle: "Support whenever it’s needed",
    icon: <UserCheck className="text-[#A3C53A] w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Encouraging Independence",
    subtitle: "Building confidence every day",
    icon: <HeartHandshake className="text-[#A3C53A] w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Therapeutic Daily Support",
    subtitle: "Promoting wellbeing and growth",
    icon: <Brain className="text-[#A3C53A] w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Warm & Homely Environment",
    subtitle: "Comfort, dignity and belonging",
    icon: <ShieldCheck className="text-[#A3C53A] w-8 h-8 md:w-10 md:h-10" />,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] w-full bg-gray-100 pb-10 md:pb-30">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center pt-20 md:pt-28 lg:pt-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-xl md:max-w-2xl">
            <h1 className="mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl mt-10 lg:text-6xl font-medium leading-tight text-white">
              WHERE CARE, <br />
              RESPECT, <span className="text-black">AND</span> <br />
              <span className="text-black">
                BELONGING COME <br />
                <span>FIRST</span>
              </span>
            </h1>

            <button className="flex items-center gap-2 rounded-lg bg-[#14B8A6] px-5 py-3 text-sm md:text-base font-medium text-white border border-white transition-colors hover:bg-[#0D9488]">
              <Search size={18} />
              We're Here to Help
            </button>
          </div>
        </div>
      </div>

      {/* ✅ TRUST STRIP */}
      {/* ✅ TRUST STRIP FLOATING */}
      <div className="absolute left-0 right-0 -bottom-20 md:-bottom-20 z-20 hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="w-full bg-white shadow-md py-4 md:py-6 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center divide-y sm:divide-y-0 lg:divide-x divide-gray-200">
              {bannerCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 md:gap-4 px-4 md:px-6 py-4"
                >
                  <div className="mt-1">{card.icon}</div>

                  <div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
