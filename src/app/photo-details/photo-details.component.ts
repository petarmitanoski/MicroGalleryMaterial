import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  private id: number;
  public photo: Photo;
  public newTitle: string;
  public url: string;

  constructor(private http: HttpRequestService ,public dialog: MatDialog, private user: UserService, private route: ActivatedRoute) { 
    
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{
      data: {id : this.id}
    }
    );
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.photo = this.user.getData()[this.id];
    this.newTitle = this.photo.title;
  }

  saveEdit(){
    this.http.editPhoto(this.newTitle , this.photo.url, this.photo.id);
  }

}
