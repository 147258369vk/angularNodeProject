import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public userservice:UserService
  ) { }

  ngOnInit(): void {
  }
  addData(f:NgForm)
  {
    console.log(f.value);
    this.userservice.register(f.value).subscribe((res)=>{
      console.log(res);
      alert('Register successfully');
    },(err)=>{
      console.log(err);
    })
  }

}
