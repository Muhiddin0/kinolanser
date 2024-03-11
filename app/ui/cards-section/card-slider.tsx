'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Card } from '../card';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { TGlobalCardItem } from '@/app/lib/interfaces';
import { SkeletionLoadinCard } from '../skeletion-loading-card';

type Props = {
  title: string;
  items: {
    [key: string]: TGlobalCardItem;
  };
};

export const CardSlider = ({ items, title }: Props) => {
  return (
    <section>
      <div className="container !pt-12">
        <div className="w-full">
          <Link
            className="my-3 inline-flex w-auto items-center justify-start gap-2 text-2xl text-white transition-all hover:opacity-75"
            href={'/'}
          >
            <span>{title}</span>
            <ChevronRightIcon width={25} />
          </Link>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            768: {
              width: 600,
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              width: 900,
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              width: 1100,
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1536: {
              width: 1410,
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="!pb-12"
        >
          {Object.keys(items).map((index) => (
            <SwiperSlide
              key={items[index].id}
              className="!flex items-center justify-center"
            >
              <Card {...items[index]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
