1. 
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is false

 syntax:

  condition ? expression_if_true : expression_if_false;


code:


let number = 10;
let result = (number % 2 === 0) ? "even" : "odd";

console.log(result); 
 ************************************************************

 2. 
 
 The comma operator in JavaScript allows you to include multiple expressions in a single statement. It evaluates each expression from left to right and returns the value of the rightmost expression. It is often used in places where multiple expressions are syntactically required but only one value is needed.


 code:
   
 
 let x=10, y=20;
 
 x++ , y++;
 console.log(x)

 console.log(y)
*******************************************************
 3.



 let number = 8;

let result = (number > 0) ? "positve": (number < 0) ? "negative" : zero;
console.log('the number is' ${result});

**************************************************************
4.
 

let age = 20

 let result = (age < 18) ? “You cannot vote” : “You can vote”;































 
