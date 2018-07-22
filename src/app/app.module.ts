import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from 'src/app/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';
import { LogInGuard } from 'src/app/guards/log-in-guard.guard';
import { UserService } from 'src/app/services/user.service';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component'; 
import { MatDialogModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'album', canActivate: [LogInGuard], component: AlbumComponent },
  { path: 'details/:id', canActivate: [LogInGuard], component: PhotoDetailsComponent },
  { path: 'album/addPhoto', canActivate: [LogInGuard], component: AddPhotoComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlbumComponent,
    LoginComponent,
    PhotoDetailsComponent,
    AddPhotoComponent,
    DeleteDialogComponent       
  ],
  entryComponents: [
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgxPaginationModule,
    MatDialogModule 
  ],
  providers: [UserService, LogInGuard, HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
