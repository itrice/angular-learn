import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template:'<p>@2019 iTrice</p>',
  styleUrls: ['./copyright.component.less']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
