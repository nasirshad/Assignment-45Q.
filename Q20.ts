// let sq : string ="My Name Is Nasir Shad,I Have Started Leraning TypeScript";
// console.log(sq);

// Question No.20
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let numbers:number[]=[3,7,8,9,13,18,19,410]
for (let index = 0; index < numbers.length; index++) {
    var  values = numbers[index];
    //console.log(numbers[19])// this will  cause and error/undefined value
    console.log(numbers[index])// this will print elements of array
}