import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ src, title, description, tech, link, code }) => {
  return (
    <div
      data-aos="zoom-in "
      data-aos-duration="1200"
      className="w-[21rem] bg-[#262626] pb-6 rounded-lg mt-10 m-auto"
      style={{ boxShadow: `2px 2px 100px 0px rgba(0, 0, 0, 0.20)` }}
    >
      <Image
        src={src}
        width={500}
        height={500}
        className="w-full h-[14rem] rounded-t-lg object-cover"
        alt={title}
      />
      <div className="px-6">
        <h3 className=" capitalize text-center text-[#CCCCCC] font-semibold my-4 text-[1.5rem]">
          {title}
        </h3>
        <p className="text-[#CCCCCC] text-sm mb-3">{description}</p>
        <p className="text-sm capitalize text-[#ffffff] mb-3">
          Tech Stack: {tech}
        </p>
        <div className="flex gap-4 justify-between items-center ">
          <a
            target="_blank"
            className="text-white flex gap-2 items-center"
            href={link}
          >
            <FaLink /> <span className="underline">Live Preview</span>
          </a>

          <a
            target="_blank"
            className="text-white flex gap-2 items-center"
            href={code}
          >
            <FaGithub /> <span className="underline"> View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
