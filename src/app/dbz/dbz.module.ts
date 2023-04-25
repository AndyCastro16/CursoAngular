import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages/pages.component';
import { DbzListComponent } from './components/dbz-list/dbz-list.component';
import { DbzCharacterComponent } from './components/dbz-character/dbz-character.component';



@NgModule({
  declarations: [
    PagesComponent,
    DbzListComponent,
    DbzCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class DbzModule { }
