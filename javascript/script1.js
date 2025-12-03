// Q1 Count how many numbers between 1 and 15 are greater than 8.  Loop and count conditionally.

// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     count++;
//   }
// }
// console.log(count);

//Q2.  Ask user for password and print access status Hardcoded correct password. Compare with user input.

// let correctPassword = "mypassword";
// let userPassword = prompt("Please enter your password:");
// if (userPassword === correctPassword) {
//   console.log("Access granted");
// } else {
//   console.log("Access denied");
// }


//Q3.  Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// for (let i = 0; i <2; i++) {
//     let correctPassword = "mypassword";
//     let userPassword = prompt("Please enter your password:");
//     if (userPassword === correctPassword) {
//         console.log("Access granted");
//         break;
//     } else {
//         console.log("Access denied");
//     }
// }

//Q4 .  Ask user for words until they type “stop”. Count how many times they typed “yes” Loop until "stop" is typed. Count "yes".

// let yesCount = 0;
// while (true){
//     let userinput=prompt("Please enter a word:");
//     if(userinput==="stop"){
//         console.log("You typed 'yes' " + yesCount + " times.");
//         break;
//     }
//     else if(userinput==="yes"){
//         yesCount++;
//     }
// } 

//Q5. Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

// for(let i=1; i<=50; i++){
//     if(i%7===0){
//         console.log(i);
//     } 
// } 

//Q6. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

// let sum=0;
// for(let i=1; i<=30; i++){
//     if(i %2=== 1){
//         console.log(i);
//     sum+=i

//     };
// }
// console.log("Sum of odd numbers from 1 to 30 is: " + sum);

//Q7. Keep asking number until user enters an even number Use while loop. Stop only if input is even.

// while(true){
//     let userinput=prompt("Please enter a number:");
//     if(userinput %2===0){
//         console.log("You entered an even number: " + userinput);
//         break;
//     }
//     else{
//         console.log("That's not an even number. Try again.");
//     }
// } 

//Q8. Print numbers between two user inputs Input start and end using prompt() → print all between. 

// let start = +prompt("Enter the start number:");
// let end = +prompt("Enter the end number:");
// for( let i=start; i<=end; i++){
//     console.log(i);
// } 

// Q9. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints. 

// let oddCount = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         oddCount++;
//         if (oddCount === 3) {
//             break;
//         }
//     }
// } 

//Q10 Ask user 5 numbers. Count how many are positive Use loop + condition + counter.

// let positiveCount = 0;
// for (let i = 0; i < 5; i++) {
//     let userInput = +prompt("Please enter a number:");
//     if (userInput > 0) {
//         positiveCount++;
//     }
// }
// console.log("You entered " + positiveCount + " positive numbers."); 


//Q11 ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct Else → print “Insufficient balance”

// let balance = 1000;
// for (let i = 0; i < 3; i++) {
//     let withdrawalAmount = +prompt("Enter withdrawal amount:");
//     if(withdrawalAmount <= balance){
//         balance -= withdrawalAmount;
//         console.log("Withdrawal successful. Remaining balance: ₹" + balance);
//         if(balance === 0){
//             console.log("Your account is empty.");
//             break;
//         }
//     }
//     else{
//         console.log("Insufficient balance.");
//     }

//     }





// Advance js object and classes

// q1.  create a user object that stores name and email and has a login method which prints "user logged in"
// let user={
//     name:"koivd",
//     email:"kovid@gmail.com",
//     login:function(){
//         console.log("user logged in");
//     }
// };
// user.login();

//q2. imagine you have now 5 users , first , think how you would manage them without using class. then convert the same login using a class and oobserve how the code becomes cleaner. write code for both approaches.
// Without class
// let user1={
//     name:"koivd",
//     email:"kovid@gmail.com",
//     login:function(){
//         console.log("user logged in");
//     }
// };
// let user2={
//     name:"koivd",
//     email:"kovid@gmail.com",
//     login:function(){
//         console.log("user logged in");
//     }
// };
// let user3={
//     name:"koivd",
//     email:"kovid@gmail.com",
//     login:function(){
//         console.log("user logged in");
//     }
// };
// let user4={
//     name:"koivd",
//     email:"kovid@gmail.com",
//     login:function(){
//         console.log("user logged in");
//     }
// };
// let user5={
//     name:"koivd",
//     email:"kovid@gmail.com",
//     login:function(){
//         console.log("user logged in");
//     }
// };

// with classes

// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     loggedIn() {
//         console.log("user logged in");
//     }
// }
// let user =new User("kovid","kovid@mail.com");
// let user1 =new User("harsh","kovid@mail.com");
// let user2 =new User("gandu","kovid@mail.com");


//q3. creats a product object that stores name and price and has a method which returns the final price after discount.
//  let product={
//     name:"laptop",
//     price:50000,
//     discountedPrice:function(){
//         this.price-200;
//         return this.price;
//     }
//  }
//  console.log(product.discountedPrice());

//q4. create a car class with the following: brand,speed, a drive method that prints the car brand and speed.

// class car{
//     constructor(){brand,speed
//     this.brand=brand;
//     this.speed=speed;
//     }
//     drive(){
//         return(this.brand + " is driving at " + this.speed + " km/h");
//     }
// }
//  let car1= new car("bmw",120);

//q5. create two diffrent car objects from the same class and verify that thier data is disfferent 
// class car{
//     constructor(){brand,speed
//     this.brand=brand;
//     this.speed=speed;
//     }
//     drive(){
//         return(this.brand + " is driving at " + this.speed + " km/h");
//     }
// }
//  let car1= new car("bmw",120);
// let car2= new car("audi",150);

//q6. create a student class whose constructer accepts name and roll number .add a method introduce that prints both values.
 
// class Student{
//     constructor(name, rollNumber){
//         this.name=name;
//         this.rollNumber=rollNumber;
//     }
//     introduce(){
//         console.log(this.name+" "+this.rollNumber);
//     }
// };
// let student1=new Student("kovid",101);
 // if we dont write this method inside the class it will give error undefined

//q7. create an object with two methods : one methhos using a normal function and one method using an arrow function , inside both , print this and observe the difference.

// let obj={
//     sayName:function(){
//         console.log(this);// normal function 'this' refers to the object itself
//     },
//     sayArrowName:()=>{
//         console.log(this); // arrow function does not have its own 'this', it takes 'this' from the surrounding context
//     }
// }
// obj.sayName();
// obj.sayArrowName();

//q8. create a user constructer function(do not use class syntax): add login method in two ways: first, inside the constuctor , then move the method to the prototype.
// function User(){
//     this.name="kovid";
//     // this.login=function(){
//     //     console.log("user logged in");
//     // }
// }
// User.prototype.login=function(){
//     console.log("user logged in");
// }
// let an1=new User();

//q9. create two user objects and compare thier login methods using equality. explain why the result is true or false.
// function User(name){
//     this.name=name;
//     // this.login=function(){
//     //     console.log("user logged in");
//     // }
// }
// User.prototype.login=function(){
//     console.log("user logged in");
// }
// let an1=new User("harsh");
// let an2=new User("aman");

// if we compare an1.login and an2.login using equality operator (== or ===), the result will be true because both an1 and an2 share the same login method from the User prototype.
// if we had defined the login method inside the constructor (uncommenting the this.login part), then each instance would have its own copy of the login method, and comparing an1.login and an2.login would result in false.




