import { Component, OnInit,Inject } from '@angular/core';
import { Hero } from "../hero";
import { IService } from "../hero.IService";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[]=[];
  
  constructor(@Inject('IService') readonly heroService:IService) { }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes():void{
      this.heroes = this.heroService.getHeroes().slice(1,5);
  }
}
