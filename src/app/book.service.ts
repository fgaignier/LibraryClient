import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/Rx";

import { Book } from './book';

@Injectable()
export class BookService {
  
  constructor(private http: HttpClient) {}
  
  public getBooksWithObservable(): Observable<Book[]> {
    return this.http.get("http://localhost:8080/livres").map((response: Response) => response || []);
  }
    
  public borrowWithObservable(id: number, sid: string): Observable<Book> {
    return this.http.put("http://localhost:8080/livres/" + id + "?sid=" + sid, null);
  }

  public returnBookWithObservable(id: number): Observable<Book> {
    return this.http.post("http://localhost:8080/livres/"+id, null);
  }

  public getBooksFilteredWithObservable(titre, auteur): Observable<Book[]> {
  	return this.http.get("http://localhost:8080/livres/selection?auteur=" + auteur + "&titre=" + titre).map((response: Response) => response || []);
  }
}
