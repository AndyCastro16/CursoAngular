import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Character } from './../../interfaces/characters.interace';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './dbz-character.component.html',
  styleUrls: ['./dbz-character.component.scss']
})
export class DbzCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); 

  public character: Character={
    id: '',
    name: '',
    powerLevel: 0
  }

  emitCharacter(): void{

    if (this.character.name.length == 0){
      return 
    }
    this.onNewCharacter.emit(this.character);
    this.character = {id: '0' , name: '', powerLevel: 0 }
  }
}
