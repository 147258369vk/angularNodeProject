import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-prodiuct',
  templateUrl: './prodiuct.component.html',
  styleUrls: ['./prodiuct.component.css']
})
export class ProdiuctComponent implements OnInit {

  // id:any;
  productresponse:any;
product:any=[];

  constructor(
    public userservice:UserService,
    public router:Router
  ) { }



  ngOnInit(){
    // this.id=this.userservice.getuserId();
    this.userservice.displayProduct(this.userservice.getuserId()).subscribe((res)=>{
      this.productresponse=res;
      this.product=this.productresponse.data;






    },
    (err)=>{
      console.log(err);
    })
  }

  onAdd(f:NgForm)
  {
    this.userservice.addProduct(f.value).subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err);
    })
  }

  getid(id:any)
  {

    localStorage.setItem('productid',id);
    console.log(localStorage.getItem('productid'));
    this.router.navigateByUrl('/dashboard/upload');

  }

}
