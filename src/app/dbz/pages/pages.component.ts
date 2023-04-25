import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interace';
@Component({
  selector: 'app-main-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  characters: Character[]=[
    {
      name: 'Krillin',
      powerLevel: 1
    },
    {
      name: 'Goku',
      powerLevel: 300000
    }
  ];

}
