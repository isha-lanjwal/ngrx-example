import { StudentsRecords } from "./students-records";
import { createReducer,on } from "@ngrx/store";
import * as Actions from "./students-records.action";

export const initState:{StudentsRecords: StudentsRecords []} = {
    StudentsRecords: [{
        name: "Test",
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
        email: "test@gmail.com",
        phone: "1122112211",
        postalCode: 12345,
    }]
};

export const studentsReducer = createReducer(
    initState,
    on(Actions.callStudentsRecordsApiSuccess,(state:any,{ payload }:any) => ({...state,StudentsRecords:payload}))
);