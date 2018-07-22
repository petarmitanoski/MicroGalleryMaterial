import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


import { NgModule } from '@angular/core';

  const ALL_MODULES = [
    MatToolbarModule,
    MatIconModule, 
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule
    
  ]

@NgModule({
  imports: [ALL_MODULES],
  exports: [ALL_MODULES],
})
export class MaterialModule { }