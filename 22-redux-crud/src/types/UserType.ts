export interface IUser {
  id?: string;
  name: string;
  surname: string;
  email: string;
  address: string;
  city: string;
  birthdate: Date;
  phone: string;
  gender: boolean | null;
}
