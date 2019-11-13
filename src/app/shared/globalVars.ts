import { Injectable } from '@angular/core';
import { UserModel } from './models/classes/user.model';

const KEY = 'authToken';
const KEY_REFRESH = 'authRefreshToken';
const KEY_USER_LOGGED_IN = 'userAuthenticated';

@Injectable()
export class GlobalVars {
 
  private user: UserModel;
  private accessToken: string;
  private refreshToken: string;

  constructor() {

  }

  getUserLoggedIn(): UserModel {
    return JSON.parse(window.localStorage.getItem(KEY_USER_LOGGED_IN));
  }

  setUserLoggedIn(userLogged: UserModel) {
    this.user = new UserModel();
    this.user = userLogged;
    window.localStorage.setItem(KEY_USER_LOGGED_IN, JSON.stringify(userLogged));
  }

 //Verifica se existe token
  hasAccess_token() {
    return !!this.getAccessToken();
  }

  getAccessToken(): string {
    return window.localStorage.getItem(KEY);
  }

  getRefreshToken(): string {
    return window.localStorage.getItem(KEY_REFRESH);
  }

  // setAccessToken(str: string) { // não será usado
  //   this.accessToken = str;
  //   return window.localStorage.setItem(KEY, str);
  // }

  setRefreshToken = (str: string) => {
    this.refreshToken = str;
    return window.localStorage.setItem(KEY_REFRESH, str);
  }

  //Remove o token, utilizado para efetuar logout
  removeToken() {
    window.localStorage.removeItem(KEY);
  }

  //Verifica se tem alguém logado
  isLogged() {
    return this.hasAccess_token();
  }

  
}