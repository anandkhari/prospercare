"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserCheck,
  Heart,
  Stethoscope,
  Lightbulb,
  Smile,
} from "lucide-react";

const ValueItem = ({ item, index, isSelected, onSelect }) => {
  const Icon = item.icon;

  return (
    <div
      onClick={onSelect}
      className="group relative cursor-pointer"
    >
      {/* SOFT HEALTHCARE HOVER GRADIENT */}
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500
        ${
          isSelected
            ? "opacity-100 bg-gradient-to-r from-[#edf6ef] via-[#edf6ef]/40 to-transparent"
            : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#edf6ef]/60 via-[#edf6ef]/20 to-transparent"
        }`}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 relative">

          {/* LEFT SIDE */}
          <div className="flex items-start gap-6 lg:w-1/3 relative">

            {/* INDICATOR BOX */}
           <motion.div
  whileHover={{ scale: 1.08 }}
  animate={{
    borderWidth: isSelected ? 4 : 2,
    scale: isSelected ? 1.08 : 1,
  }}
  transition={{ type: "spring", stiffness: 260, damping: 18 }}
  className={`hidden lg:block mt-4 w-7 h-5 bg-white border-teal-500 rounded-md flex-shrink-0 z-10
  ${
    isSelected
      ? "shadow-[0_0_0_4px_rgba(20,184,166,0.12)]"
      : ""
  }`}
/>

            {/* ICON CIRCLE */}
            <div
              className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-white transition-all duration-300
              ${
                isSelected
                  ? "bg-[#e8f3ea]"
                  : "bg-[#f4f8f4] group-hover:bg-[#e8f3ea]"
              }`}
            >
              <Icon className="w-8 h-8 lg:w-9 lg:h-9 text-gray-700 stroke-[1.5]" />
            </div>

            {/* TITLE */}
            <h4
              className={`text-xl lg:text-2xl font-semibold leading-tight pt-2 transition-colors duration-300
              ${isSelected ? "text-teal-700" : "text-gray-800"}`}
            >
              {item.title}
            </h4>
          </div>

          {/* RIGHT SIDE TEXT */}
          <div className="lg:w-2/3 lg:pt-2">
            <p className="text-gray-600 leading-relaxed text-[15px] lg:text-base max-w-2xl">
              {item.description}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

const OurValues = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const values = [
    {
      title: "Promoting Independence",
      icon: UserCheck,
      description:
        "We empower young people to build independence through personalised care plans, encouraging decision-making, goal-setting, and active participation in their daily lives.",
    },
    {
      title: "Empathy & Kindness",
      icon: Heart,
      description:
        "We create a nurturing environment where every individual feels heard, valued, and supported. Our team responds with compassion, understanding, and genuine care.",
    },
    {
      title: "Therapeutic Support",
      icon: Stethoscope,
      description:
        "We provide tailored, evidence-based therapeutic approaches — including CBT and sensory-focused support — to promote emotional wellbeing and personal growth.",
    },
    {
      title: "Innovative Approaches",
      icon: Lightbulb,
      description:
        "We embrace forward-thinking solutions, using assistive technology and modern tools to enhance development, engagement, and independence.",
    },
    {
      title: "Normalising Life Experiences",
      icon: Smile,
      description:
        "We encourage inclusion and everyday participation, helping individuals overcome challenges and experience fulfilling, meaningful lives.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      {/* HEADER */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl mb-12">
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl text-gray-900 font-medium">
            Our <span className="text-teal-600">Values</span>
          </h2>
          <div className="h-[3px] bg-teal-500 mt-4 w-full" />
        </div>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative">
        {/* VERTICAL LINE */}
        <div className="absolute left-[calc(1.5rem+13px)] lg:left-[calc(3rem+13px)] top-0 bottom-0 w-[1px] bg-gray-100" />

        {values.map((item, index) => (
          <ValueItem
            key={index}
            item={item}
            index={index}
            isSelected={selectedIndex === index}
            onSelect={() => setSelectedIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default OurValues;