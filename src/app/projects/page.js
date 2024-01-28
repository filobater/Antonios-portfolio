import React from 'react';
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import ProjectCard from '../components/ProjectCard';

export const metadata = {
  title: 'Filobater Nader | Projects',
};

const Projects = () => {
  const projects = [
    {
      title: 'Ecommerce',
      description:
        'Blazing-fast e-commerce built with Next.js for server-side magic.  React Query keeps my data fresh, while Tailwind styles paint a beautiful site. ✨ Shop with confidence, crafted for performance and perfection.',
      src: '/ecommerce.png',
      link: 'https://ecommerce-next-ecru.vercel.app/',
      code: 'https://github.com/filobater/ecommerce-next',
      tech: 'next js, tailwind, firebase, react query',
    },
    {
      title: 'Movies',
      description: `Lights, camera, action! Next.js directs a cinematic experience, styled with Tailwind's creativity.
          Explore a world of movies, seamlessly delivered with server-side rendering and pixel-perfect design.
          Discover your next favorite film, in a show-stopping performance of speed and visual delight.`,
      src: '/movies.png',
      link: 'https://movies-with-next.vercel.app/',
      code: 'https://github.com/filobater/Movies-with-next',
      tech: 'Next js, Tailwind',
    },
    {
      title: 'Countries',
      description: `Explore a world of countries, powered by React's dynamic nature and Redux's state management. ️ Dive deep into immersive country profiles, seamlessly organized and effortlessly updated. ✨ Discover a global experience that's as interconnected as the world itself`,
      src: '/countries.png',
      link: 'https://countries-with-react-three.vercel.app',
      code: 'https://github.com/filobater/countries-with-react',
      tech: 'react js, redux, react router dom',
    },

    {
      title: 'Todo app',
      description: `Taming tasks with vanilla JS mastery, conquering Frontend Mentor's todo challenge.
        Creating a seamless experience from scratch, showcasing core JavaScript skills.
        No frameworks, just pure JS prowess, ready to take on real-world projects.`,
      src: '/todo.png',
      link: 'https://filobater.github.io/todo-app/',
      code: 'https://github.com/filobater/todo-app',
      tech: 'html, css, js',
    },
    {
      title: 'Loop studio',
      description: `Mastering Bootstrap 5 through Frontend Mentor's challenges, crafting captivating landing pages that showcase my skills.

        `,
      src: '/loop.png',
      link: 'loopstudios-boots5.netlify.app/',
      code: 'https://github.com/filobater/loopstudios-boots5',
      tech: 'html, css, bootstrap5',
    },
  ];

  return (
    <div>
      <Heading>Projects</Heading>
      <SubHeading>Things I’ve recently build</SubHeading>

      <div className="flex flex-wrap gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            src={project.src}
            link={project.link}
            code={project.code}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
