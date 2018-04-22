import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books.component';
import { BookService } from './book.service';

import { StudentsComponent } from './students.component';
import { StudentService } from './student.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    StudentsComponent
  ],
  providers: [
    BookService,
    StudentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
