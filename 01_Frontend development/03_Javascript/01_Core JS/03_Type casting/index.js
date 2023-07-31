// Implicit type conversion
// let x=4
// let y=4.5
// let sum=x+y;
// console.log(sum);
// console.log(typeof sum);

/*
    sum=x(4.0)+y(4.5)
    Here, x will be converted to float from integer  
*/

// let name="Mritunjay"
// let age=22
// let nameAndAge=name+age
// console.log(name);
// console.log(typeof name);
// console.log(age);
// console.log(typeof age);
// console.log(nameAndAge);
// console.log(typeof nameAndAge);

/*
    In the above code age will be converted to string from number while concatenating
*/


// Explicit type conversion

// String()
// let num=20
// console.log(typeof num);
// let num1=String(num)
// console.log(num1);
// console.log(typeof num1);

// let bool=true
// console.log(bool);
// console.log(typeof bool);
// let boolStr=String(bool);
// console.log(boolStr);
// console.log(typeof boolStr);

// let obj={
//     name:"mritunjay",
//     age:22
// }
// console.log(obj);
// console.log(typeof obj);
// // let objStr=String(obj)  //[object Object]
// let objStr=JSON.stringify(obj)
// console.log(objStr);
// console.log(typeof objStr);
// let obj1=JSON.parse(objStr)
// console.log(obj1);
// console.log(typeof obj1);

// Number()
// Explicit conversion into number
// let num=Number(" 12 ");  // 12
// // console.log(num,typeof num);
// Number("-12.34");  // -12.34
// Number("\n");   // 0

// //null and indefined into a number
// Number(null);   // 0
// Number(undefined);  // NaN

// // Booleans into Number
// Number(true); // 1
// Number(false); // 0

// let num=12.22
// let num1=parseInt(num)
// console.log(num,num1,typeof num,typeof num1);
// let num2=parseFloat(num1)
// console.log(num2);

// Boolean()
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(-0));