import { userData } from "./data.js";

let ageTh = document.getElementById("ageTh");
displayData();

ageTh.addEventListener("click", function () {
  userData.sort(function (a, b) {
    return a.age - b.age;
  });
  displayData();
});

let experienceTd = document.getElementById("experienceTh");

experienceTd.addEventListener("click", function () {
  userData.sort(function (a, b) {
    return a.experience - b.experience;
  });
  displayData();
});

function displayData() {
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  userData.map(function (ele, idx, array) {
    let tbody = document.querySelector("tbody");

    let tr = document.createElement("tr");

    let sNoTd = document.createElement("td");
    sNoTd.innerText = idx + 1;

    let nameTd = document.createElement("td");
    nameTd.innerText = ele.name;

    let ageTd = document.createElement("td");
    ageTd.innerText = ele.age;

    let experienceTd = document.createElement("td");
    experienceTd.innerText = ele.experience;

    let techTd = document.createElement("td");
    techTd.innerText = ele.tech;

    tr.append(sNoTd, nameTd, ageTd, experienceTd, techTd);
    tbody.append(tr);
  });
}
