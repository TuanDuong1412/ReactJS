// //Chèn phần tử vào DOM
// const todoList = document.querySelector('ul');
// var newTodo = document.createElement('li');
// newTodo.textContent = 'Do homework';
// todoList.appendChild(newTodo);
// console.log(todoList);

// //Chèn 1 phần tử ở trước 1 phần tử đã tồn tại
// var anotherTodo = document.createElement('li');
// anotherTodo.textContent = 'Pay bills';
// todoList.insertBefore(anotherTodo, todoList.firstElementChild);

// //Thay thế 1 phần tử
// var modifiedTodo = document.createElement('li');
// modifiedTodo.textContent = 'Feed the dog';
// todoList.replaceChild(modifiedTodo, todoList.children[2])

// //Xóa 1 phần tử
// todoList.children[1].remove()
// Luyện tập 
var todoList = document.querySelector('ul');
var newTodo = document.createElement('li');
newTodo.innerText = 'Do homework';
todoList.appendChild(newTodo)
todoList.removeChild(todoList.children[0])
todoList.children[0].remove()

