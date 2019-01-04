import { Component, OnInit, Inject, InjectionToken, inject } from '@angular/core';
import { IService } from "../hero.IService";
import { Hero } from '../hero';
import { MyService } from "../myService";

@Component({
  selector: 'app-heroes',  
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less'],
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];

  hero: Hero;
  selectedHero: Hero;
  constructor(@Inject('IService') readonly heroService: IService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros() {
  this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
