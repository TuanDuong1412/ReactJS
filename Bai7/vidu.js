// 

// let a = getCount()
// console.log(a());
// function getCount() {
//     let count = 0;
//     return increase;

//     function increase() {
//         return (count +=1)
//     }
// }

// function Person(name,age) {
//     this.name= name;
//     this.age=age;
// }

// const duong = new Person("duong",21)
// console.log(11,duong);
// Arrow  FUNCTION -- khhong dung dc this
// let func = (name) => {
//     console.log(12212,name);
// }
// func('tuanduong')

//--------- OBJECT ----------------///////////

// const obj ={
//     a:3,
//     b:4,
// }
// const {a,b} = obj

// console.log(a);

// const arr = [1,2,3]
// const [d,e,f] = arr
// console.log(d,e,f);

// let arr1 = [1, 2, 3]
// let arr2 = ['a', 'b', 'c']
// let arr3 = [...arr1, ...arr2]

// console.log(arr3) // [1, 2, 3, "a", "b", "c"]

// let doSecond= ()=>{
//     console.log('Do second');
// }
// let doFirst = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         console.log('Do first');
//         resolve()
//     },500)
// })
// doFirst.then(doSecond)
// ////////////////////////////////////////////////
// ///////////////////////////////////////////////

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data fet")
//         },2000)
//     })
// }

// async function printData() {
//     const data = await fetchData();
//     console.log(data);
// }

// printData()


//================================ LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG --------------------------------
// Tính bao gói
// Tính kế thừa
// Tính đa hình

export class Animals{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    sing(){
        return this;
    }
}

const dog = new Animals("Begge",1)
console.log(dog);