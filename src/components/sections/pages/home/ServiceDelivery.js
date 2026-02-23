"use client";
import React, { useRef, useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";

const ServiceDelivery = () => {
  const sectionRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const services = [
    {
      id: "01",
      title: "Person-Centered Care Planning",
      desc: "Individualised care plans created through collaborative assessments with residents and healthcare professionals.",
    },
    {
      id: "02",
      title: "Therapeutic Interventions",
      desc: "Evidence-based therapies including CBT, occupational therapy and creative therapies.",
    },
    {
      id: "03",
      title: "Innovative Technologies",
      desc: "Assistive tools and virtual reality experiences enhancing independence and engagement.",
    },
    {
      id: "04",
      title: "Sensory & Wellbeing Activities",
      desc: "Sensory rooms, aromatherapy and calming therapies creating a supportive environment.",
    },
    {
      id: "05",
      title: "Daily Engagement & Life Skills",
      desc: "Structured activities promoting independence, social connection and confidence.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1714976694265-c15c74ac517d?q=80&w=1332&auto=format&fit=crop"
                alt="Service delivery"
                className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover"
              />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-medium text-gray-900 leading-tight">
                Service Delivery
              </h2>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                At PCS, high-quality care is delivered through person-centred
                planning, therapeutic interventions, sensory activities and
                innovative technologies designed to promote independence and wellbeing.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 bg-[#14B8A6] hover:bg-[#0D9488] text-white px-5 md:px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-all shadow-sm">
              Book a Visit
            </button>
          </div>

          {/* CENTER SCROLL BAR */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="relative w-[2px] bg-[#14B8A6]/20 rounded-full h-[400px] mt-6">
              <motion.div
                style={{ scaleY: isLargeScreen ? scaleY : 0 }}
                className="absolute inset-0 bg-[#14B8A6] rounded-full origin-top"
              />
            </div>
          </div>

          {/* RIGHT SERVICES STACK */}
          <div className="lg:col-span-6 space-y-4 md:space-y-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="p-4 md:p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#F1F5F9]">
                    <span className="text-[#14B8A6] text-sm md:text-base font-semibold">
                      {service.id}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base md:text-lg font-heading font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-xs md:text-sm leading-relaxed text-gray-500">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ServiceDelivery;