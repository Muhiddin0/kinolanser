import React, { useState } from 'react';
import Image from 'next/image';

// *** Icons ***

import clsx from 'clsx';
import { Comment } from '../comments/comment';
import { AnimeRetriveResponse } from '@/app/lib/interfaces';

type Props = {
  anime: AnimeRetriveResponse | null;
};

export const MovieInfo = ({ anime }: Props) => {
  const [activeItem, setActiveItem] = useState<number>(1);

  function setStar(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e);
  }

  return (
    <section>
      <div className="container py-10">
        {/* header */}
        <ul className="mt-6 flex gap-3">
          <li>
            <button
              onClick={() => setActiveItem(1)}
              className={clsx('btn-border-round', {
                active: activeItem == 1,
              })}
            >
              Tavsif
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveItem(2)}
              className={clsx('btn-border-round', {
                active: activeItem == 2,
              })}
            >
              Sharhlar
            </button>
          </li>
        </ul>

        {activeItem == 1 && (
          <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <Image
              width={150}
              height={150}
              className="h-[210px] w-auto rounded-md"
              src={
                anime?.data.image
                  ? 'https://cdn.amediatv.uz' + anime?.data.image
                  : 'https://via.placeholder.com/150x225'
              }
              alt=""
            />
            <div className="flex-grow-[1]">
              <p className="blur-load font-bold text-[var(--slow-white)]">
                {anime?.data.year} {anime?.data.country}{' '}
                {anime?.data.janr.map(({ nameuz, _id }) => (
                  <React.Fragment key={_id}>{nameuz}, </React.Fragment>
                ))}
              </p>

              <p className="blur-load mt-3 font-bold text-white">
                {anime?.data.description.uz}
              </p>

              <table className="mt-5">
                <tbody>
                  <tr>
                    <td colSpan={1} className="text-[var(--slow-white)]">
                      Til
                    </td>
                    <td width={20}></td>
                    <td className="text-white">uz</td>
                  </tr>
                  <tr>
                    <td colSpan={1} className="text-[var(--slow-white)]">
                      Sifati
                    </td>
                    <td></td>
                    <td className="text-white">HD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeItem == 2 && <Comment />}
      </div>
    </section>
  );
};
