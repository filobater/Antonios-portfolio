import React from 'react';
import { FaGithub, FaPortrait } from 'react-icons/fa';

const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center items-center">
      <a
        className="flex items-center justify-center gap-2 bg-white hover:bg-slate-200 rounded-3xl p-2 w-[200px] h-[50px] text-black"
        href="https://github.com/TonyBuffon"
        target="_blank"
      >
        Github <FaGithub />
      </a>
      <a
        href="/tony.pdf"
        download
        className=" capitalize duration-200 flex gap-2 items-center justify-center hover:text-black hover:bg-white text-slate-800 text-sm bg-slate-400 rounded-3xl p-2 w-[200px] h-[50px]"
      >
        Download my resume <FaPortrait />
      </a>
    </div>
  );
};

export default Buttons;
