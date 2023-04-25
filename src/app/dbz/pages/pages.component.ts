import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

import { Character } from './../interfaces/characters.interace';
@Component({
  selector: 'app-main-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  constructor(private dbz: DbzService){
    
  }

  get characters(): Character[]{
    return this.dbz.characters;
  }

  rmCharacter(id: string): void {
    this.dbz.rmCharacter(id);
  }

  onNewCharacter(character: Character): void{
    this.dbz.onNewCharacter(character)
  }
}
