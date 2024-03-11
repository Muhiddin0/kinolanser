'use client';

// *** Types ***
import { Metadata } from 'next';

// *** UI ***
import { BannerSlider } from './ui/banner-slider/banner-slider';
import { CardSlider } from './ui/cards-section/card-slider';
import { useGlobalContext } from './lib/Context/store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { category } from './lib/api.datas';
import { TGlobalCardItem } from './lib/interfaces';

// local data
import { data } from '@/data-json';

export default function PageClient() {
  return (
    <>
      <BannerSlider />
      <CardSlider title="SERIALTURKIYA" items={data['SERIALTURKIYA']} />
      <CardSlider title="SERIALKOREA" items={data['SERIALKOREA']} />
      <CardSlider title="SERIAL" items={data['SERIAL']} />
      <CardSlider title="MULTISERIAL" items={data['MULTISERIAL']} />
    </>
  );
}
