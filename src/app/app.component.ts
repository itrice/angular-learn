import { Component } from '@angular/core';
import { MyService,ChineseHeroService } from './myService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers:[{provide: 'IService', useClass: ChineseHeroService}] // useValue
})
export class AppComponent {
  title = 'Tour of Heroes';
}

