'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Logo } from '../common/logo';
import { navbarItems } from './navbar.items';
import Link from 'next/link';

import { MenuButton } from '../button';
import {
  MagnifyingGlassIcon,
  ArrowRightCircleIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

import { GrNotification } from 'react-icons/gr';

type Props = {};

export const Header = (props: Props) => {
  const navRef = useRef<HTMLDivElement>(null);

  function NavToggle() {
    navRef.current?.classList.toggle('active');
  }

  const headerRef = useRef<HTMLHeadElement>(null);

  const onScroll = useCallback(() => {
    const { scrollY } = window;

    scrollY > 10
      ? headerRef.current?.classList.add('active')
      : headerRef.current?.classList.remove('active');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full">
      <div className="container flex flex-wrap items-center justify-between gap-3 !py-3">
        <div className="flex items-center justify-between gap-2 sm:w-auto lg:justify-center lg:gap-9">
          <button onClick={NavToggle} className="btn-icon lg:!hidden">
            <Bars3Icon />
          </button>

          <Logo />
          <nav
            ref={navRef}
            className="fixed left-0 top-0 z-40 flex h-full w-full self-start lg:static lg:self-end lg:bg-transparent"
          >
            <ul className="flex h-full w-[300px] flex-col items-center gap-4 bg-black p-6 lg:w-auto lg:flex-row lg:bg-transparent lg:p-0">
              <li className="flex w-full items-center justify-end lg:!hidden">
                <button onClick={NavToggle} className="btn-icon self-end">
                  <Bars3Icon />
                </button>
              </li>
              <li className="flex items-center justify-center lg:hidden">
                <div className="h-[60px] w-[60px] rounded-full bg-red-400"></div>
              </li>
              <li className="block w-full lg:hidden">
                <Link
                  className="relative flex w-full items-center gap-3 text-white"
                  href={'/messages'}
                >
                  <span className="f-center absolute -top-2 left-2 h-[20px] w-[20px] rounded-full bg-red-500 text-sm">
                    3
                  </span>
                  <GrNotification size={16} />
                  Xabarlar
                </Link>
              </li>
              {navbarItems.map((item) => (
                <li className="self-start lg:self-end" key={item.id}>
                  <Link
                    className="text-[var(--slow-white)] transition-colors hover:text-white"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-full flex-grow-[2]" onClick={NavToggle}></div>
          </nav>
        </div>

        <div className="flex gap-2">
          <MenuButton
            dropitem={
              <ul className="flex flex-col gap-4">
                <li>O'zbekcha</li>
                <li>English</li>
                <li>Русский</li>
              </ul>
            }
          >
            UZ
          </MenuButton>
          <Link className="btn-icon" href={'/search'}>
            <MagnifyingGlassIcon />
          </Link>
          <Link className="btn-icon max-[1024px]:!hidden" href={'/messages'}>
            <GrNotification />
          </Link>
          <Link className="btn-icon max-[1024px]:!hidden" href={'/login'}>
            <ArrowRightCircleIcon />
          </Link>
        </div>
      </div>
    </header>
  );
};
