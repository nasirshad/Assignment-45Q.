"use strict";
// var nam : string = "MY Name Is Nasir Shad";
// console.log(nam);
//Question No.6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name_Sapces = "\t\n    Zoohan Nasir    \n\t";
console.log("Name with white Space is = ", name_Sapces);
let strip_Name = name_Sapces.trim();
console.log("Stripped Name: ", strip_Name);
