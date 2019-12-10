import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCFO3OkAUsPN8aV34Gs33T-9ENqK16W570",
    authDomain: "attendace-721fa.firebaseapp.com",
    databaseURL: "https://attendace-721fa.firebaseio.com",
    projectId: "attendace-721fa",
    storageBucket: "attendace-721fa.appspot.com",
    messagingSenderId: "482240422760"
};

firebase.initializeApp(config);

const database = firebase.database();
// .ref('Attendance').set({
//     deviceID: 'faksdfkasdjfj3425435',
//     attendantName: 'Henok Dejen',
//     hr: 3,
//     minute: 4,
//     late: 40,
//     Date: '2018-09-12'
// })



const AttendantsTable = database.ref("Attendants");
const AttendanceTable = database.ref("Attendance");
const WeeklyAttendaceFormTable = database.ref("WeeklyAttendaceForm");
const SpecialAttendaceFormTable = database.ref("SpecialAttendaceForm");

export {
    AttendantsTable,
    AttendanceTable,
    WeeklyAttendaceFormTable,
    SpecialAttendaceFormTable
}