// let saq: string ="My Name Is Nasir Shad,I Have Started Leraning TypeScript";
// console.log(saq);


// 36.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(cty:string,ctry:string)
{
    console.log(cty,"is in",ctry)
}
describe_city("Karachi","Pakistan")
console.log("**************")

function describe_city1(cty:string)
{
    var ctry:string="Pakistan"
    console.log(cty,"is in",ctry)
}
describe_city1("Sahiwal")
describe_city1("Faisalabad")
describe_city1("Lahore")
describe_city1("New York")