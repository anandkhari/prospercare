import PageHero from "@/components/sections/global/PageHero";
import ContactSection from "@/components/sections/pages/contact/ContactSection";
import ContactMap from "@/components/sections/pages/contact/ContactMap";

const ContactPage = () => {
  return (
    <>
      <PageHero
        title="Contact us"
        bgImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
      />
      
      <ContactSection />
      
      {/* Location Map Section */}
      <ContactMap />
    </>
  );
};

export default ContactPage;
