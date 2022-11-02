import {RootState} from '@/store/rootReducer';

export const getInitialized = (state: RootState) => state.app.initialized;
