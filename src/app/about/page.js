import React from 'react';
import AboutHeading from '../components/AboutHeading';
import Exp from '../components/Exp';

export const metadata = {
  title: 'Antonious | About',
};

const About = () => {
  const experiences = [
    {
      title: `Backend Engineer @ Poly.Codes
      `,
      description: `Worked with talented people who gave me most of the experience that I had today, I took responsibility for more than the backend tasks like client handling and project management, I designed and implemented many features in our products and apps and now we focused on creating our products.
      `,
      startMonth: 'jan',
      startYear: '2021',

      endYear: 'present',
    },
    {
      title: `Backend Team Lead @ HELPOO
      `,
      description: `I lead the backend team in the revamping process to improve performance and stability, added more features after that and carried the backend`,
      startMonth: 'sep',
      startYear: '2022',

      endYear: 'present',
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
          {`Backend Engineer with +3 years of experience, took the lead for the backend team several times and passion about learning about everything`}
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
          title={'faculty of Science'}
          description={`Cairo University`}
          startYear={2021}
          endYear={2025}
        />
      </div>
    </div>
  );
};

export default About;
