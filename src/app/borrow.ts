import { Student } from './student';
import { Book } from './book';

export class Borrow {
  idEmprunt: number;
  date_emprunt: string;
  date_retour: string;
  etudiant: Student;
  livre: Book;
}
