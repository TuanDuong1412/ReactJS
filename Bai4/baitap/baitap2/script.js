function array(array1,array2){
    // array1=[1,2,3,4,6]
    let min1 = array1[0];
    for (let i = 0; i < array1.length; i++) {
        if(min1 > array1[i]){
            min1 = array1[i]
        }
    }
    let max1 = array1[0]
    for (let i = 0; i < array1.length; i++) {
       if(max1 < array1[i]){
        max1 = array1[i]
       }
        
    }
    let min2 = array2[0];
    for (let i = 0; i < array2.length; i++) {
        if(min2 > array2[i]){
            min2 = array2[i]
        }
    }
    let max2 = array2[0]
    for (let i = 0; i < array1.length; i++) {
       if(max2 < array2[i]){
        max2 = array2[i]
       }
        
    }
    if (min1 > min2 && max1 < max2) {
       console.log("true");
    }else{
       console.log("false");
    }
    // console.log("True");
    
//     console.log("min 1:",min1)
//     console.log("max 1:", max1);
//     console.log("min 2:",min2)
//     console.log("max 2:",max2);
// 
}

array([1,4,6,7],[3,4,6,8])



// function maxElement(array){

//     //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
//     let max =  array[0];
//     let max_index= 0;   
//     /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
//     for (let i = 0; i < array.length; ++i) {
//         if (max < array[i]) { //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
//             max = array[i];
//             max_index =i;
//         }
//     }
//     console.log("max= ",max);
//     console.log("max_index= ",max_index);
// }

// let num = [5, 4, 7, 2, 8, 7, 3];

// maxElement(num);

// function minElement(array){

//     //Giả định vị trí số lớn nhất là số đầu tiên của mảng.
//     let min =  array[0];
//     let min_index= 0;   
//     /*So sánh từng số trong mảng với giá trị đầu tiên để tìm ra giá trị lớn nhất*/
//     for (let i = 0; i < array.length; ++i) {
//         if (min > array[i]) { //Thay đổi giá trị lớn nhất nếu tìm ra số lớn hơn
//             min = array[i];
//             min_index =i;
//         }
//     }
//     console.log("min= ",min);
//     console.log("min_index= ",min_index);
// }

// let num = [5, 4, 7, 2, 8, 7, 3];

// minElement(num);
function checkarray(array){
    let min = array[0]

}