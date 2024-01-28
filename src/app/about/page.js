import React from 'react';
import AboutHeading from '../components/AboutHeading';
import Exp from '../components/Exp';

export const metadata = {
  title: 'Filobater Nader | About',
};

const About = () => {
  const experiences = [
    {
      title: 'ERP-system',
      description: `Designed with code and develop a highly functional and
        responsive system using Next.js and Tailwind CSS. 
        crafted visually compelling and interactive charts that
        transformed raw data into actionable insights, and that
        helped in view the recent sales made.`,
      startMonth: 'Nov',
      startYear: '2023',
      endMonth: 'jan',
      endYear: '2024',
    },
    {
      title: 'ORO Dashboard',
      description: `I built this dashboard using next js and tailwind css and
      some technologies like react query and react formik. I
      managed to do all the CRUD operations, made different
      routes specific to each role and made it fully responsive.`,
      startMonth: '4-5',
      startYear: '2023',
      endMonth: '15-5',
      endYear: '2023',
    },
    {
      title: 'GASB',
      description: `I built this website for gasb conference 2023
      using next js and bootstrap 5 with fully responsive.`,
      startMonth: '15-2',
      startYear: '2023',
      endMonth: '20-2',
      endYear: '2023',
    },
    {
      title: 'Luveina',
      description: `Refactored the code and built the new port-view.`,
      startMonth: 'Nov',
      startYear: '2022',
      endMonth: 'jan',
      endYear: '2023',
    },
    {
      title: 'UI developer / Seay news',
      description: `Implemented the Ui pages using HTML and CSS with a
      great 
      responsive.`,
      startMonth: 'Apr',
      startYear: '2021',
      endMonth: 'may',
      endYear: '2021',
    },
  ];

  return (
    <div className="lg:w-1/2">
      <div className="about mb-8 pb-8 border-b">
        <AboutHeading>About me</AboutHeading>
        <p
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" leading-relaxed text-[#dad9d9]"
        >
          {`The web is my playground, and Next.js is my rocket ship. As a frontend
          developer, I'm constantly pushing the boundaries of what's possible,
          crafting innovative user interfaces and interactive experiences that
          bring websites to life. I'm a firm believer in the power of code to
          not only solve problems but also delight users. My expertise lies in
          leveraging Next.js's cutting-edge features like server-side rendering,
          data fetching, and code-splitting to deliver high-performance,
          SEO-friendly web applications. In my free time, I'm an avid learner,
          always keeping up with the latest web technologies and frameworks.`}
        </p>
      </div>
      <div className="work-exp mb-8">
        <AboutHeading>work experience</AboutHeading>
        {experiences.map((exp) => (
          <Exp
            key={exp.title}
            title={exp.title}
            description={exp.description}
            startMonth={exp.startMonth}
            startYear={exp.startYear}
            endMonth={exp.endMonth}
            endYear={exp.endYear}
          />
        ))}
      </div>
      <div className="education">
        <AboutHeading>education</AboutHeading>
        <Exp
          title={'Faculty of Al-Alsun'}
          description={`Ain-Shams University`}
          startYear={2021}
          endYear={2025}
        />
      </div>
    </div>
  );
};

export default About;
