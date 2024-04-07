export interface UserModel {
  id: string;
  name: string;
  cv: string;
  created_at: string;
}

export interface GetUsersModel {
  users: UserModel[];
}
