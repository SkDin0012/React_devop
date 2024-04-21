//call by value example:

function numd(value) {
  value = 200;
  console.log("value", value);
}

let b = 10;
numd(b);

function chnageobj(obj) {
 console.log(obj);
  obj.country="india";
  console.log("obj",obj);
 obj=700;
  console.log("obj",obj);

}
 let person={name:"santh",age:20};
 chnageobj(person);
 console.log("details",person);

