// function loadXMLDoc() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(xhttp.readyState == 4 && xhttp.status ==200){
//             console.log(3333,JSON.parse(xhttp.response));
//         }
//     };
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
//     xhttp.send();
// }
// // function fetchProducts() {
// //     fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
// //         res.json().then((data) => console.log(11,data));
// //     } );
    
// // }
// let limit = 5;
// let page = 1;
// function loading(params) {
//     console.log(11,params);
//     axios.get( `https://jsonplaceholder.typicode.com/users?_limit=${params.limit}&_page=${params.page}`)
//     .then((res)=>{
//         console.log(111,res.data);
//     })
// }


// function loadProducts(){
//     axios.get("https://jsonplaceholder.typicode.com/users?_limit=5").then((res)=>{
//         console.log(11, res.data)
//     })
// }
// loadProducts();

// // const data = fetch("https://jsonplaceholder.typicode.com/users");
// // data.then(function(response){
// //     response.json()then.(function(res) {
// //         console.log(111, res);
// //     });
// // });

// // async function getApi() {
// //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //     var data = await response.json();
// //     if (response) {
// //     document.getElementById('loading').style.display = 'none';
// //     }
// //     show(data);
// //     }
const tbodyElemet =document.querySelector("tbody") ;

let employees = [];

function getEmployees(){
    axios.get("https://jsonplaceholder.typicode.com/users").
    then(function(res){
        employees = res.data;
        console.log(11, employees)
        render()
    });
}


function render() {
    const trElements = employees.map(function(employees){
        return `
        <tr>
                <td>${employees.name}</td>
                <td>${employees.username}</td>
                <td>${employees.email}</td>
        </tr>
        `;
    });
    tbodyElemet.innerHTML = trElements.join("");
    
}
getEmployees();