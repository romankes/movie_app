import {App} from '../app';
import {Auth} from './namespace';

export enum types {
  SIGN_IN = 'AUTH/SIGN_IN',

  SIGN_UP = 'AUTH/SIGN_UP',

  FETCH_TOKEN = 'AUTH/FETCH_TOKEN',
  END_FETCH_TOKEN = 'AUTH/END_FETCH_TOKEN',

  UPDATE_TOKEN = 'AUTH/UPDATE_TOKEN',
  END_UPDATE_TOKEN = 'AUTH/END_UPDATE_TOKEN',
}

export type AuthState = {
  logged: boolean;
};

export type SignInAsync = App.BaseAction<typeof types.SIGN_IN, Auth.ReqSignIn>;

export type SignUpAsync = App.BaseAction<typeof types.SIGN_UP, Auth.ReqSignUp>;

export type FetchTokenAsync = App.BaseAction<typeof types.FETCH_TOKEN>;
export type UpdateTokenAsync = App.BaseAction<
  typeof types.UPDATE_TOKEN,
  Auth.ReqUpdateToken
>;

export type AuthActionTypes =
  | SignInAsync
  | SignUpAsync
  | FetchTokenAsync
  | UpdateTokenAsync;
