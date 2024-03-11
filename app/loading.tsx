'use client';

import React from 'react';
import Preloading from './ui/preloading';

type Props = {};

const Loading = (props: Props) => {
  return (
    <section className="f-center h-screen w-full p-4">
      <Preloading />
    </section>
  );
};

export default Loading;
