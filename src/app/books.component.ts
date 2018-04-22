import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';


import { Book } from './book';
import { BookService } from './book.service';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-books',
  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {

  title = 'Livres a emprunter';
  books: Book[];
  selectedBook: Book;
  student: Student;

  constructor(
    private bookService: BookService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  getBooks(): void {
    this.bookService.getBooksWithObservable().subscribe(
       res => {
           this.books = res;
       }
    );
  }

  filterBook(titre: string , auteur: string): void {
	
	if(!auteur) {
  		auteur="";
  	}
  	if(!titre) {
  		titre="";
  	}
	console.log('FILTER BOOKS ' + titre + auteur);
	
  	this.bookService.getBooksFilteredWithObservable(titre, auteur).subscribe(
       res => {
           this.books = res;
       }
    );
  }
  
  ngOnInit(): void {
  	console.log('INIT BOOKS COMPONENT');
    this.getBooks();
    this.route.paramMap
      .switchMap((params: ParamMap) => this.studentService.getStudentWithObservable(params.get('numEtudiant')))
      .subscribe(student => this.student = student);
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  borrowBook(book: Book): void {
  	console.log('JEMPRUNTE UN LIVRE');
  	book.disponibility = false;
  	this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.borrowWithObservable(book.id, params.get('numEtudiant')))
      .subscribe(book => this.selectedBook = book); 
  }
  
  returnBook(book: Book): void {
  	console.log('JE RENDS UN LIVRE');
  	book.disponibility = true;
  	this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.returnBookWithObservable(book.id))
      .subscribe(book => this.selectedBook = book);
  }
  
}
