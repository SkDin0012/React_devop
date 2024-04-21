//ajax concepts:
// get Methods:
// const sender= new XMLHttpRequest();
// sender.open("GET","https://reqres.in/api/users");
// sender.responseText='json';
// sender.onload=function(){
//     // console.log(JSON.stringify(JSON.parse(sender.response)));
//     console.log(sender.response);
// };
// sender.send();

// POST Method:

const sender= new XMLHttpRequest();
sender.open("POST","https://reqres.in/api/users",);
sender.responseText='json';
sender.onload=function(){
    // console.log(JSON.stringify(JSON.parse(sender.response)));
    console.log(sender.response);
};

let pp={
    "name": "morpheus",
    "job": "leader"
}
sender.send(JSON.stringify(pp));


    
