import React from 'react';
import AnimeRetriveClient from './pageClient';
import { Metadata } from 'next';
import axios from 'axios';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let { id } = params;

  try {
    let { data } = await axios.get(
      'https://api-aniwatch.onrender.com/anime/info?id=' + id,
    );
    return {
      title: data['anime']['info']['name'] + '| Anikon uz',
      description: data['anime']['info']['description'] || 'Anime',
      alternates: {
        canonical: '/' + id,
      },
    };
  } catch {
    return {
      title: 'Not found',
      description: 'The item not found',
    };
  }
}

const Page = async (props: Props) => {
  return <AnimeRetriveClient />;
};

export default Page;
