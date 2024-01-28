import React from 'react';
import Heading from '../components/Heading';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: 'Filobater Nader | Contact',
};

const Contact = () => {
  return (
    <div className="text-center">
      <Heading>{`Have a Project in Mind? Let's Talk!`}</Heading>

      <div
        className="flex flex-wrap justify-center items-center gap-4 mt-8"
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <a
          className=" duration-150 flex items-center justify-center gap-2 bg-white hover:bg-slate-200 text-black rounded-3xl p-2 w-[200px] h-[50px] "
          href="mailto:filobaternader@proton.me"
        >
          <MdEmail />
          Email
        </a>
        <a
          className=" duration-150 flex items-center justify-center gap-2 bg-[#0077B5] hover:bg-[#4e9dc8] text-white rounded-3xl p-2 w-[200px] h-[50px] "
          href="https://www.linkedin.com/in/filobater-nader-723887231/"
        >
          <FaLinkedin />
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Contact;
