
// //Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isFinite(2 / 0); // false
// Number.isFinite(20 / 5); // true
// Number.isFinite(0 / 0); // false

// //Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.isInteger(999999999); // true
// Number.isInteger(0.2);       // false
// Number.isInteger(Math.PI);   // false

// //Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseFloat('10') // 10
// Number.parseFloat('10.00') // 10
// Number.parseFloat('238,21') // 238
// Number.parseFloat('237.22') // 237.22
// Number.parseFloat('34 56 78') // 34
// Number.parseFloat(' 37 ') // 37
// Number.parseFloat('18 is my age') // 18

// //Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.parseInt('10') // 10
// Number.parseInt('10.00') // 10
// Number.parseInt('238,21') // 238
// Number.parseInt('237.22') // 237
// Number.parseInt('34 56 78') // 34
// Number.parseInt(' 37 ') // 37
// Number.parseInt('18 is my age') // 18

// //Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// var numberObject = 1234.56789;

// numberObject.toFixed(); // '1235'
// numberObject.toFixed(1); // '1234.6'
// numberObject.toFixed(6); // '1234.567890'


// //Chuyển đổi và trả về số đã cho dưới dạng chuỗi
// (11).toString();    // '11'
// (18).toString();     // '18'
// (17.3).toString();   // '17.3'

// // Array methods
// //1.toString
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ]
// console.log(languages.toString())

// //2.join
// console.log(languages.join(''));

// //3.concat
// var arr2 = ['C++','C#']
// console.log(languages.concat(arr2));

// //4.splice XÓA phần tử update trả về phần tử xóa//=0 sẽ thêm
// console.log(languages.splice(1,1));

// console.log(languages.splice(1,0,"Java"));
// console.log(languages);
// //5.slice
// console.log(languages.slice());

// function getName(name){
//     return "xin chào" +" "+ name;
// }
// //
// console.log(getName("abc")); 

// function name(params){
//     // console.log(params);
//     params()
// }

// name(function log(){
//     console.log(9999);
// })

function multiply(a,b, callback){
    var result = a * b;
    callback(result);
}
// function printResult(result){
//     console.log('Result is:' + result);
// }

// multiply(5,10, printResult)

// //Làm việc với mảng
// //1.forEach
// var arr = ['A','B','C']

// const arr2= arr.map(function (value,index,array){
//     console.log((value,index,array));
//     return `${value}~`;
//  })
//  console.log(333,arr2);

//find trả về giá trị đầu
//  var arr = [7,9,6,10,11];
//  const arr2 =  arr.find(function(value){
//     return value>788;
//  })
//  console.log(111,arr2);

 //SOME trả về true nếu có 1 ptu thỏa mãn và false nếu k phần tử nào

 //FIND
//  var arr = [7,9,6,10,11];
//  const arr3 =  arr.every(function(value){
//     return value>8;
//  })
//  console.log(111,arr3);

//  //REDUCE
//  var arr = [7,9,6,10,11];
//  const arr4 =  arr.reduce(function(value){
//     return value>8;
//  })
//  console.log(111,arr3);

//////////////////////////Làm việc với Object////////////////////////////
// var myinfo = new Object()
//     myinfo.name = 'A';
//     myinfo.age = 20;

// // cách lấy giá trị
// console.log( myinfo.name);
// myinfo.name;
// myinfo["age"];

// //Object Constructor
// function Person(name, age, method){
//     this.name = name;
//     this.age = age;
//     this.method = method;
// }

// const user = new Person('Nguyen Tuan Duong', 21,function(){
//     console.log("Run");
// })
// const user2 = new Person('Nguyen Tuan Duong', 24,function(){
//     console.log("Run");
// })

// console.log(user.avatar);
// console.log(user2);

// //////////////////////////////Prototype/////////////
// Person.prototype.avatar = 'String';


// TRY - CATCH
try {
    //code block có thể gây ra lỗi
    var x = y+10;
} catch (exception) {
    //code block được thực thi khi xảy ra lỗi,
    console.log(exception.name + ':' + exception.message);
}finally{
    //
    console.log('Try-catch');
}