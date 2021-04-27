import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User,loginUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public newUser : User={
    name:'',
    email:'',
    contact:'',
    password:''
  }

  public existingUser:loginUser={
    email:'',
    password:''
  }

  constructor(private http:HttpClient) { }


  register(user:User)
  {
    return this.http.post('http://localhost:3000/admin',user);
  }

  login(existUser:loginUser)
  {
    return this.http.post('http://localhost:3000/auth',existUser);
  }
}
