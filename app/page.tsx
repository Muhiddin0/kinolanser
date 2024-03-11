// *** Types ***
import { Metadata } from 'next';

// *** UI ***
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Anikon uz',
  description: "Anikon uz O'zbekistondagi eng yirin anime platformasi",
};

export default async function Page() {
  return (
    <>
      <PageClient />;
    </>
  );
}
