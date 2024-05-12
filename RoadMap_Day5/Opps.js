//object literal

// const p={
//     name:'san',
//     age:24
// };

// //Object.create method

// const s=Object.create(p);
// console.log("s",p);
// console.log("s",s);

//

// const Person={
//     name:"san",
//     greet: function(){
//       console.log("the person",this.name);
//     },
// };

// console.log("ss",Person);

// const sPerson={
//     name:"san",
//     greet: function(){
//       console.log("the person",this.name);
//     },
// };
// console.log("ss",sPerson);

// Factory Function(design patterns)

// function ssPerson(name1){
//     return{
//         greet: function(){
//             console.log("the person",name1);
//           },

//     };
// }
// const p1=ssPerson("san");
// console.log(p1);
// const p2=ssPerson("san");

//constructor functions

function Person(name){
    this.name=name;
   greet=function(){
    console.log("the person",name);

    }
}
 const p1=new Person("san");
 const p2=new Person("san");

 console.log("P1:",p1);
 console.log("P2:",p2);


