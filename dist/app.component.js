"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = 'Hello!';
        this.users = [
            { id: 25, name: 'Chris', username: 'sevilayha' },
            { id: 26, name: 'Nick', username: 'whatnicktweets' },
            { id: 27, name: 'Holly', username: 'hollylawly' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <header>\n    <nav class=\"navbar navbar-inverse\">\n      <div class=\"navbar-header\">\n        <a href=\"/\" class=\"navbar-brand\"> Angular 2 App Practice </a>\n      </div>\n    </nav>\n  </header>\n\n  <main>\n\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n          <div *ngIf=\"users\">\n          <ul class=\"list-group user-list\">\n            <li class=\"list-group-item\"\n            *ngFor=\"let user of users\"\n            (click)=\"selectUser(user)\">\n            {{ user.name }} {{ user.username }}\n            </li>\n          </ul>\n          </div>\n      </div>\n      <div class=\"col-sm-8\">\n          <div class=\"jumbotron\">\n            <h1>An Angular 2 Quickstart Boilerplate</h1>\n          </div>\n      </div>\n      </div>\n  </main>\n\n\n    <footer class=\"text-center\">\n    copyright 2017\n    </footer>\n  ",
        styles: ["\n    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map