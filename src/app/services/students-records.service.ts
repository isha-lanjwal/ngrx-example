import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsRecords } from '../state/students-records.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsRecordsService {

  constructor(private http: HttpClient) { }

  getStudentsRecords(){
    return this.http.get<Array<StudentsRecords>>("http://localhost:3000/api/StudentsRecords")
  }
}
