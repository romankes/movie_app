import {App} from './namespace';

export enum types {
  BOOTSTRAP = 'APP/BOOTSTRAP',

  UPDATE_LANGUAGE = 'APP/UPDATE_LANGUAGE',
}

export type AppState = {
  initialized: boolean;
};

export type BootstrapAsync = App.BaseAction<typeof types.BOOTSTRAP>;

export type AppActionsTypes = BootstrapAsync;
