import React from 'react';

const SubHeading = ({ children }) => {
  return (
    <h3
      data-aos-duration="1200"
      data-aos="fade-right"
      className="text-[#A7A7A7] md:text-[1.5rem] text-center"
    >
      {children}
    </h3>
  );
};

export default SubHeading;
