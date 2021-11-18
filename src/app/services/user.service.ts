import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';

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

  addUser(userObj: any){
    return this.httpc.post(this.baseUrl + 'users', userObj);
  }
  
  deleteUser(id: any){
    return this.httpc.delete(this.baseUrl + 'users/' + id);
  }
  updateUser(id: any, userObj: any){
    return this.httpc.put(this.baseUrl + 'users/' + id, userObj);

  }

}
