import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
   templateUrl: 'app/views/home.html'
})

export class AppComponent  {
  public name:string = 'Angular';
  public title:string;
  public description:string;

  constructor(){
    this.title = 'App Favoritos';
    this.description = ' Api para gestionar favoritos online';
  }
}
