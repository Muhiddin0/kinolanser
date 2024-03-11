import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Swiprer js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import axios from 'axios';

// Slider item
import { SliderItem } from './slider-item';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useGlobalContext } from '@/app/lib/Context/store';

type Props = {};

export const SliderForBanner = (props: Props) => {
  const { spotlightAnimes } = useGlobalContext();

  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      pagination={{
        el: '.swiper-pagination',
        type: 'custom',
        clickable: true,
      }}
      className="banner-h"
    >
      {spotlightAnimes.map((item) => (
        <SwiperSlide key={item._id}>
          <SliderItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
