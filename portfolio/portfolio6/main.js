const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__item");
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete__btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash__btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash__btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete__btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
