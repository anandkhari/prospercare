import React from "react";
import Container from "@/components/ui/Container";
import { UserCheck, HeartHandshake, Brain, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {
const features = [
  {
    title: "Promoting Independence",
    description: "Supportive guidance that encourages confidence and choice.",
    image: "https://images.pexels.com/photos/8550841/pexels-photo-8550841.jpeg",
    icon: <UserCheck className="text-[#9AC13B]" size={48} />,
  },
  {
    title: "Personalised Care",
    description: "Tailored plans built around individual needs and goals.",
    image: "https://images.pexels.com/photos/7176224/pexels-photo-7176224.jpeg",
    icon: <HeartHandshake className="text-[#9AC13B]" size={48} />,
  },
  {
    title: "Calm Environment",
    description: "Low-stimulation spaces focused on comfort and stability.",
    image: "https://images.pexels.com/photos/6255633/pexels-photo-6255633.jpeg",
    icon: <Brain className="text-[#9AC13B]" size={48} />,
  },
  {
    title: "Compassionate Team",
    description: "Experienced professionals delivering person-centred support.",
    image: "https://images.pexels.com/photos/6643713/pexels-photo-6643713.jpeg",
    icon: <UserCheck className="text-[#9AC13B]" size={48} />,
  },
  {
    title: "Collaborative Approach",
    description: "Working with families and professionals for meaningful progress.",
    image: "https://images.pexels.com/photos/4100679/pexels-photo-4100679.jpeg",
    icon: <HeartHandshake className="text-[#9AC13B]" size={48} />,
  },
  {
    title: "Safe & Supportive Setting",
    description: "A stable environment designed for wellbeing and reassurance.",
    image: "https://images.pexels.com/photos/23496575/pexels-photo-23496575.jpeg",
    icon: <ShieldCheck className="text-[#9AC13B]" size={48} />,
  },
];

  return (
    <section className="py-20 px-24 bg-[#F4F9F9]">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN — TWO LARGE CARDS */}
          <div className="lg:col-span-4 space-y-6">
            <LargeCard {...features[0]} floating />
            <LargeCard {...features[1]} />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* HEADING + PARAGRAPH */}
            <div className="flex flex-col ml-10 gap-4">
              <h2 className="text-4xl md:text-5xl mb-4 font-heading font-medium text-gray-800">
                <span className="text-[#14B8A6]">Why</span> Choose Us ?
              </h2>

              <p className="max-w-3xl text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
                At Prosper Haven, we provide a calm, low-stimulation environment
                supported by a highly trained and compassionate team. Our
                person-centred approach focuses on safety, positive behaviour
                support, and tailored care plans designed around each
                individual’s needs.We work closely with professionals and
                families to promote recovery, independence, and meaningful
                community integration in a stable and supportive setting
              </p>

              <div className="h-px bg-gray-300 w-full"></div>
            </div>

            {/* RIGHT SIDE 2x2 CARDS */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.slice(2).map((item, i) => (
                <SmallCard key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const LargeCard = ({ title, description, image, icon, floating }) => (
  <div className="relative h-[325px] rounded-[28px] overflow-hidden shadow-lg">
    <img src={image} className="absolute inset-0 w-full h-full object-cover" />

    {/* Soft overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>

    {/* White inset panel */}
    <div
      className={`absolute  rounded-2xl p-6  max-w-[85%]
      ${floating ? "top-1/2 left-6 -translate-y-1/2" : "bottom-6 left-6"}`}
    >
      <div className="mb-3">{icon}</div>
      <h3 className="font-heading font-semibold mb-2 text-gray-800 text-xl">
        {title}
      </h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
);

const SmallCard = ({ title, description, image, icon }) => (
  <div className="relative h-[200px] rounded-[24px] overflow-hidden border border-[#E3E6E6]">
    <img src={image} className="absolute inset-0 w-full h-full object-cover" />

    {/* Soft overlay */}
   <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent"></div>

    {/* White inset */}
    <div className="absolute left-6 bottom-6 rounded-xl p-5  max-w-[85%]">
      <div className="mb-2">{icon}</div>
      <h3 className=" font-heading font-semibold text-xl mb-2 text-black">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  </div>
);

export default WhyChooseUs;
