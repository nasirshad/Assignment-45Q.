// var nam : string = "MY Name Is Nasir Shad";
// console.log(nam);


//question no 3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string="Rizwan Saqi"
var lowerpersonname=personName.toLowerCase()
console.log(lowerpersonname);

let personName1:string="Ali Hasssan"
let uppercase=personName1.toUpperCase()
console.log(uppercase);

var friends:string="umair asghar saqi bilal huzaifa akhtar naeem zoohan aslam aima"
var arrayofFriends:string[]=friends.split(" ")
var tiTlecaseFriends:string=""
for (let i = 0; i < arrayofFriends.length; i++) 
{
tiTlecaseFriends+=arrayofFriends[i].charAt(0).toUpperCase()+arrayofFriends[i].slice(1).toLowerCase()+" ";
    
}
console.log(tiTlecaseFriends);