import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User,loginUser } from './user.model';
import { Product } from './product.model';

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

  public newProduct:Product={
    pname:'',
    price:'',
    quantity:'',
    user:this.getuserId()
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


  display(id:any){
    return this.http.get('http://localhost:3000/userinfo/'+id);
  }
  updateUser(id:any,updatedData:User)
  {
    return this.http.put('http://localhost:3000/update/'+id,updatedData);
  }


  //to add product

  addProduct(product:Product)
  {
    return this.http.post('http://localhost:3000/addproduct',product);
  }

  //displayproduct by user

  displayProduct(id:any)
  {
    return this.http.get('http://localhost:3000/displayproduct/'+id);
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


    //to store userid
    setuserId(id:string)
    {
      localStorage.setItem('userid',id);
    }
    getuserId()
    {
      return localStorage.getItem('userid');
    }
    deleteuserId()
    {
      localStorage.removeItem('userid');
    }


    getPayload()
    {
      // var userpayload;
      // var token=JSON.stringify(this.getToken());
      // if(token)
      // {
      // userpayload=atob(token.split('.')[1]);

      //   return JSON.parse(userpayload);
      // }
      // else
      // {
      //   return null;
      // }

      var token = this.getToken();
      if(token)
      {
        var userpayload=atob(token.split('.')[1]);
        return JSON.parse(userpayload);
      }
      else
      {
        return null;
      }



    }

    isloggedIn()
    {
      var userpayload=this.getPayload();
      if(userpayload)
      {
        return userpayload.exp>Date.now()/1000;
      }
      else
      {
        return null;
      }
    }




}
