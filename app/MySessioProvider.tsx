'use client';

import React from 'react';
// *** Session ***
import { SessionProvider } from 'next-auth/react';

type Props = { children: React.ReactNode };

export default function MySessioProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
