import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestService  {

  private isSuccess: boolean = false;
  private albumsUrl: string = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private _http: Http,private user: UserService, private router: Router) { }

  getIsSuccess(): boolean{
    return this.isSuccess;
  }
  
  getAlbums(){
    return this._http.get(this.albumsUrl);
  }

  editPhoto(title: string, url: string, id: number) {
    return new Promise((resolve, reject) => {
      
      this.deletePhoto(id);
      this.addPhoto(title, url);
      
    });
}

  

  // DELETE PHOTO---------------------------------------

  deletePhoto(id: number){

    const params = new HttpParams().set('id', '1');

    this._http.delete(this.albumsUrl+`/${ id }`)
    .subscribe(
      result => {console.log(result)
        if(result.ok)
          this.isSuccess = true;
          setTimeout(()=> { this.isSuccess = false;
                            this.router.navigate(['/album']);
                          }, 2000);
    },
    err => console.error(err)
  );

  }

  // ADD PHOTO---------------------------

  addPhoto(title: string, url: string){
    
    this._http.post(this.albumsUrl,
      {
      albumId: this.user.getUserId(),
      title: title,
      url: url,
      thumbnailUrl: url
      }
      ).subscribe(
        result => {console.log(result)
                  if(result.ok)
                    this.isSuccess = true;
                    setTimeout(()=> { this.isSuccess = false;
                                       this.router.navigate(['/album']);
                                    }, 2000);
        },
        err => {console.error(err)
                return err;
        }       
        );

      
  }

}
