export interface ClassName {
  className?: string;
}

export interface HeaderProps {
  visible: boolean;
}

export interface IDishCard {
  id: number;
  title: string;
  description?: string;
  photo?: string;
}

export interface IEntertainmentCard {
  id: number;
  photos?: string[];
  title: string;
}

export interface IEntertainmentPrices {
  [key: string]: number;
}

export interface IEntertainments extends IEntertainmentCard {
  prices?: IEntertainmentPrices[];
  description_short: string;
  description_long?: string;
}

export interface INavbarData {
  id: number;
  value: string;
  path: string;
}

export interface IMeal {
  id: number;
  title: string;
  time: string;
  price?: number;
}
export interface BurgerProps {
  visible: boolean;
}

type Feature = {
  id: number;
  type: string;
};

interface IRoomTypes {
  type: string;
  id: number;
  count: number;
}

interface IBedTypes {
  [key: string]: number;
}

export interface House {
  id: number;
  photos: string[];
  features?: Feature[];
  bed_count?: number;
  title: string;
  pers_num: number;
  description_short: string;
  description_long?: string;
  price_weekday: number;
  price_holiday?: number;
  beds_types?: IBedTypes[];
  rooms_types?: IRoomTypes[];
}

export interface IRule {
  id?: number;
  content: string;
}
export interface IGallery {
  id: number;
  photos: string[];
  title: string;
}

export interface ImagesGallery {
  original: string;
  thumbnail: string;
}

export interface IGender {
  title: string;
}
export const gender: IGender[] = [{ title: "Мужской" }, { title: "Женский" }];

export interface ICountry {
  title: string;
}
export const country: ICountry[] = [
  { title: "Республика Беларусь" },
  { title: "Российская Федерация" },
  { title: "Республика Польша" },
  { title: "Литовская Республика" },
  { title: "Латвийская Республика" },
  { title: "Украина" },
  { title: "Другое" },
];

export interface IBackPhotos {
  id: number;
  photo_m: string;
  photo_h: string;
  photo_k: string;
  photo_e: string;
}

export interface IMainPage {
  id: number;
  photos: string[];
  title: string;
  description: string;
  house_title: string;
  house_description: string;
  kitchen_title: string;
  kitchen_description: string;
  entertainment_title: string;
  entertainment_description: string;
}

export interface INearest {
  id: number;
  photos: string[];
  title: string;
  description: string;
  location: string;
}

export interface IInfo {
  id: number;
  social: [
    {
      [key: string]: string;
    },
    {
      [key: string]: string;
    },
  ];
  phones: [string, string];
  address: string;
  comment: string;
  latitude: string;
  longitude: string;
  currency: string;
}

export type Policy = {
  policy: string;
  agreement: string;
};
export type Purchases = {
  object: number;
  fio: string;
  sex: string;
  passport_country: string;
  address: string;
  phone_number: string;
  email: string;
  telegram?: string;
  desired_arrival: string;
  desired_departure: string;
  count_adult: number;
  count_kids?: number;
  pets?: string;
  comment?: string;
};
export type countNumber = {
  title: number;
};

export type FormValues = {
  address: string;
  agreement: boolean;
  comment: string;
  count_adult: {
    label: string;
    value: number;
  };
  count_kids: {
    label: string;
    value: number;
  };
  desired_arrival: Date;
  desired_departure: Date;
  email: string;
  fio: string;
  object: {
    label: string;
    value: number;
  };
  passport_country: {
    label: string;
    value: string;
  };
  pets: string;
  phone_number: string;
  sex: {
    label: string;
    value: string;
  };
  telegram: string;
};
