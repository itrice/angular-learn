import { Injectable } from '@angular/core';
import { Hero } from "../app/hero";
import { HEROES } from "../app/mock-heroes";
import { IService } from "../app/hero.IService";
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class AmericanService implements IService {
  getHero(id: number): Hero {    
    return HEROES.find(hero=>hero.id == id);
  }

  getHeroes(): Hero[] {
    //alert('getHeroes');
    return HEROES;
  }

  constructor() { }
}

@Injectable({ providedIn: 'root' })
export class ChineseHeroService implements IService {
  getHero(id: number): Hero {
    return this.getHeroes().find(hero=>hero.id == id);
  }
  getHeroes(): Hero[] {
    return [
      { id: 21, name: '钟馗' },
      { id: 22, name: '孙尚香' },
      { id: 23, name: '吕布' },
      { id: 24, name: '白起' },
      { id: 25, name: '项羽' },
      { id: 26, name: '张飞' },
      { id: 27, name: '关羽' },
      { id: 28, name: '赵云' },
      { id: 29, name: '张三丰' },
      { id: 30, name: '乔峰' }
    ];
  }
}

@Injectable()
export class XXXHeroService implements IService {
  getHeroes(): Hero[] {
    throw new Error("Method not implemented.");
  }  getHero(id: number): Hero {
    throw new Error("Method not implemented.");
  }


}