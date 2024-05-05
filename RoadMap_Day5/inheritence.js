// const hh = {
//   // h:10,
//   // w:90,
//   greet: function () {
//     console.log("i am a full stak");
//   },
// };

// const sh = {
//   name: "san",
//   __proto__: hh,
// };

// const Ani={
//     eat: function(){},
// };

// const D={
//     b:"la",
// };

// console.log(hh);
// console.log(sh);
// console.log(Ani);
// console.log(D);

//setPrototypeof method

// const hh = {
//   // h:10,
//   // w:90,
//   greet: function () {
//     console.log("i am a full stak");
//   },
// };

// const su={};

// Object.setPrototypeOf(su,hh);
// console.log(su);

//factory function

// function ssPerson(name1){
//     return{
//         name1,
//         greet: function(){
//             console.log("the person",name1);
//           },

//     };
// }
// const p1=ssPerson("san");
// const p2=ssPerson("san");

//constructor function

// function Person(name){
//     this.name=name;
//    this.greet=function(){
//     console.log("the person",name);

//     }
// }
//  const p1=new Person("san");
//  const p2=new Person("san");

//  function Person(name){
//     this.name=name;
// }

// Person.prototype.greet=function(){
//     console.log("the person",name);
// }
//  const p1=new Person("san");
//  const p2=new Person("san");


//templeteliterals

// function sname(string,fname,lname){
//     return `${string[0]} ${fname}  ${lname}`
// }

// const completed=sname(`hi`,"san","mmm");
// console.log(completed);

//rest operator
