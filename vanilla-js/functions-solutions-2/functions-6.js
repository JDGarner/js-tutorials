// This is our todo list:
let todoList = ["Eat ontbijt", "Trim beard", "Wash sneakers"];

// 1a)
// Create a function called addTodoItem that takes a string as a parameter
// and adds that string to the end of the todoList array

// const addTodoItem = (string) => {
//   return todoList.push(string);
// };

// Use the following code to test your function:
// addTodoItem("Wash peen");
// console.log(todoList);

// 1b)
// Create a function called removeTodoItem that takes a string as a parameter
// and removes any todo item in the todoList that is equal to that string
// const removeTodoItem = (string) => {
//   todoList = todoList.filter((element) => {
//     return element !== string;
//   });
// };

// Use the following code to test your function:
// removeTodoItem("Trim beard");
// console.log(todoList);

// 1c)
// Create a function called removeTodoItemByIndex that takes a number as a parameter
// and removes the element from todoList with that index number

// Use the following code to test your function:

const removeTodoItemByIndex = index => {
  todoList.splice(index, 1)
}

removeTodoItemByIndex(0)
console.log(todoList)
