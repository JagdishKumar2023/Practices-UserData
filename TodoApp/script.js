let submitTodoBtn = document.getElementById("submitTodo");

submitTodoBtn.addEventListener("click", function () {
  let todoInput = document.getElementById("enterTodo");
  let todoValue = todoInput.value;

  let todoDataBase = JSON.parse(localStorage.getItem("myTodo")) || [];

  let todoData = {
    todo: todoValue,
    isCompleted: false,
  };

  if (todoValue) {
    todoDataBase.push(todoData);
  } else {
    alert("please add todo before submiting");
  }

  localStorage.setItem("myTodo", JSON.stringify(todoDataBase));
});
