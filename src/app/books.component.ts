import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';


import { Book } from './book';
import { BookService } from './book.service';
import { Student } from './student';
import { StudentService } from './student.service';
import { Borrow } from './borrow';

@Component({
  selector: 'my-books',
  templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit {

  title = 'Livres a emprunter';
  books: Book[];
  selectedBook: Book;
  student: Student;
  start: Date;
  retour: Date;

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

  getCurrentBorrower(book: Book): number {
  	if(book.disponibility) { return -1;}
  	for (let emprunt of book.emprunts) {
  		if(!emprunt.returned) {
  			console.log(emprunt.etudiant.prenom);
  			return emprunt.etudiant.numEtudiant;
  		}	
  	}
  	return -1;
  }
  
  getCurrentBorrowerName(book: Book): string {
  	if(book.disponibility) { return "";}
  	for (let emprunt of book.emprunts) {
  		if(!emprunt.returned) {
  			console.log(emprunt.etudiant.prenom);
  			return emprunt.etudiant.prenom;
  		}	
  	}
  	return "";
  }
  
  isBorowedByMe(book :Book): boolean {
  	if(this.getCurrentBorrower(book) == this.student.numEtudiant) {
  		return true;
  	}
  	return false;
  }
  
  borrowBook(book: Book): void {
  	console.log('JEMPRUNTE UN LIVRE');
  	this.start = new Date();
  	let borrow = new Borrow(this.student, book);
  	book.emprunts.push(borrow);
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
