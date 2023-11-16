let submitBtn = document.getElementById("searchBtn");
submitBtn.addEventListener("click", () => {
  let inputTag = document.getElementById("searchCity");

  let inputValue = inputTag.value;
  //   console.log(inputValue);
  fatchData(inputValue);
});

async function fatchData(inputValue) {
  //   console.log(inputValue);

  let apiUrl = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=dffe01666bd04bc99973520db54724c8&include=minutely&city=${
    inputValue ? inputValue : "indore"
  }&country=india`;

  let response = await fetch(apiUrl);
  let data = await response.json();
  //   console.log(data.data);
  displayData(data.data);
}

function displayData(data) {
  console.log(data);
  let tempDiv = document.getElementById("temp");
  tempDiv.innerText = "";

  data.map((ele, idx, arr) => {
    let cityName = document.createElement("h1");
    cityName.innerText = ele.city_name;

    let temperature = document.createElement("h2");
    temperature.innerText = ele.temp;

    tempDiv.append(cityName, temperature);
  });
}

fatchData();
