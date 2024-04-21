let f = ["ff", "bb", "dd"];
let number = [1, 2, 3, 4];
let mixarray = [true, "hello", { name: "santhosh" }];

console.log("f", f);
console.log("number", number);
console.log("mixarray", mixarray);

let exm = new Array(f);
let old = Array(number);
let m = Array(mixarray);

old[2] = 100;

mixarray[20]=100;

console.log("mixarray",mixarray[10]);

console.log(exm);
console.log(old);
console.log(m);

//propertices of array:

console.log("mixarray",mixarray.length);
const length=mixarray.push(7000);
// mixarray.pop();
// mixarray.pop();
// mixarray.unshift(100);
// mixarray.shift();
// mixarray.shift();
// mixarray.shift();
// mixarray.shift();
const concatarray=mixarray.concat(f);
// console.log("concat",concatarray);
// console.log("mixarray",mixarray);
// console.log("mixarray",mixarray.length);

//slice
let sliarray=mixarray.slice(1,3);
// console.log("mixarray",mixarray);
// console.log("sliarray",sliarray);

//splice

let sliparray=mixarray.splice(1,1,"shan",2);
console.log("mixarray",mixarray);
console.log("sliarray",sliparray);

