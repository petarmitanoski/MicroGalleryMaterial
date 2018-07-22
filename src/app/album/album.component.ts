import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public data: {};
  p: number = 1;
  constructor( private user: UserService, private http: HttpRequestService) { 
    
  }

  ngOnInit() {
    this.http.getAlbums().subscribe((res) => {
      this.data = res.json().filter((item) => item.albumId === this.user.getUserId());
      this.user.setData(this.data);
    });

    }

    getUsername(){
      this.user.getUsername();
    }

  

}
