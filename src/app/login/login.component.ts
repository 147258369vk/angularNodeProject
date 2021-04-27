import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public userservice:UserService) { }

  ngOnInit(): void {
  }

  logindata(f:NgForm)
  {
    this.userservice.login(f.value).subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err);

    })
  }
}
