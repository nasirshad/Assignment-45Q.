"use strict";
let nam = "My Name Is Nasir Shad,I Have Started Leraning TypeScript";
console.log(nam);
//Question No.14
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//	• Start with your program from Exercise 14. Add a print statement at the end of your program stating 	the name of the guest who can’t make it.
//	• Modify your list, replacing the name of the guest who can’t make it with the name of the new person 	you are inviting.
//	• Print a second set of invitation messages, one for each person who is still in your list.
let dinnerList = ["Huzaifa sb,", "Majid Sb,", "Tahir Sb", "Azeem Sb, "];
for (let index = 0; index < dinnerList.length; index++) {
    const element = dinnerList[index];
    console.log("Hello", element, "I am pleased to invite you for Dinner 9Pm tonight ");
}
console.log("Mr.", dinnerList[0], "is not participating the dinner tonight ");
dinnerList.splice(0, 1);
dinnerList.push("Mohsin Sb,", "Akram Sb");
console.log("List of new Participants", dinnerList);
for (let index = 0; index < dinnerList.length; index++) {
    const element = dinnerList[index];
    console.log("Hello", element, "I am pleased to invite you for Dinner 9Pm tonight ");
}
