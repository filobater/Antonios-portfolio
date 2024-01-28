import React from 'react';
import { SlCalender } from 'react-icons/sl';

const Exp = ({
  title,
  description,
  startMonth,
  startYear,
  endMonth,
  endYear,
}) => {
  return (
    <div className=" pb-8 border-b mb-8 gap-4">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex flex-wrap gap-4 items-center justify-between"
      >
        <h3 className="font-semibold  md:text-[1.5rem] capitalize mb-2 ">
          {title}
        </h3>
        <div className="flex items-baseline gap-2 capitalize text-[#a7a7a7]">
          <SlCalender /> {startMonth} {startYear} - {endMonth} {endYear}
        </div>
      </div>
      <p
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="leading-relaxed text-slate-300"
      >
        {description}
      </p>
    </div>
  );
};

export default Exp;
