    // const profile = {
//     userName: "shradhakhapra",
//     posts: 195,
//     isFollow: false,
//     followers: 569,
//     Followings: 4,
// }

/*This is a code, that prints Symbol//
    let mySymbol =Symbol('description');
    console.log(mySymbol, typeof mySymbol);*/

//Arithmetic Operators/normal operator//
   /* let a = 5;
    let b = 2;
    console.log("a =",a, " & b = ", b);
    console.log("a+b=",a+b);
    console.log("a-b=",a-b);
    console.log("a*b=",a*b);
    console.log("a/b=",a/b);
    console.log("a%b=",a%b);
    console.log("a**b=",a**b); //5^2//
    console.log("a++=",a++);*/

    //Unary Operator//

    //Increment Operator//
    //++
    // let a = 5;
    // let b = 2;
    //console.log("a =", a, " & b = ", b);
    //a--;
    // console.log("a++ = ",a++);
    // console.log(a)


    // let a = 5;
    // let b = 2;
    // a **= 4;
    // console.log('a = ', a)

    // Comparison operator
    // let a = 5;
    // let b = 7;

    // console.log("a >= b", a<=b)


    // Logical operators

    // let a = 5;
    // let b = 4;

    // let cond1 = a > b;
    // console.log("!(a>b) = ", !(a>b));


    // Conditional Statements//

    
// let light = ("Green");

// if (light === "Red"){
//     console.log("STOP");
// } else if( light === "Green"){
//     console.log("Go");
// }




// if(age >= 21) {
//     console.log("You can get married");
// }
// if(age < 21) {
//     console.log("You cannot get married");
// }



// odd even number//

// let num = 10;
// if (num % 2 === 0) {
//     console.log(num," is even");
// } else {
//     console.log(num, "is odd");
// }

// syntax -> rules, grammar of Progamming//


// else if//

// let mode =  "dark";
// let color;

// if( mode === "dark"){
//     color = "black";
// } else if ( mode === "blue"){
//     color = "blue";
// } else if ( mode === "pink"){
//     color = "pink";
// } else {
//     color = "white"
// }
// console.log(color);

// if( mode === "dark") console.log(mode);     

// let age = 25;
// let result = age >= 18 ? "adult" : "not adult"; //simplee, compact if else//
// console.log(result)

// let num = prompt("Enter a Number:");

// if (num % 10 ===  0) {
//     console.log(num,"geda kha");
// } else {
//     console.log(num, " geda nakha");
// }

// let score = 85;
// let grade;
//     if ( score >= 90 && score <= 100){
//         grade = "A"
//     } else if( score >= 70 && score <= 89){
//         grade = "B"
//     } else if( score >= 60 && score <= 69){
//         grade = "C"
//     } else if( score >= 50 && score <= 59){
//         grade = "D"
//     } else if( score >= 0 && score <= 49){
//         grade = "F"
//         }
//         console.log("According to your scores ypur grade was :", grade);

//If it is 6am to 12pm: Good Morning!//
//If it is 12pm to 6pm: Good afternoon!//
//Otherwise: Good Evening//

// let hour = 20;
// if ( hour >= 6 && hour <= 12)
//     console.log("Good Morning!")

// else if( hour >= 12 && hour <=18 )
//     console.log("Good afternoon!");

// else 
//     console.log("Good Evening!");

//pass/fail check//



//prashan maharjan le gareko code//
// let passMark = 35;
// let list = [
//     {
//         name: 'Ramesh',
//         marks: 50
//     },
//     {
//         name: 'Raju',
//         marks: 30
//     },
//     {
//         name: 'Hari',
//         marks: 60
//     },
//     {
//         name: 'Krishna',
//         marks: 25
//     }
// ]
// pass = list.filter(item => item.marks >= passMark);
// nameFilter = pass.map(user => user.name)
// console.log('Passed students : ', nameFilter);
// fail =list.filter(item => item.marks < passMark);
// nameFilter2 = fail.map(user => user.name)
// console.log('Failed students : ', nameFilter2);


//Lecture 3/

// console.log("Santosh Paudel")
// console.log("Santosh Paudel")
// console.log("Santosh Paudel")
// console.log("Santosh Paudel")
// console.log("Santosh Paudel")

//print 1 - 5

// for ( let i=1; i<=5; i++){
//     console.log("i = ", i)
// }
// console.log(i);

// for ( let x = 1; x<=6; x++){
    // console.log("Hello my friend");
// }

// for (let goru =1; goru<=10; goru++){
//     console.log("Goru le khana");
// }

// for(let me = 1; me<=5; me++){
//     console.log("I am a good guy");
// }
// console.log("The loop has ended")
// }
// console.log("Loops has ended")

//calculate the sum of 1 to n//
// let sum = 0;
// for (let i = 1; i<=5; i++){
//     sum = sum + i;
// }
// console.log("sum =", sum);

// Calculate sum of 1+5//
// let sum = 0;
// for( let i=1; i<=5; i++){
//     sum = sum +i;
// }
// console.log(sum);
// let i = 1;
// while (i<=10){
//     console.log("santosh paudel");
//     i++;
// }
// console.log(i);

// let i = 1;
// do {
//     console.log("i=", i);
//     i++;
// }while(i<=5);

//let's write a for off loop

// let str = "Santosh Paudel"; //iteraroe->characters
// let size = 0;
// for(let val of str){
//     console.log("val =", val);
//     size++;
// }
// console.log("size = ", size);

//for in loop//

// let student = {
//     name: "Santosh Paudel",
//     age: 25,
//     cgpa: 3.5,
//     isPass: true, 

// }; 
// for (let key in student){
//     console.log("Key = ", key, "value = ",  student[key]);
// }


// //practice 1//

// for ( let num = 0; num<=100; num++){
// 	if(num%2!==0){
// console.log(num)
// 	}
// }


//practice 2//

// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
//    userNum =  prompt("You have guessed the wrong number. Guess again: ");
// }
// console.log("Congratulations! You have guessed the correct number");


//strings in JS

// let str = "Santosh Paudel";
// let str2 = 'Santosh Paudel';
// console.log(str[0]);


// let brother = "Santosh Paudel";
// console.log(brother[1]);

//Template litterals//

// let specialstring = `This is Santosh Paudel`;
// console.log(typeof specialstring);

// let obj = {
//     item: "Pen",
//     price: 10,
// };

// let obj = {
//     schoolName: "Shree Krishna LHS",
//     address: "Kathmandu",
//     phone: 1234567890,
// };
// let output = `The name of the school where i study is ${obj.schoolName}, it is located in ${obj.address}, and the phone numbeer is ${obj.phone}`;
// console.log(output);

// let thegana = {
//     name: "Santosh Paudel",
//     address: "Kathmandu",
//     phone: 1234567890,
// }
// let output = `My name is ${thegana.name}, i live in ${thegana.address}, and my phone number is ${thegana.phone}`;
// console.log(output);
// let str = "Santosh Paudel";
// console.log(str.length);

//string methods in JS

// toUpperCase//

// let str = "Santosh Paudel";
// str = str.toUpperCase();
// console.log(str);

// toLowerCase//

// let str = "Santosh Paudel";
// str = str.toLowerCase();
// console.log(str);

//trim//

// let str = "       Santosh Paudel        ";
// console.log(str.trim());

//slice//
// let str1 = "Santosh paude";
// console.log(str.slice(0, 5));

//concat
// let str1 = "Santosh";
// let str2 = "Paudel";
// let result = str2.concat(str1);
// console.log(result);

//replace//

// let str = "Santosh";
// console.log(str.replace("Santosh", "Paudel"));

// character at//

// let str = "IloveJS";
// str = str.replace("I", "S");
// console.log(str);


// let fullName = prompt("Enter your username: ");
// let userName = "@" + fullName + fullName.length;
// console.log(userName); 


//
// let array = [1,8,7,56,100,90]
// function largest(array){
//     let max = 0;
//     for(let i = 0;i<array.length;i++){
//         if(max<array[i]){
//             max=array[i]
//         }
    
//     }
//     console.log(max)
// }
// largest(array)


// chapter-4
// ARRAYS
// let marks = [10,20,30,40,50]
// console.log(marks.length);

// let heroes = ['rajesh hamal', 'nikhil upreti', 'dilip rayamajhi']
// heroes[2]="Santosh Paudel"
// console.log(heroes);

// let gameName = [10, 20, 30, 40, 50, 60]
// for(let i=0; i<gameName.length; i++){
//     console.log(gameName[i]);
// }

//array method example//
// let girlNames = ['sarmila', 'sirjana', 'susmita', 'ramila', 'gamila', 'khamila']
// for(let girlName of girlNames){
//     console.log(girlName);
// }
// let marks = [10, 20 ,30 ,40 ,50 ,60 ,70 ,80 ,90]
// let sum = 0;
// for(let mark of marks){
//     sum += mark 
// }
// let avg = (sum / marks.length);
// console.log(`The average marks of the studet is ${avg}`);

//pt2
// let prices = [250, 645, 300, 900, 50]
// for( let i = 0; i<prices.length; i++){
//     let finalPrice = prices[i] / 10;
//     prices[i] -= finalPrice
// }
// console.log(prices);

//push, pop, delete//
// let foodItems = ['banana', 'potato', 'litchee', 'jackfruit']
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("The fruit that was deleted is " + deletedItem);
// console.log(foodItems.toString());

//concat
// let marvelHeroes = ['thor', 'spiderman', 'ironman'];
// let dcHeroes = ['superman', 'batman'];

// let nepaliHeroes = ['hamal', 'upreti']
// let heroes = marvelHeroes.concat(dcHeroes, nepaliHeroes);
// console.log(heroes);

//shift
// let marvelHeroes = ['thor', 'spiderman', 'ironman'];
// let val = marvelHeroes.shift();
// console.log(marvelHeroes);

//slice: returns a piece of the array
// let marvelHeroes = ['thor', 'spiderman', 'ironman', 'antman', 'drstrange'];
// console.log(marvelHeroes.slice()); //sometime this is used to copy the original array/

//splice//
// let marvelHeroes = ['thor', 'spiderman', 'ironman', 'antman', 'drstrange'];
//splice method is used to change the original array, to delete, replace,change anything/
//splic(startidx, delCount, newEl)


// functions & methods

// function Definition

// function functionName(){
//     //writhe the code
// }

//function call/to invoke

//functionName()

// function myFunction(){
//     console.log("Hello Guys")
// }
// myFunction();

// function myFunction(msg){

//     //parameter//
//     alert(msg);
// }
// myFunction("Hello")
//arguement


// function myFunction(b, c){  //b and c act as a local variables
//     a = b + c;
//     return a
// }
// myFunction(5, 4);
// console.log(a);

// arrow function

// function functionAdd (a, b){
//     return a + b
// }
// console.log(functionAdd(1, 2));


// const functionSum = (a, b) =>{
// return a + b;
// }
// console.log(functionSum(1, 2));

// const multiValue = (a, b) =>{
//     return a * b;
// }
// console.log(multiValue(5, 2));

//practice
// function letsDoThis(action){
//     return action;
// }
// console.log(letsDoThis("a, e, i, o, u"));

// const letsDo = (action) => {
//     return action;
// }
// console.log(letsDo("a, e, i, o, u"));


// function countVowels (str){
// let count = 0;
// for(let char of str){
//     if(
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"

//     ){
//         count++;
//     }
    
// }
// console.log(count);
// }
// countVowels("Hello");


// const countVowels = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(
//             char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         ){
//             count ++
//         }
//     }
//     console.log(count);
// }
// countVowels("Hello");


// let Array = ["Santosh", "Sharmila", "Sandeep", "Hello", "World"];
// Array.forEach(function printVal(val){  //val = value at each index
// console.log(val.toLowerCase());   
// })

// Array.forEach((val)=>{
//     console.log(val.toUpperCase());
// });


// let array = [2, 3, 4, 5, 6];
// array.forEach(function printSquare(val){   // you can pass val index array, 3 parameters inside the forEach method
//     console.log(val * val);
// })
// array.forEach((val) =>{
//     console.log(val * val);
// })


//forEach
//arr.forEach (callBackFunction)
//a call back is a function passed as an arguement

//map method//foreach is used for simple calculations, whereas map is used to create new array//
// let nums = [1, 2, 3, 4, 5, 6];
// let newArray = nums.map((val) =>{
//    return val * 2; 
// })
// console.log(newArray);

//filter method//
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let newNums = nums.filter((val) => {
//     return val % 2;
// });
// console.log(newNums);

// let nums = [1, 2, 3, 4, 5, 6, 7];
// let newOne = nums.filter((val)=>{
// return val > 4;
// });
// console.log(newOne);


//reduce
//performs some operations and reduces the array to a single value. It returns that single value
// let nums = [1, 2, 3, 4, 5, 101, 6, 7];
// const outPut = nums.reduce((prev, curr) =>{
//  return  prev < curr ? prev : curr;
// })
// console.log(outPut);

// practice
// let marks = [87, 88, 90, 95, 100, 101, 65, 32, 69];
// let result = marks.filter((val) => {
//     return val > 90;
// });
// console.log(result);

// let userInput = parseInt(prompt("Enter a number"));
// let number = [];
// for(let i=1; i<=userInput; i++){
//     number[i-1]=i;
// }
// console.log(number);

// practice

// let array = [2, 4, 6, 8, 10, 12]
// let result =array.reduce((prev, curr)=>{
//     return prev * curr;
// })
// console.log(result);





//DOM manipulation
// const changeElement = document.getElementById('title');
// changeElement.innerHTML = "Hello this is Artificial intelligence";

// const changeHeading = document.getElementById('title');
// changeHeading.innerText = 'Vegetables';


// const changeElement = document.querySelector('h2');
// changeElement.innerText = 'From Nepal'

// let changeTheName = document.getElementsByClassName('box');
// let idx = 1;
// for(div of changeTheName){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }

// DOM PART 2

// let divs = document.querySelector("div");
// console.log(divs);
// let id = divs.getAttribute("id")

let para = document.querySelector("div");
para.getAttribute("class");



