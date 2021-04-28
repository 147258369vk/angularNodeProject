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

    //to store the token after login

    setToken(token:string)
    {
      localStorage.setItem('usertoken',token);
    }

    getToken()
    {
      return localStorage.getItem('usertoken');
    }

    deleteToken()
    {
      localStorage.removeItem('usertoken');
    }



    getPayload()
    {
      var token=JSON.stringify(this.getToken());
      var userpayload=atob(token.split('.')[1]);
      if(userpayload)
      {
        return JSON.parse(userpayload);
      }
      else
      {
        return null;
      }

    }


}
