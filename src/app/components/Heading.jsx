import React from 'react';

const Heading = ({ children }) => {
  return (
    <h2
    data-aos-duration="1200"
      data-aos="fade-down"
      className="font-bold text-[1.5rem] md:text-[2.5rem] text-center capitalize mb-3 text-[#ccc]"
    >
      {children}
    </h2>
  );
};

export default Heading;
