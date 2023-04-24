import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  heroes: string[] = ['Hulk', 'Spiderman', 'Ironman', 'Captain America', 'Miles'];

  rmHero(){
    this.heroes.pop();
  }

}
