import {RootState} from '@/store/rootReducer';

export const getLogged = (state: RootState) => state.auth.logged;
