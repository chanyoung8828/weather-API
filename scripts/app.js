const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
  const cityName = data.cityInfo;
  const weather = data.weather;

  console.log(cityName);
  console.log(weather);

  if (weather.IsDayTime) {
    details.innerHTML = `
  <img class ="card-img-top" src='./img/day.jpg' />
  <h5 class="my-3">${cityName.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;
  } else {
    details.innerHTML = `
  <img class = "card-img-botton" src='./img/night.jpg' />
  <h5 class="my-3">${cityName.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;
  }

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const updateCity = async (city) => {
  const cityInfo = await getCity(city);
  const weather = await getWeather(cityInfo.Key);

  return {
    cityInfo,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value;
  updateCity(city).then((data) => updateUI(data));
});
