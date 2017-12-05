import {Component} from "@angular/core";

@Component({
  selector: 'favoritos-list',
  templateUrl: 'app/views/favoritos-list.html'
})

export class FavoritosListComponent {
  public title: string;
  public favoritos: Array<string>;
  public favoritosVisibles: boolean;
  color:string;

  constructor() {
    this.title = 'Listado de favoritos';
    this.favoritos = ['youtube.com', 'google.com', 'facebook.com'];
    this.favoritosVisibles = false;
    this.color = "blue";
  }

  showFavoritos() {
    this.favoritosVisibles = true;
  }

  hideFavoritos() {
    this.favoritosVisibles = false;
  }

  changeColor(){
    console.log(this.color);
  }

}

