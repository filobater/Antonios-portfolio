import React from 'react';

const AboutHeading = ({ children }) => {
  return (
    <h2
      data-aos="fade-right"
      data-aos-duration="1000"
      className="font-semibold text-[2rem] md:text-[3rem] text-[#868eff] mb-2 capitalize"
    >
      {children}
    </h2>
  );
};

export default AboutHeading;
