let todoData = JSON.parse(localStorage.getItem("myTodo"));

let table = document.querySelector("table");

if (!todoData || todoData.length === 0) {
  table.innerHTML = "";
}

displayTodo();

function displayTodo() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  todoData.map(function (ele, idx, array) {
    let tr = document.createElement("tr");

    let sNoTd = document.createElement("td");
    sNoTd.innerText = idx + 1;

    let todoTd = document.createElement("td");
    todoTd.innerText = ele.todo;

    let status = document.createElement("td");
    status.innerText = ele.isComplete ? "complete" : "pending";

    let completeTd = document.createElement("tr");
    completeTd.innerText = ele.completeTd ? "Pending" : "Done";
    completeTd.setAttribute("class", "completeTd");

    completeTd.addEventListener("click", function () {
      completeFunction(idx);
    });

    tr.append(sNoTd, todoTd, status, completeTd);
    tbody.append(tr);
  });
}

function completeFunction(idx) {
  todoData[idx].isComplete = !todoData[idx].isComplete;
  displayTodo();
}
