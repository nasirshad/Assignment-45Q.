"use strict";
// let saq: string ="My Name Is Nasir Shad,I Have Started Leraning TypeScript";
// console.log(saq);
Object.defineProperty(exports, "__esModule", { value: true });
// 29.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// .	
let userNames = ["Admin", "Huzaifa", "Saqib", "Umar"];
for (let index = 0; index < userNames.length; index++) {
    var element = userNames[index];
    userNames.splice(0, 4);
    if (element = userNames[index]) {
        console.log("Welcome Sir..", element);
    }
    else {
        console.log("We need to find some users");
    }
}
