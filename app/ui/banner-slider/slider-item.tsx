'use client';

import Image from 'next/image';
import React from 'react';

// Icons
import { ShareIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import { TSpotlightAnimes } from '@/app/lib/interfaces';
import { useRouter } from 'next/navigation';

export const SliderItem = (props: TSpotlightAnimes) => {
  const router = useRouter();

  return (
    <div className="banner-slider-item banner-h">
      <div className="container">
        <div className="absolute bottom-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center px-16 sm:left-auto sm:w-auto sm:items-start">
          <h1 className="max-w-[400px] text-center text-xl text-white sm:text-start sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl">
            {props.serial.name.uz.length > 50
              ? props.serial.name.uz.slice(0, 50) + '...'
              : props.serial.name.uz}
          </h1>
          <div className="mt-5 flex gap-2">
            <button
              onClick={() => router.push('/' + props._id)}
              className="h-effect btn-normal bg- bg-[var(--green)] text-white"
            >
              Ko'rish
            </button>
            <button className="h-effect btn-icon">
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="repeat-effect"></div>
      <Image
        className="z-10 h-full w-full object-cover object-[70%]"
        src={'https://i.imgur.com/iPdStIc.jpg'}
        width={1000}
        height={500}
        alt="banner"
      />
    </div>
  );
};
