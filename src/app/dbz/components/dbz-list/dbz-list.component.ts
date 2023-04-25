import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interace';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrls: ['./dbz-list.component.scss']
})
export class DbzListComponent {

  @Input()
  characterList: Character[]=[
    {
      id: uuid(),
      name: 'Trunks',
      powerLevel: 100
    }
  ];
  @Output()
  public onDelete = new EventEmitter<string>(); 

  emitCharacterId(id: string): void{
    this.onDelete.emit(id)
  }
}
