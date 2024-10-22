import { StudentsRecords } from "./students-records";
import { createReducer } from "@ngrx/store";

export const initState: ReadonlyArray<StudentsRecords> = [{
    name: "Deepak",
    city: "Mumbai",
    country: "India",
    subject: "Mumbai",
    passportDeclaration: "Yes",
    fitnessDeclaration: "Yes",
    courseName: "Maths",
    date: "19-11-1998",
    state: "Maharashtra",
    subjects: "Maths",
    street: "5th street",
    email: "deepak@gmail.com",
    phone: "1122112211",
    postalCode: 12345,
}];

export const studentsReducer = createReducer(
    initState
);