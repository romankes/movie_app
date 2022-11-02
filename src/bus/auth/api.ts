import axios from '@/services/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosPromise} from 'axios';
import {Auth} from './namespace';

export const apiAuth = new (class Api {
  signIn(data: Auth.ReqSignIn): AxiosPromise<Auth.ResSignIn> {
    return axios({url: '/sessions', method: 'post', data});
  }
  signUp(data: Auth.ReqSignUp): AxiosPromise<Auth.ResSignUp> {
    return axios({url: '/users', method: 'post', data});
  }

  async fetchToken(): Promise<string | null> {
    const token = await AsyncStorage.getItem('TOKEN');

    return token;
  }

  async updateToken({token}: Auth.ReqUpdateToken): Promise<void> {
    await AsyncStorage.setItem('TOKEN', token);
  }
})();
