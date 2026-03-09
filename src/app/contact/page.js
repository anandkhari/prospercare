import PageHero from "@/components/sections/global/PageHero";
import ContactSection from "@/components/sections/pages/contact/ContactSection";
import ContactMap from "@/components/sections/pages/contact/ContactMap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  return (
    <>
    <Navbar />
      <PageHero
      currentPage="Contact Us" />
      
      <ContactSection />
      
      {/* Location Map Section */}
      <ContactMap />

      <Footer />
    </>
  );
};

export default ContactPage;
