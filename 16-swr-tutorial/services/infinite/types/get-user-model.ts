interface UserModel {
  id: number;
  firstName: string;
  age: number;
}

export interface GetUsersModel {
  users: UserModel[];
}
