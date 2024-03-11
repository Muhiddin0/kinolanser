'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';

// Icons
import { ShareIcon } from '@heroicons/react/24/outline';

import logo from '@/assets/logo.png';

import {
  AnimeRetriveResponse,
  MovieContent,
  TGlobalCardItem,
} from '@/app/lib/interfaces';
import Video from 'next-video';

type Props = {};

export const MovieSection = ({ content }: { content: MovieContent }) => {
  const [videoIsOpen, setVideoIsOpen] = useState<boolean>(false);
  const [posterVideoIsLoad, SetPosterVideoIsLoad] = useState<boolean>(false);

  return (
    <section className="">
      <div className="mx-auto w-full text-white">
        {true ? (
          <div className="w-full overflow-auto">
            <Video
              className="banner-h overflow-hidden"
              src="https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"
            />
          </div>
        ) : (
          <div className="banner-slider-item banner-h">
            <div className="container">
              <div className="absolute left-0 z-20 flex h-full w-full flex-col items-center justify-center px-16 sm:left-auto sm:w-auto sm:items-start"></div>
              <div className="absolute left-0 z-20 flex h-full w-full flex-col items-center justify-center px-16 sm:left-auto sm:w-auto sm:items-start">
                {/* <h1 className="max-w-[400px] text-center text-xl text-white sm:text-start sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-4xl">
                  {anime?.data.name.uz}
                </h1>
                <div className="mt-10 flex max-w-[400px] flex-wrap gap-2 text-center text-white drop-shadow-2xl sm:text-start">
                  {anime?.data.category.map(({ nameuz, _id }) => (
                    <span className="text-sm" key={_id}>
                      {nameuz}
                    </span>
                  ))}
                </div> */}
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => setVideoIsOpen(!videoIsOpen)}
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

            <div className="repeat-effect">
              {!posterVideoIsLoad && (
                <div className="banner-h absolute top-0 z-10 flex w-full items-center justify-center">
                  <Image src={logo} width={300} height={300} alt="banner" />
                </div>
              )}
            </div>

            <video
              className="z-10 h-full w-full object-cover"
              onPlay={() => SetPosterVideoIsLoad(true)}
              autoPlay
              muted
              src={
                'https://api.citrusfiles.com/api/files/public_files/9zc7wh8eghkufs0/shape_of_you_amv_mix_anime_mix_uqalPFh1lL.mp4'
              }
            ></video>
          </div>
        )}
      </div>
    </section>
  );
};
