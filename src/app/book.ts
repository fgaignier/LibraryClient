import { Borrow } from './borrow';

export class Book {
  id: number;
  titre: string;
  auteur: string;
  editeur: string;
  disponibility: boolean;
  emprunts: Borrow[];
}

