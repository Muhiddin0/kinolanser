'use client';

import React, { useState } from 'react';

import { TbFilterSearch } from 'react-icons/tb';
import { CiSearch } from 'react-icons/ci';
import { Chechbox } from '../common/checkbox';
import clsx from 'clsx';

type Props = {};

export const SearchingHeader = (props: Props) => {
  const genres = [
    'Psixologik',
    'Sport',
    'Garem',
    'Etti',
    'Super kuch',
    'Mexa',
    'Komediya',
    'Tarixiy',
    'Fantastika',
    'Qoʻrqinchli',
    'Ekshen',
    'Syonen',
    'Sarguzasht',
    'Drama',
    'Fantaziya',
    'Harbiy',
    'Romantika',
    'Syodze',
    'Gʻayrioddiy',
    'Musiqiy',
    'Maktab',
    'Kundalik hayot',
    'Detektiv',
    'Oʻzga Dunyo',
    'Triller',
    'Sehr',
    'Oʻyinlar',
    'Tragediya',
    "Jang san'ati",
    'Shantaj',
    'Ish',
    'Kosmos',
    'Mashinalar',
    'Iblislar',
    'Bolalar uchun',
  ];

  const categorys = ['ongoing animelar', 'anime filmlar', 'barcha animelar'];
  const status = ['ongoing', 'finished', 'rejected', 'anons'];
  const [filterIsOpen, setFilterIsOpen] = useState(false);

  return (
    <>
      <form>
        <label
          className="relative flex h-[40px] w-full items-center gap-4"
          htmlFor=""
        >
          <button
            type="button"
            className="flex gap-3 rounded-lg bg-[var(--gray)] p-3"
            onClick={() => {
              setFilterIsOpen(!filterIsOpen);
            }}
          >
            <TbFilterSearch size={25} />
            Filter
          </button>
          <input
            className="h-full w-full rounded-full bg-[var(--gray)]"
            type="text"
            placeholder="searching..."
          />
          <button className="absolute right-[4px] flex h-[40px] w-[40px] items-center justify-center rounded-full">
            <CiSearch size={24} strokeWidth={2} />
          </button>
        </label>
      </form>

      <div
        className={clsx('', {
          block: filterIsOpen,
          hidden: !filterIsOpen,
        })}
      >
        <div className="mt-5 grid grid-cols-3 max-[624px]:grid-cols-2">
          <h1 className="col-span-full text-lg">Categorys</h1>
          {categorys.map((item) => (
            <Chechbox item={item} key={item} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 max-[624px]:grid-cols-2">
          <h1 className="col-span-full text-lg">Status</h1>
          {status.map((item) => (
            <Chechbox item={item} key={item} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 max-[624px]:grid-cols-2">
          <h1 className="col-span-full text-lg">Genres</h1>
          {genres.map((item) => (
            <Chechbox item={item} key={item} />
          ))}
        </div>
      </div>
    </>
  );
};
