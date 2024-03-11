import Image from 'next/image';
import React from 'react';

type Props = {};

import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import user from '@/assets/user.jpg';
import { AnimeRetriveResponse } from '@/app/lib/interfaces';

export const CommentCreate = () => {
  return (
    <div className="mt-8">
      <div className="flex flex-col">
        <b className="font-bold">Sharh qoldiring</b>
        <div className="flex gap-9">
          <b className="font-bol text-2xl">5.0</b>
          <div
            className="relative cursor-pointer"
            // onMouseMove={(e) => setStar(e)}
          >
            <div className="flex gap-3">
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, i) => (
                <label className="star relative" htmlFor={'star'} key={i}>
                  <input
                    className="hidden"
                    name="star"
                    id="star"
                    type="radio"
                  />
                  <CiStar size={30} />
                </label>
              ))} */}
            </div>
            <div className="absolute top-0 flex w-[50%] gap-3 overflow-hidden">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, i) => (
                <label className="star relative" htmlFor={'star'} key={i}>
                  <input
                    className="hidden"
                    name="star"
                    id="star"
                    type="radio"
                  />
                  <FaStar size={30} />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <textarea className="mt-4 h-[400px] w-full rounded-lg border-[2px] border-[var(--gray)] bg-[var(--gray-white)]"></textarea>

      <button className="btn-full h-effect mt-4 bg-[var(--green)]">
        Yuborish
      </button>
    </div>
  );
};

export const CommentList = () => {
  return (
    <section className="py-8 antialiased lg:py-16">
      <article className="rounded-lg p-6 text-base ">
        <footer className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="mr-3 inline-flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              <Image
                className="mr-2 rounded-full"
                src={user}
                alt="Michael Gough"
                width={60}
                height={60}
              />
              Michael Gough
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400"></p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">
          Very straight-to-point article. Really worth time reading. Thank you!
          But tools are just the instruments for the UX designers. The knowledge
          of the design tools are as important as the creation of the design
          strategy.
        </p>
      </article>
    </section>
  );
};

export const Comment = (props: Props) => {
  return (
    <>
      <CommentList />
      <CommentCreate />
    </>
  );
};
