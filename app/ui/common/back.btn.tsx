'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { VscArrowLeft } from 'react-icons/vsc';

type Props = {};

export default function BackButton({}: Props) {
  const route = useRouter();
  return (
    <div
      onClick={() => {
        route.back();
      }}
      className="h-effect mb-5 flex cursor-pointer items-center gap-3 hover:gap-2"
    >
      <VscArrowLeft />
      Orqaga
    </div>
  );
}
