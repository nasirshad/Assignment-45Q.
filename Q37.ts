// let saq: string ="My Name Is Nasir Shad,I Have Started Leraning TypeScript";
// console.log(saq);

// 37.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(cty:string,ctry:string)
{
return `"${cty}, ${(ctry)}"`
}
var pair=city_country("Lahore","Pakistan")
console.log(pair)