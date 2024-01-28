'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Welcome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
      <div
        className="left md:basis-1/2 lg:flex-1"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <p className="text-3xl md:text-5xl font-semibold text-center md:text-left lg:w-1/2 md:leading-normal	">
          Hi 👋, My name is
          <span className="my-name"> Antonious </span>I build things for web
        </p>
      </div>
      <div className="right" data-aos="fade-left" data-aos-duration="800">
        <Image
          className="rounded-full"
          src={'/tony.jpg'}
          alt="tony"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Welcome;
