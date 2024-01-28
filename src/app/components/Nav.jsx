'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import MobileNav from './MobileNav';

const Nav = () => {
  const path = usePathname();

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
    <nav className=" flex items-center justify-between mb-32">
      <h1 className="font-semibold capitalize text-lg">
        <Link href={'/'}>filobater</Link>
      </h1>
      <MobileNav />
      <ul className="md:flex hidden gap-4">
        {navItems.map((el) => (
          <li
            className={`${
              path === el.path && 'text-white'
            } duration-150 text-[#a7a7a7] capitalize hover:text-white`}
            key={el.item}
          >
            <Link href={el.path}>{el.item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
