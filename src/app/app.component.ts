import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //store the file here
 //store the file here
  selectedFile!: File;
 
  constructor(private http:HttpClient){}

  onFileSelected(event:any){

    this.selectedFile=<File>event.target.files[0];

  }
  onUpload(){
    const fd = new FormData();

    let x = fd.append('attachement',this.selectedFile,this.selectedFile?.name);

    this.http.post('http://localhost:8080/upload',fd,{ responseType: 'text' })
    .subscribe(res=>{
      console.log(res);
    })
  }
}
