import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  { path: '', redirectTo: '/livres', pathMatch: 'full' },
  { path: 'books/:numEtudiant', component: BooksComponent },
  { path: 'students', component: StudentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
