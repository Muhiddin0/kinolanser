'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { data } from '@/data-json';

// *** Types ***
import {
  ChildInterface,
  MovieContent,
  TGlobalCardItem,
} from '@/app/lib/interfaces';

// *** UI ***
import { MovieSection } from '../ui/movie-details/movie-section';

import BackButton from '../ui/common/back.btn';
import clsx from 'clsx';

type Props = {};

const AnimeRetriveClient = (props: Props) => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const id = searchParams.get('id') as string;
  const child = searchParams.get('child') as ChildInterface;
  const seria: number = (Number(searchParams.get('serai')) as number) || 0;

  const content = (data as any)[child][id] as {
    [key: string]: MovieContent;
  };
  const content_key = Object.keys(content)[seria];

  return (
    <>
      <MovieSection content={content[content_key]} />

      <div className="container mt-5">
        <BackButton />
      </div>

      <div className="container flex flex-wrap gap-3">
        {Object.keys(content).map((index, i) => (
          <button
            className={clsx(
              'rounded-md border-2 border-[var(--green)] px-3 py-2 text-center text-xl text-[var(--green)] hover:bg-[var(--green)] hover:text-white',
              {
                'bg-[var(--green)] text-white': i === seria - 1,
              },
            )}
            key={i}
            onClick={() => {
              route.push(pathname + `?id=${id}&child=${child}&serai=${++i}`);
            }}
          >
            {++i}
          </button>
        ))}
      </div>

      {/* {anime?.data.seria ? <Season sessions={anime?.data.seria} /> : null} */}
      {/* <MovieInfo anime={anime} /> */}
    </>
  );
};

export default AnimeRetriveClient;
