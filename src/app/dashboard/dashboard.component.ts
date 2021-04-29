import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public userSer:UserService
  ) { }

  ngOnInit(){

  //   console.log(this.userSer.getToken()); //to check token stored or not
  //   console.log(this.userSer.getuserId()); //to check userid stored or not
  }

}
