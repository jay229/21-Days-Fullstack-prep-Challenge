// Assignment operator
// let a=1;
// let b=2;
// let c=3-(a=b+1);
// console.log(a); //3
// console.log(c); //0

// Chaining assignments

// let a,b,c;
// a=b=c=2+2;
// console.log(a);
// console.log(b);
// console.log(c);

// Modify-in-place

// let n=2
// n=n+5
// console.log(n);
// n=n*2
// console.log(n);

// This notation can be shortened using the operators += and *=
// n+=5
// console.log(n);
// n*=2
// console.log(n);


// Comparison operator

// == :  value comparison
// console.log(1==1);
// console.log(1=="1");

// ===  : value and type comparison
// console.log(1===1);
// console.log(1==="1");

// !=
// console.log(1!=2);
// console.log(1!="1");

// !==
// console.log(1!=="1");
// console.log(1!==1);

// < and >
// console.log(10<20);
// console.log(20>10);

// <= and >=
// console.log(10>=10);
// console.log(10<=10);

// Arithmetic operator

// +(addition/concatination)

// let a=10
// let b=20
// console.log(a+b);

// let f_name="Mritunjay";
// let l_name="Tiwari"
// console.log(f_name+" "+l_name);

// let num1="10";
// let num2="20"
// console.log(num1+num2);

// let result=(+num1+ +num2)
// console.log(result);

// -(subtraction)
// let a=10
// let b=4
// console.log(a-b);

// let a="10"
// let b="4"
// console.log(a-b);

// console.log("x"-"y");    NaN

// *(Multiplication)
// let a=3
// let b=2
// console.log(a*b);

// console.log("hello"*3);  NaN

// /(Division)
// let a= 10
// let b=2
// console.log(a/b);

// %(Remainder)
// console.log(10%3);

// **(Exponent)
// console.log(10**3);

// Logical operator

// && (and)

// let x=10
// let y=5
// console.log(x>=10 && y<10);

// ||(or)
// let x=10
// let y=5
// console.log(x>=10 || y>10);

// !
// let x=10
// let y=5
// console.log(x==y);
// console.log(!(x==y));

// Conditional (Ternary) Operator
// variablename = (condition) ? value1:value2 
// let age=20
// let result=age<18?"Too young":"old enough"
// console.log(result);

// The Nullish Coalescing Operator (??)
// The ?? operator returns the first argument if it is not nullish (null or undefined).
// Otherwise it returns the second argument.

// let name=null
// let text="name missing"
// let result=name ?? text
// console.log(result);

// Spread operator(...)
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[...arr1,...arr2]
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// const arr=[1,2,3,4,5,6]
// let numbers=[one,two,...rest]=arr
// console.log(numbers[0]);

