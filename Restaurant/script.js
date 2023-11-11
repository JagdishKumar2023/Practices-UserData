import { restaurantData } from "./Restaurant.js";

displayRestaurantData();

let ratingTh = document.getElementById("ratingTh");
ratingTh.addEventListener("click", function () {
  restaurantData.sort(function (a, b) {
    return a.rating - b.rating;
  });
  displayRestaurantData();
});

let distanceTd = document.getElementById("distanceTh");
// console.log(distanceTd);
distanceTd.addEventListener("click", function () {
  restaurantData.sort(function (c, d) {
    return c.distance - d.distance;
  });
  displayRestaurantData();
});

function displayRestaurantData() {
  let tbodyTag = document.querySelector("tbody");
  tbodyTag.innerHTML = "";

  restaurantData.map(function (ele, idx, array) {
    let tbody = document.querySelector("tbody");

    let tr = document.createElement("tr");

    let idNum = document.createElement("td");
    idNum.innerText = idx + 1;

    let restuarantNamTd = document.createElement("td");
    restuarantNamTd.innerText = ele.restuarantName;

    let dishTd = document.createElement("td");
    dishTd.innerText = ele.dish;

    let rating = document.createElement("td");
    rating.innerText = ele.rating;

    let distanceTd = document.createElement("td");
    distanceTd.innerText = ele.distance;

    tr.append(idNum, restuarantNamTd, dishTd, rating, distanceTd);
    tbody.append(tr);
  });
}
