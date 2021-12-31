// This is our todo list:
let todoList = ["Eat ontbijt", "Trim beard"];

// 1a)
// Create a function called addTodoItem that takes a string as a parameter
// and adds that string to the end of the todoList array

const addTodoItem = string => {
  todoList.push(string)
}

// Use the following code to test your function:
// addTodoItem('Wash peen')
// console.log(todoList)


// 1b)
// Create a function called remoTodoItem that takes a string as a parameter
// and removes any todo item in the todoList that is equal to that string

const removeTodoItem = itemToRemove => {
  result = todoList.filter(string => {
    return string !== itemToRemove
  })
  todoList = result
}


// Use the following code to test your function:
// removeTodoItem('Trim beard')
// console.log(todoList)

// 1c)
// Create a function called removeTodoItemByIndex that takes a number as a parameter
// and removes the element from todoList with that index number

const removeTodoItemByIndex = number => {
  todoList.splice(number, 1)
}


// Use the following code to test your function:
removeTodoItemByIndex(0)
console.log(todoList)
