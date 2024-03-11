import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { Button } from '../button';

import poster from '@/assets/poster.jpg';
import { Seria } from '@/app/lib/interfaces';

type Props = {
  sessions: Seria[];
};

export const Season = ({ sessions }: Props) => {
  const [activeSeason, setActiveSeason] = useState<number>(1);

  return (
    <section>
      <div className="container mt-8">
        <ul className="flex items-center gap-3">
          <li className="font-bold text-[var(--slow-white)]">Fasillar:</li>
          <li>
            <Button
              onClick={() => setActiveSeason(1)}
              className={clsx('btn-border-round', {
                active: activeSeason == 1,
              })}
            >
              1
            </Button>
          </li>
          <li>
            <Button
              onClick={() => setActiveSeason(2)}
              className={clsx('btn-border-round', {
                active: activeSeason == 2,
              })}
            >
              1
            </Button>
          </li>
        </ul>

        <div className="mt-4 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 min-[1280px]:grid-cols-5">
          {sessions &&
            sessions.map(({ _id }) => (
              <div key={_id} className="col-span-1 flex flex-col gap-3">
                <Image
                  className="h-[130px] w-full rounded-lg object-cover"
                  width={200}
                  height={130}
                  src={poster}
                  alt="poster"
                />
                <b className="text-2xl font-bold">1 Seria</b>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
