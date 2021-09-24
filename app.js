const todoForm = document.querySelector('form');
const todoList = document.getElementById('results');
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++){
  const newTodo = document.createElement('li');
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true: false;
  if(newTodo.isCompleted){
    newTodo.style.textDecoration = "line-through";
  }
  todoList.appendChild(newTodo);
  const newBtn = newTodo.appendChild(document.createElement('button'));
}
todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const removeButton = document.createElement('button');
    removeButton.innerText = "X";

    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);
    todoForm.reset;

    savedTodos.push({task: newTodo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(savedTodos))
});


todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });
  