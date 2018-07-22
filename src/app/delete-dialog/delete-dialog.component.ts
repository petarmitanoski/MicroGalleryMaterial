import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})

export class DeleteDialogComponent implements OnInit {



  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    private http: HttpRequestService){ }

    ngOnInit() {
     
    
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteThisPhoto(){   
    this.http.deletePhoto(this.data.id); 
    this.dialogRef.close(); 
  }

}