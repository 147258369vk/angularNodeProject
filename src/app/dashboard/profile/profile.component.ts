import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public userservice:UserService
  ) { }
  id:any;
  userdata:any
  userinfo:any=[]

  ngOnInit() {
    this.id=this.userservice.getuserId();
    // console.log(this.id);

    // this.userdata = this.userservice.display(this.id);

    this.userservice.display(this.id).subscribe((res)=>{
      this.userdata=res;
      this.userinfo=this.userdata.data;
      console.log(this.userinfo);

    })

  }

}
