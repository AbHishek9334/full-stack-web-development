//  function countWords(str){
//     const words=str.split("");
//     const map=new Map();
//     for(let word of words){
//         if(map.has(word)){
//             map.set(word,map.get(word)+1);
//         }
//         else{
//             map.set(word,1);
//         }
//     }
//     return map;
//  }
//  const sentense="i am xyz. i am learning web development from pw skills";
//  console.log(countWords(sentense));
// const array1=[10,20,30,20,40,40,50,30];
// const set1=new Set(array1);
// console.log(set1);

// function swap(a,b){
//     [a,b]=[b,a];
//     return [a,b]
// }
// let x=1;
// let y=2;
// [x,y]=swap(x,y);
// console.log(x,y);
// function extract(arr){
//     const [first,second,,,last]=arr;
//     return [first,second,last]
// }
// const array=[1,2,3,4,5,6]
// console.log(extract(array));
// console.log(Math.max(1,2,3,4,5,6));
// function maxmin(array1){
//     const obj1={
//         max1:Math.max(...array1),
//         min:Math.min(...array1),
//     }
//     return obj1;
// }
// const array1=[10,20,30,40,50];
// console.log(maxmin(array1));
const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  function extractData(obj){
    const{
        name,address:{street},
    }=obj;
    return{name,street};
  }
  console.log(extractData(person));