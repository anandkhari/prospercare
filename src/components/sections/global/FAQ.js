"use client";

import React, { useState } from 'react';
import Container from '@/components/ui/Container';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who is Prosper Haven suitable for?",
      answer:
        "Prosper Haven is a specialist residential support home designed for adults with complex mental health and behavioural needs who require a safe, structured, and therapeutic environment to rebuild confidence and independence.",
    },
    {
      question: "What type of support does Prosper Haven provide?",
      answer:
        "We provide person-centred residential support, positive behaviour guidance, daily living assistance, and therapeutic interventions focused on long-term recovery, wellbeing, and independent living skills.",
    },
    {
      question: "How does Prosper Haven promote independent living?",
      answer:
        "Our team encourages decision-making, life-skills development, and community engagement through personalised care plans that help residents gradually build confidence and transition toward greater independence.",
    },
    {
      question: "Is Prosper Haven suitable for individuals stepping down from hospital or secure settings?",
      answer:
        "Yes. Our low-stimulation, highly supportive environment is ideal for individuals transitioning from more restrictive settings, providing structured rehabilitation and stability during recovery.",
    },
    {
      question: "Do you work with Local Authorities and healthcare professionals?",
      answer:
        "We collaborate closely with Local Authorities, Integrated Care Boards, clinicians, and families to ensure each placement meets specific clinical, social, and safeguarding requirements.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 md:px-10 lg:px-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - FAQ Accordion */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10">
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-gray-800 leading-tight">
              Prosper Care Solutions <span className="text-[#14B8A6]">FAQ ?</span>
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 last:border-0 pb-2">
                  <button  
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between py-4 text-left group transition-all"
                  >
                    <span className={`text-base md:text-lg font-heading font-medium transition-colors pr-4 ${
                      openIndex === index ? 'text-[#14B8A6]' : 'text-gray-700 group-hover:text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index ? 'bg-[#14B8A6] rotate-180' : 'bg-gray-50'
                    }`}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke={openIndex === index ? '#fff' : '#475569'} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[300px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-sm md:text-base text-gray-600 font-sans leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hidden on Mobile, Visible on Desktop */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative z-10 rounded-[30px] overflow-hidden shadow-2xl border-white">
              <img 
                src="https://images.pexels.com/photos/7682211/pexels-photo-7682211.jpeg" 
                alt="Support agent" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-lime-50 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default FAQ;