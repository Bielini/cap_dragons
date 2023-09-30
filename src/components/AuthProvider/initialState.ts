import { IUser } from '../../../../ToDoList/src/modules/users';

export interface IAuthState {
  authToken?: string | null | number;
  isAuthenticated?: boolean;
  login?: (user: any) => void;
  user?: IUser | null;
};

export const initialState: IAuthState = {
  authToken: null,
  isAuthenticated: false,
  login: (user) => {},
  user: null,

  // ...JSON.parse(localStorage.getItem('auth') || '{}')
};
