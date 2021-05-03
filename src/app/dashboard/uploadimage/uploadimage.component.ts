import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload'

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']

})


export class UploadimageComponent implements OnInit {

  constructor() { }
  id:any=localStorage.getItem('productid');

   backendurl='http://localhost:3000/imageupload/'+this.id;

   public uploader:FileUploader = new FileUploader({url:this.backendurl,itemAlias:'photo'});

   ngOnInit(){

    this.uploader.onAfterAddingFile = (file)=>{file.withCredentials=false};
    this.uploader.onCompleteItem = (item:any,response:any,status:any,header:any)=>{
      console.log("Image upload successfully:",item,status,response);
    }


   }



}
