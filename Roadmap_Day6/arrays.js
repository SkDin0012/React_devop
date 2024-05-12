//Map concepts

// const map= new Map();

// map.set("IN","india");
// map.set("USD","unite states of Ameraia");
// map.set("IN","Chennai","IND");

// console.log(map);

// const obj={
//     name:"san",
//     age:24
// }


//for of

// for(var [key,value] of map){
//     console.log(key,"",value);
// }

//for in

// for(var key in obj){
//     console.log(key);
// }


//get method:

// fetch("../arrays/data.json").then((r)=>r.json()).then((data)=>{

//     const details=data.filter(c=>c.postion==="Systems Engineer");
//     console.log(details);

//     const countryetails=data.filter(c=>c.country==="india");
//     console.log(countryetails);

//     const populationdeatils=data.filter(c=>c.population>200000);
//     console.log(populationdeatils);


//     details.forEach(c => {

//         console.log("Name",c.name);
//         console.log("skills",c.skils);
        
//     });

// }).catch(error=>console.error("the error data",error))



// async function  details(){
//     const data= await fetch("../arrays/data.json");
//     const result=await data.json();
//     console.log(result);
// }
//  const dats=details();
//  console.log(dats);
  

//reduce methods:


// const vabe=[1,2,3,4,5,6,7,8,9];

// const result=vabe.reduce((area,current)=> {

//     console.log("area",area);
//     console.log("current",current);

//    return area+current;
// })

// console.log("value",result);


//some//ever

const arr=[120,13,24,95,56];

// const o=arr.some((ele)=> ele>90 && ele<100);

// console.log(o);

const bill=arr.every((ele)=> ele>90 && ele<100);
console.log(bill);

