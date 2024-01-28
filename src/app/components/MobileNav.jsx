'use client';
import { useState, useEffect, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const path = usePathname();
  const [isOpen, setOpen] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      item: 'home',
      path: '/',
    },
    {
      item: 'about',
      path: '/about',
    },
    {
      item: 'projects',
      path: '/projects',
    },
    {
      item: 'contact',
      path: '/contact',
    },
  ];
  return (
    <div className="md:hidden flex flex-1" ref={navbarRef}>
      <div className="z-40 ml-auto">
        <Hamburger
          toggled={isOpen}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(!isOpen);
            } else {
              setOpen(false);
            }
          }}
          label="Show menu"
          rounded
        />
      </div>

      <ul
        className={`
         duration-300
         flex-1 absolute w-full left-0 p-6 ${
           isOpen ? 'opacity-100 visible top-16' : 'opacity-0 invisible top-0'
         } bg-slate-700  z-30`}
      >
        {navItems.map((el) => (
          <li
            onClick={() => setOpen(false)}
            className={`${
              path === el.path && 'text-white'
            }  capitalize text-white mb-4 last-of-type:mb-0`}
            key={el.item}
          >
            <Link href={el.path}>{el.item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
