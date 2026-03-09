"use client";
import React from "react";
import Container from "@/components/ui/Container";
import { UserCheck, HeartHandshake, Brain, ShieldCheck } from "lucide-react";
import usePremiumReveal from "@/hooks/usePremiumReveal";

const WhyChooseUs = () => {
  usePremiumReveal();

  const features = [
    {
      title: "Promoting Independence",
      description: "Supportive guidance that encourages confidence and choice.",
      image: "https://images.pexels.com/photos/8550841/pexels-photo-8550841.jpeg",
      icon: <UserCheck className="text-[#9AC13B]" size={40} />,
    },
    {
      title: "Personalised Care",
      description: "Tailored plans built around individual needs and goals.",
      image: "https://images.pexels.com/photos/7176224/pexels-photo-7176224.jpeg",
      icon: <HeartHandshake className="text-[#9AC13B]" size={40} />,
    },
    {
      title: "Calm Environment",
      description: "Low-stimulation spaces focused on comfort and stability.",
      image: "https://images.pexels.com/photos/6255633/pexels-photo-6255633.jpeg",
      icon: <Brain className="text-[#9AC13B]" size={40} />,
    },
    {
      title: "Compassionate Team",
      description: "Experienced professionals delivering person-centred support.",
      image: "https://images.pexels.com/photos/6643713/pexels-photo-6643713.jpeg",
      icon: <UserCheck className="text-[#9AC13B]" size={40} />,
    },
    {
      title: "Collaborative Approach",
      description: "Working with families and professionals for meaningful progress.",
      image: "https://images.pexels.com/photos/4100679/pexels-photo-4100679.jpeg",
      icon: <HeartHandshake className="text-[#9AC13B]" size={40} />,
    },
    {
      title: "Safe & Supportive Setting",
      description: "A stable environment designed for wellbeing and reassurance.",
      image: "https://images.pexels.com/photos/23496575/pexels-photo-23496575.jpeg",
      icon: <ShieldCheck className="text-[#9AC13B]" size={40} />,
    },
  ];

  return (
    <section className="py-12 md:py-24 px-2 md:px-10 lg:px-24 bg-[#F4F9F9]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1 reveal reveal-left">
            <LargeCard {...features[0]} floating />
            <LargeCard {...features[1]} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-10 order-1 lg:order-2">
            <div className="flex flex-col lg:ml-10 gap-4 text-center lg:text-left reveal reveal-up">
              <h2 className="text-3xl md:text-5xl mb-4 font-heading font-medium text-gray-800">
                <span className="text-[#14B8A6]">Why</span> Choose Us?
              </h2>

              <p className="max-w-3xl mx-auto lg:mx-0 text-gray-600 leading-relaxed text-sm md:text-base">
              At Prosper Haven, we provide a calm, low-stimulation environment
                supported by a highly trained and compassionate team. Our
                person-centred approach focuses on safety, positive behaviour
                support, and tailored care plans designed around each
                individual’s needs.
              </p>

              <div className="h-px bg-gray-300 w-full hidden md:block"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:ml-10">
              {features.slice(2).map((item, i) => (
                <div
                  key={i}
                  className="reveal reveal-up"
                  data-delay={i + 1}
                >
                  <SmallCard {...item} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

/* ================= LARGE CARD ================= */

const LargeCard = ({ title, description, image, icon, floating }) => (
  <div className="relative h-[300px] md:h-[350px] lg:h-[325px] rounded-[28px] overflow-hidden shadow-md group contain-paint">

    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover
      transform-gpu will-change-transform
      transition-transform duration-500
      group-hover:scale-[1.03]"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

    <div
      className={`absolute p-6 w-[90%] sm:max-w-[85%]
      ${floating ? "top-1/2 left-4 md:left-6 -translate-y-1/2" : "bottom-4 md:bottom-6 left-4 md:left-6"}`}
    >
      <div className="mb-3 scale-90 md:scale-100 origin-left">{icon}</div>
      <h3 className="font-heading font-semibold mb-2 text-gray-800 text-lg md:text-xl">
        {title}
      </h3>
      <p className="text-gray-700 text-xs md:text-sm line-clamp-3">{description}</p>
    </div>
  </div>
);

/* ================= SMALL CARD ================= */

const SmallCard = ({ title, description, image, icon }) => (
  <div className="relative min-h-[220px] sm:h-[200px] rounded-[24px] overflow-hidden border border-[#E3E6E6] group contain-paint">

    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover
      transform-gpu will-change-transform
      transition-transform duration-500
      group-hover:scale-[1.03]"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

    <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 p-2 max-w-[90%]">
      <div className="mb-2 scale-75 md:scale-90 origin-left">{icon}</div>
      <h3 className="font-heading font-semibold text-lg md:text-xl mb-1 text-black">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-gray-700 line-clamp-2">{description}</p>
    </div>
  </div>
);

export default WhyChooseUs;