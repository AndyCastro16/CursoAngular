import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interace';
@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {

  @Input()
  characterList: Character[]=[
    {
      name: 'Trunks',
      powerLevel: 100
    }
  ];
}
