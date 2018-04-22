import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-students',
  templateUrl: './students.component.html'
})

export class StudentsComponent implements OnInit {

  title = 'Identifiez-vous';
  students: Student[];
  selectedStudent: Student;

  constructor(
    private studentService: StudentService,
    private router: Router) { }

  getStudents(): void {
    this.studentService.getStudentsWithObservable().subscribe(
       res => {
           this.students = res;
       }
    );
  }

  ngOnInit(): void {
    this.getStudents();
  }

  selectStudent(student: Student): void {
    this.selectedStudent = student;
    console.log('CA MARCHE OU PAS');
    this.router.navigate(['/books', this.selectedStudent.numEtudiant]);
  }
  
}
