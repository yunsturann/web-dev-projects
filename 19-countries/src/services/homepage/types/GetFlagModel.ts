export type GetFlagModel = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
};
