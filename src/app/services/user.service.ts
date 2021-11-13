import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/'
  constructor(private httpc: HttpClient) { }

  listUser(){
    return this.httpc.get(this.baseUrl +'users');

  }

  viewUser(id: string){
    return this.httpc.get(this.baseUrl + 'users/' + id)
  }
}
