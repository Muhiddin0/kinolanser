'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react';
import { TGlobalCardItem, TSpotlightAnimes } from '../interfaces';

interface ContextProps {
  spotlightAnimes: TSpotlightAnimes[];
  setSpotLight: Dispatch<SetStateAction<TSpotlightAnimes[]>>;

  animeFilms: TGlobalCardItem[];
  setAnimeFilms: Dispatch<SetStateAction<TGlobalCardItem[]>>;

  animeOngoins: TGlobalCardItem[];
  setAnimeOngoins: Dispatch<SetStateAction<TGlobalCardItem[]>>;
}

const GlobalContext = createContext<ContextProps>({
  spotlightAnimes: [],
  setSpotLight: (): void => {},

  animeFilms: [],
  setAnimeFilms: (): void => {},

  animeOngoins: [],
  setAnimeOngoins: (): void => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [spotlightAnimes, setSpotLight] = useState<TSpotlightAnimes[] | []>([]);
  const [animeFilms, setAnimeFilms] = useState<TGlobalCardItem[] | []>([]);
  const [animeOngoins, setAnimeOngoins] = useState<TGlobalCardItem[] | []>([]);
  const [animeEnd, setAnimeEnd] = useState<TGlobalCardItem[] | []>([]);

  return (
    <GlobalContext.Provider
      value={{
        spotlightAnimes,
        setSpotLight,

        animeFilms: animeFilms,
        setAnimeFilms: setAnimeFilms,

        animeOngoins: animeOngoins,
        setAnimeOngoins: setAnimeOngoins,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
