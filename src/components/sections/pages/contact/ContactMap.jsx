import React from "react";

const ContactMap = () => {
  const address = "58 Park Road East, WV1 4QB, Wolverhampton, United Kingdom";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`;
  
  // Note: For a real production app, an API key is needed. 
  // For quick implementation, we can use the search URL or a standard embed without key if allowed, 
  // but usually it's better to provide a clean iframe container.
  
  return (
    <section className="bg-white py-12 lg:py-10">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="container mx-auto px-6 lg:px-10 mb-10">
  <h2 className="text-3xl lg:text-5xl font-medium text-gray-900">
    Find Us <span className="text-teal-600">Here</span>
  </h2>
  <div className="w-20 h-[3px] bg-teal-500 mt-3 rounded-full" />
</div>
        <div className="relative w-full h-[450px] lg:h-[550px] rounded-[20px] overflow-hidden shadow-2xl shadow-teal-100/30 border border-gray-100">
          <iframe
            title="Office Location"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay card for address (Optional, matches some premium designs) */}
          <div className="absolute bottom-10 left-6 lg:left-12 bg-white p-6 rounded-2xl shadow-xl border border-teal-50 max-w-xs transition-transform hover:-translate-y-1">
            <h4 className="text-teal-600 font-bold mb-2">Our Location</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              58 Park Road East, <br />
              WV1 4QB, Wolverhampton, <br />
              United Kingdom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
