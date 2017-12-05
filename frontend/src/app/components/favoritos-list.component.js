"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var FavoritosListComponent = (function () {
    function FavoritosListComponent() {
        this.title = 'Listado de favoritos';
        this.favoritos = ['youtube.com', 'google.com', 'facebook.com'];
        this.favoritosVisibles = false;
        this.color = "blue";
    }
    FavoritosListComponent.prototype.showFavoritos = function () {
        this.favoritosVisibles = true;
    };
    FavoritosListComponent.prototype.hideFavoritos = function () {
        this.favoritosVisibles = false;
    };
    FavoritosListComponent.prototype.changeColor = function () {
        console.log(this.color);
    };
    return FavoritosListComponent;
}());
FavoritosListComponent = __decorate([
    core_1.Component({
        selector: 'favoritos-list',
        templateUrl: 'app/views/favoritos-list.html'
    }),
    __metadata("design:paramtypes", [])
], FavoritosListComponent);
exports.FavoritosListComponent = FavoritosListComponent;
//# sourceMappingURL=favoritos-list.component.js.map