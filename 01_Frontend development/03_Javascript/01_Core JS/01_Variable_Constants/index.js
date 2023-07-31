//use of var(old school way) 

// var name;    //declaration
// name="Mritunjay"     //initialization
// console.log(name);

// var name="Mritunjay"    //declaration + initialization
// console.log(name);

// name="Mritunjay"
// console.log(name);
// var name;

// var name="Mritunjay"
// console.log(name);
// var name="Jay"
// console.log(name);

// {
//     var name="jay"
//     console.log(name);
// }
// console.log(name);  //This is possible bcz var does not have scope

// var x=5;
// console.log(x*x);

// {
//     //var x=10;
//     x=10
//     console.log(x*x);
// }



// let (ES6)

// let name="Mritunjay"
// console.log(name);
// let name="Jay"  Redeclaration is not possible


// name="Mritunjay"
// console.log(name);
// let name;    //This is not possible

// Scope
// {
//     let name="Mritunjay";    //let has block scope
//     console.log(name);
// }
// console.log(name); ReferenceError: name is not defined


// const(ES6) : Makes the reference of the value constant

// This is not possible. 
// const name;
// name="jay"
// console.log(name);

// const name="Mritunjay"
// console.log(name);
// name="jay";
// console.log(name); Reassignment or redeclaration is not possible

// Constant Arrays
// const cars=["Audi","BMW","Breza"];
// console.log(cars);
// we can change the element of the array
// cars[0]="Nano"
// console.log(cars);

// We can add the element to the array
// cars.push("nano")
// console.log(cars);

// cars=["BMW","Audi"]
// console.log(cars);   This is not possible

// Constant Objects
const car={
    name:"Nano",
    color:"red"
}
console.log(car);
// We can change the property
// car.color="black"
// console.log(car);
// car.owner="Jay"
// console.log(car);

// car = {type:"Volvo", model:"EX60", color:"red"}; 
// console.log(car);    This is not possible