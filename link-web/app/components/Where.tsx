"use client";

const Where = () => {
  return (
    <section 
      id="where" 
      className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-normal mb-12 text-center tracking-tight">
          Каде сме?
        </h2>

        {/* Map Container */}
        <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-[40px] border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.417244588975!2d21.332822776566866!3d41.02709241819381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135725dc82df7be7%3A0xaf16ac2d7fdb775a!2sLINKESTI!5e0!3m2!1sen!2smk!4v1716382000000!5m2!1sen!2smk"
            width="100%"
            height="100%"
            style={{ border: 0 }} // Removed the dark mode filter
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Linkesti Location Map"
            className="" // Removed grayscale
          />
        </div>

        {/* Address text */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-lg md:text-xl font-light">
            Посетете нè во срцето на Битола
          </p>
        </div>

      </div>
    </section>
  );
};

export default Where;