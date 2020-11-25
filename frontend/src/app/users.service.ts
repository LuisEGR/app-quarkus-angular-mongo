import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment as env} from '../environments/environment';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): Promise<IUser[]> {
    return this.http
      .get<IUser[]>(env.apiHost + '/users')
      .toPromise()
      .then((res) => {
        return res;
      }).catch((e) => {
        console.error("Error HTTP: ", e);
        return [];
      })
  }

  createUser(user: IUser) {
    return this.http
      .post<IUser[]>(env.apiHost +'/user', user)
      .toPromise()
      .then((res) => {
        return res;
      }).catch((e) => {
        console.error("Error HTTP: ", e);
        return [];
      })
  }

  updateUser(user: IUser) {
    return this.http
      .patch<IUser[]>(env.apiHost +'/user', user)
      .toPromise()
      .then((res) => {
        return res;
      }).catch((e) => {
        console.error("Error HTTP: ", e);
        return [];
      })
  }

  deleteUser(user: IUser) {
    return this.http
      .delete<IUser[]>(env.apiHost +'/user/' + user.id)
      .toPromise()
      .then((res) => {
        return res;
      }).catch((e) => {
        console.error("Error HTTP: ", e);
        return [];
      })
  }


}
