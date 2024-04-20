export interface ITask {
  id: string;
  status: string;
  name: string;
}

export interface IBoard {
  tasks: ITask[];
  id: string;
  name: string;
}
