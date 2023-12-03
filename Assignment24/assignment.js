//DOUBLE USING CALLBACK



function doubleArray(arr,callback){
    const doubleArr=arr.map((num)=>{
        return callback(num);
    })
    return doubleArr;
}
const originalArray=[1,2,3,4];
function callback(num){
    return num*2;
}
const doubleArray1=doubleArray(originalArray,callback);
console.log(doubleArray1);


//Manipulating the string


function manipulateString(inputString,callback){
    const manipulateString=inputString.toUpperCase();
    callback(manipulateString);

}
function logString(manipulateString){
    console.log(`The manipulated string is:${manipulateString}`);
}
manipulateString("hello,world!",logString);


//Age in days

const person={
    firstName:"Abhishek",
    lastName:"kumar",
    age:20
};
function ageInDays(personObject,callback){
    const fullName=`${personObject.firstName} ${personObject.lastName}`
    const ageInDays=personObject.age*365;
    callback(fullName,ageInDays)
}
function logResult(fullName,ageInDays){
    console.log(`The persons full name is ${fullName} and their age in days is ${ageInDays}`)
}
ageInDays(person,logResult);


//Arrange in alphabetical order


const books=[{
    title:"The Great Gatsby",
    author:"F Scott Fitygerald",
    year:1925
},
{
    title:"To kill a Mocking bird",
    author:"Harper Lee",
    year:1960
},
{
    title:"Who are You?",
    author:"George Orwell",
    year:1949
},
{
    title:"Pride and Prejudice",
    author:"Jams Austen",
    year:1813
}]
function logTitles(titles){
    titles.sort();
    console.log(titles.join(","));
}
function extractTitles(books,callback){
    const titles=books.map((book)=>book.title);
    callback(titles);
    
}
extractTitles(books,logTitles);


//Greeting Promise


function greet(name){
        return new Promise((resolve)=>{
            const greeting=`hello,${name}!`
            resolve(greeting);
        })
    }
    greet("Abhishek").then((message)=>console.log(message))



//fetch data asynchronously



async function fetchData(){
    const response=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data=await response.json();
    console.log(data);
}
fetchData();



//Multiple requests


 async function getCombineData(){
    const[data1,data2]=await Promise.all([fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json()),fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>response.json())]);
    const combineData={
        todo:data1,
        post:data2,
    }
    return CombineData
 }
 getCombineData().then((data)=>console.log(data));


 //get data from API and display data on browser console


 fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));


 //Error handling

 fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
    if(!response.ok){
        throw new Error("Network response was not ok");
    }
    return response.json();
 })


