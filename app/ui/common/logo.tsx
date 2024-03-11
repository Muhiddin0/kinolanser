import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import logo from '@/assets/logo.png';

type Props = {};

export const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
      <Image
        className="w-[70px] md:w-[100px] lg:w-[160px]"
        src={logo}
        alt="logo"
      />
    </Link>
  );
};
