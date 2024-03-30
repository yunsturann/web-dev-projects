export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: any;
  };
  region: string;
  subregion: string;
  population: number;
  flags: {
    png: string;
    alt: string;
  };
  capital: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
}
