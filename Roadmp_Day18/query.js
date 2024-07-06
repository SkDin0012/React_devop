//abort concepts

// const cont=new AbortController();
// const signal= cont.signal;
// const url="https://jsonplaceholder.typicode.com/comments";

// const fetchComments = async () => {
//     try{
//       const res=  await fetch(url,{signal})
//       const com=await res.json();
//       console.log(com);

//     }catch(error){
//         console.log(error);
//     }
// };
// fetchComments();
// setTimeout(function(){
//     cont.abort();
// },3000);

// strict and call Methods:
// function a() {
//   const s = {
//     a: 10,
//     x: () => {
//       console.log(this.a);
//     },
//   };
//   console.log(s1);
// }
// const s1 = {
//   a: 20,
// };
// a();
// const result=s.x.apply(s1);
// result();
// s1.x();

function a(){
    console.log(this);
    const x=()=>{
        console.log(this);;
    };
    x();
}
a();
