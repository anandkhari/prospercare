import Hero from '@/components/sections/global/Hero';
import AboutHome from '@/components/sections/pages/home/AboutHome';
import ServiceDelivery from '@/components/sections/pages/home/ServiceDelivery';
import WhyChooseUs from '@/components/sections/global/WhyChooseUs';
import FAQ from '@/components/sections/global/FAQ';
import ContactForm from '@/components/sections/global/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutHome />
      <ServiceDelivery />
      <WhyChooseUs />
      <FAQ />
      <ContactForm />
    </main>
  );
}
