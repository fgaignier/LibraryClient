import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
	<nav>
	<a routerLink="/students">Merci de choisir un etudiant avant de pouvoir consulter les livres</a>
	</nav>
   	<router-outlet></router-outlet><br>
   	`
})

export class AppComponent {

  title = 'Bibliotheque';

}
