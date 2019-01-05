import { Component, OnInit,Input,Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from "../hero";
import { IService } from "../hero.IService";


@Component({
  selector: 'app-hero-detial',
  templateUrl: './hero-detial.component.html',
  styleUrls: ['./hero-detial.component.less']
})
export class HeroDetialComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private route: ActivatedRoute, private location: Location, @Inject('IService') private heroService: IService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.getHero(id);
  }

  goBack():void{
    this.location.back();
  }
}
