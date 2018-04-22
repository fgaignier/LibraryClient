import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/Rx";

import { Student } from './student';

@Injectable()
export class StudentService {

  students: Student[];
  
  constructor(private http: HttpClient) {}
  
  public getStudentsWithObservable(): Observable<Student[]> {
    return this.http.get("http://localhost:8080/etudiants").map((response: Response) => response || []);
  }    
  
  public getStudentWithObservable(numEtudiant: string): Observable<Student> {
  	return this.http.get("http://localhost:8080/etudiant/" + numEtudiant);
  }

}
