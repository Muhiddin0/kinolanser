import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaRegCirclePlay } from 'react-icons/fa6';
import { TGlobalCardItem } from '../lib/interfaces';

export const Card = (props: TGlobalCardItem) => {
  const movie_link = '/movie?id=' + props.id + '&child=' + props.child;

  return (
    <div className="card flex w-full flex-col gap-2">
      <Link href={movie_link} className="">
        <div className="img-box overflow-hidden rounded-md">
          {props.age ? (
            <span className="absolute right-3 top-3 z-20 rounded-md p-2 backdrop-blur-md">
              +{props.age}
            </span>
          ) : null}
          <Image
            width={150}
            height={220}
            className="h-[200px] w-full object-cover md:h-[270px] lg:h-[340px]"
            src={props.img}
            alt="img"
          />
          <div className="infos absolute left-0 top-0 z-10 flex h-full w-full items-end justify-start bg-[var(--transparent)] p-4">
            <FaRegCirclePlay
              size={50}
              className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-70%] text-white backdrop:blur-lg"
            />
            <p className="text-sm">{props.genre}</p>
          </div>
        </div>
      </Link>
      <div className="bottom-0 left-0 flex flex-col">
        <Link
          href={movie_link}
          className=" text-md overflow-hidden font-extrabold text-white"
        >
          {props.title.length < 20
            ? props.title
            : props.title.slice(0, 20) + '...'}
          <div>{props.year}</div>
        </Link>
      </div>
    </div>
  );
};
