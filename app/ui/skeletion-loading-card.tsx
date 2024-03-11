import React from 'react';

type Props = {};

export const SkeletionLoadinCard = (props: Props) => {
  return (
    <div className="card flex w-full flex-col gap-2">
      <div className="h-[200px] w-full animate-pulse rounded-md rounded-t object-cover dark:bg-gray-700 md:h-[270px] lg:h-[340px]"></div>
      <div className="bottom-0 left-0 flex flex-col">
        <b className="text-md overflow-hidden font-extrabold text-white">
          Loading...
        </b>
        <b className="text-sm text-[var(--green)]">loading</b>
      </div>
    </div>
  );
};
