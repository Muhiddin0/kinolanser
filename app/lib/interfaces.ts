export interface useContextInterface {
  isOpen: string;
  setIsOpen(isOpen: string): void;
}

export type ChildInterface =
  | 'CATEGORY'
  | 'SERIALTURKIYA'
  | 'SERIALKOREA'
  | 'SERIAL'
  | 'MULTISERIAL';

export type TSpotlightAnimes = {
  date: string;
  _id: string;
  serial: {
    name: {
      uz: string;
      ru: string;
    };
    description: {
      uz: string;
      ru: string;
    };
    screens: {
      thumb: string[];
      original: string[];
    };
    category: {
      isRestricted: boolean;
      _id: string;
      nameuz: string;
      nameru: string;
    }[];
    _id: string;
    image: string;
    year: string;
  };
  __v: number;
};

export interface MovieContent {
  id: string;
  img: string;
  link?: string; // Making link property optional
  part: number;
  title: string;
}

export type TGlobalCardItem = {
  age: number;
  child: string;
  description: string;
  genre: string;
  id: string;
  imdb: string;
  img: string;
  push: string;
  state: string;
  time: string;
  title: string;
  trailer: string;
  year: string;
};

export type TAnime = {
  name: {
    uz: string;
    ru: string;
  };
  date: string;
  _id: string;
  video: string;
  season: string;
  url: string;
  length: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

interface Name {
  uz: string;
  ru: string;
}

interface Description {
  uz: string;
  ru: string;
}

interface Screens {
  thumb: string[];
  original: string[];
}

interface Category {
  isRestricted: boolean;
  _id: string;
  nameuz: string;
  nameru: string;
  createdAt: string;
  __v: number;
}

interface Translator {
  status: boolean;
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  __v: number;
}

interface Janr {
  status: boolean;
  _id: string;
  nameuz: string;
  nameru: string;
  createdAt: string;
  __v: number;
}

export interface Seria {
  name: Name;
  date: string;
  _id: string;
  video: string;
  season: string;
  url: string;
  length: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Data {
  name: Name;
  description: Description;
  screens: Screens;
  category: Category[];
  translator: Translator[];
  tarjimon: Translator[];
  tayming: any[]; // Assuming it's an array of any
  janr: Janr[];
  rating: number;
  tags: string[];
  type: number;
  view: number;
  tip: string;
  date: string;
  status: boolean;
  _id: string;
  num: string;
  video: string;
  url: string;
  rejissor: string;
  length: string;
  studia: string;
  image: string;
  price: string;
  year: string;
  country: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  seria: Seria[];
}

export interface AnimeRetriveResponse {
  success: boolean;
  status: number;
  data: Data;
  seria?: Seria[];
  comment: any[]; // Assuming it's an array of any
}
