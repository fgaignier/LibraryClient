import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<nav>
	<a routerLink="/students">Identification</a>
	</nav>
   	<router-outlet></router-outlet><br>
   	`
})

export class AppComponent {

  title = 'Bibliotheque';

}
