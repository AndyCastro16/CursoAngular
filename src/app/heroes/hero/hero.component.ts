import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 30;

  get capitalized(): string{
    return this.name.toUpperCase();
  }
  getHeroData(): string {
    return `${this.name} is ${this.age} years old.`;
  }

  changeRandomName(): void{
    this.name = 'Spiderman';
  }
  changeRandomAge(): void{
    this.age = Math.floor(Math.random() * 100);
  }
}
