import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/characters.interace';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  characters: Character[]=[
    {
      id: uuid(),
      name: 'Bruce Wayne',
      powerLevel: 30000
    },
    {
      id: uuid(),
      name: 'Goku',
      powerLevel: 1000000
    }
  ];
  onNewCharacter({name, powerLevel}: Character): void{
    const newCharacter: Character= { id: uuid(), name, powerLevel }
    this.characters.push(newCharacter);
  }
  rmCharacter(id: string): void{
    //Esta funcion usa el filter como una ejecucion unica para eliminar un caracter
    //Filtra todos los que no tengan el id enviado y regresa el arreglo sin el del id
    this.characters = this.characters.filter(character => character.id!== id);
  }
  constructor() { }
}
