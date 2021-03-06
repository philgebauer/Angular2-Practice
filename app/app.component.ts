import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header>
    <nav class="navbar navbar-inverse">
      <div class="navbar-header">
        <a href="/" class="navbar-brand"> Angular 2 App Practice </a>
      </div>
    </nav>
  </header>

  <main>

    <div class="row">
      <div class="col-sm-4">
          <div *ngIf="users">
          <ul class="list-group user-list">
            <li class="list-group-item"
            *ngFor="let user of users"
            (click)="selectUser(user)">
            {{ user.name }} {{ user.username }}
            </li>
          </ul>
          </div>
      </div>
      <div class="col-sm-8">
          <div class="jumbotron">
            <h1>An Angular 2 Quickstart Boilerplate</h1>
          </div>
      </div>
      </div>
  </main>


    <footer class="text-center">
    copyright 2017
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})

export class AppComponent {
  message = 'Hello!';
  users = [
    { id: 25, name: 'Chris', username: 'sevilayha' },
    { id: 26, name: 'Nick', username: 'whatnicktweets' },
    { id: 27, name: 'Holly', username: 'hollylawly' }
  ];
  activeUser;
  selectUser (user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
