let serachBtn = document.getElementById("Search");

serachBtn.addEventListener("click", () => {
  let inputTag = document.getElementById("serach city");

  let inputValue = inputTag.value;
  fetchData(inputValue);
});

async function fetchData(cityValue) {
  console.log(cityValue);

  let apiUrl = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=dffe01666bd04bc99973520db54724c8&include=minutely&city=${
    cityValue ? cityValue : "indore"
  }&country=india`;

  let response = await fetch(apiUrl);
  let data = await response.json();

  displayData(data.data);
}

function displayData(data) {
  console.log(data);

  let tempDiv = document.getElementById("temp");
  tempDiv.innerText = "";

  data.map((ele, idx, arr) => {
    let cityName = document.createElement("h1");
    cityName.innerText = ele.city_name;

    let tempValue = document.createElement("h2");
    tempValue.innerText = ele.temp;

    tempDiv.append(cityName, tempValue);
  });
}

fetchData();
