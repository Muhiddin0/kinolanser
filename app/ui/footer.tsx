import Link from 'next/link';
import React from 'react';

import { FaInstagram } from 'react-icons/fa';
import { LiaTelegram } from 'react-icons/lia';
import { FiYoutube } from 'react-icons/fi';
import { TbBrandTiktok } from 'react-icons/tb';
import Image from 'next/image';

import pmarket from '@/assets/play-market.svg';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="bg-[var(--gray)]">
      <div className="container !pb-4 !pt-6">
        <div className="my-3 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <ul className="text-[var(--slow-white)]">
              <li className="h-effect text-white">Header</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <ul className="text-[var(--slow-white)]">
              <li className="h-effect text-white">Header</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <ul className="text-[var(--slow-white)]">
              <li className="h-effect text-white">Header</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <ul className="text-[var(--slow-white)]">
              <li className="h-effect text-white">Header</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
            <Link
              className="h-effect flex h-[60px] items-center justify-center rounded-md bg-[var(--gray-white)] p-4"
              href={'/app'}
            >
              <Image src={pmarket} alt="" />
            </Link>
            <Link
              className="h-effect flex h-[60px] items-center justify-center rounded-md bg-[var(--gray-white)] p-4"
              href={'/app'}
            >
              <Image src={pmarket} alt="" />
            </Link>
            <Link
              className="h-effect flex h-[60px] items-center justify-center rounded-md bg-[var(--gray-white)] p-4"
              href={'/app'}
            >
              <Image src={pmarket} alt="" />
            </Link>
          </div>
        </div>

        <div>
          <b className="text-xl font-bold text-white">Ijtimoiy tarmoqlar</b>
          <div className="mt-2 flex gap-2">
            <Link className="btn-icon h-effect" href={'/'}>
              <FaInstagram size={25} />
            </Link>
            <Link className="btn-icon h-effect" href={'/'}>
              <LiaTelegram size={25} />
            </Link>
            <Link className="btn-icon h-effect" href={'/'}>
              <FiYoutube size={25} />
            </Link>
            <Link className="btn-icon h-effect" href={'/'}>
              <TbBrandTiktok size={25} />
            </Link>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[var(--slow-white)]">
          <p>
            © "ITV" interaktiv televideniyesi. Barcha huquqlar himoyalangan.
            2024 v1.15.2
          </p>
          <div className="flex gap-3 ">
            <Link className="transition-all hover:text-white" href={'/'}>
              Русский
            </Link>
            <Link className="transition-all hover:text-white" href={'/'}>
              O’zbekcha
            </Link>
            <Link className="transition-all hover:text-white" href={'/'}>
              English
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-[var(--slow-white)]">
          <Link className="transition-all hover:text-white" href={'/'}>
            Пользовательское соглашение
          </Link>
          <Link className="transition-all hover:text-white" href={'/'}>
            Пользовательское соглашение
          </Link>
        </div>
      </div>
    </footer>
  );
};
