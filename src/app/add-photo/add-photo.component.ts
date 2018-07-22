import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  public newUrl: string;
  public newTitle: string;
  constructor(private http: HttpRequestService) { }

  ngOnInit() {
    this.newTitle = "";
    this.newUrl = "";
  }

  isSuccess(){
    return this.http.getIsSuccess();
  }

  addNewPhoto(){
    this.http.addPhoto(this.newTitle, this.newUrl);
  }

}
