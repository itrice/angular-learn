import { Component } from '@angular/core';
import { AmericanService,ChineseHeroService,XXXHeroService } from './AmericanService';

let as = new ChineseHeroService();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  //providers:[{provide: 'IService', useClass: AmericanService}] // useValue  
  providers:[{provide: 'IService', useValue: as}] // useValue  可能用于单例
})
export class AppComponent {
  title = 'Tour of Heroes';
}

