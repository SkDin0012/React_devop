//Aysnc

// const p1 = new Promise((resolve) => {
//   setTimeout(()=>{
//       resolve("hellword");
//   },1000);
// });

//  function greate(){
//     p1.then((res)=>{
//       console.log(res);
//     });

//     console.log("the value");
//  }
// const ressult=greate();
// console.log(ressult);

// async function greate() {
//         p1.then((res)=>{
//       console.log(res);
//     });

//   //    return p1;
//   return "the value";
// }

// const result = greate().then((res1)=>{
//     console.log(res1,"In then value as");

// });
// console.log(result);

// async wait concepts

// const p1 = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("hellword");
//     },10000);
//   });

//   const p2 = new Promise((resolve) => {
//     setTimeout(()=>{
//         resolve("the testting p1");
//     },20000);
//   });

// async function greate() {
//   const res = await p1;
//   // return res;
//   console.log(res);

//   const res1 = await p2;
//   // return res;
//   console.log(res1);
//   console.log("testing");
// }
// const result = greate();
// console.log(result);
// console.log("the testing");

// (async ()=>{
//     const result=await fetch("https//jsonplaceholder.typicode.com/posts").then((res)=>{
//         console.log(res);
//     }
//     );
//     console.log(result);
// })();

// ((urls)=>{
//     try{
//     const Promises=urls.map((url)=>fetch(url));
//     console.log(Promises);
//     Promise.all(Promises).then((res)=>{
//         Promise.all(res.map((ele)=>ele.json())).then((res)=>console.log(res
//     });
//  } catch(error){}
// })([

//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments"
// ]);

// ( async(urls)=>{
//     try{
//     const Promises=urls.map((url)=>fetch(url));
//     console.log(Promises);
//     const r=await Promise.all(Promises);
//     const Promises2=r.map((ele)=>ele.json());
//     const r2= await Promise.all(Promises2);
//     console.log(r2);
//  } catch(error){}
// })([

//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments"
// ]);

// (async (urls) => {
//   try {
//     const Promises = urls.map((url) => fetch(url));
//     console.log(Promises);
//     const r = await Promise.all(Promises);
//     const Promises2 = r.map((ele) => ele.json());
//     const r2 = await Promise.all(Promises2);
//     console.log(r2);
//   } catch (error) {}
// })([
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments",
// ]);
