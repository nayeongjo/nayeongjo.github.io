const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const weatherLoading = document.querySelector("#loading");

const API_KEY = "5acc8a572f599439c24b55ade064eba7";

// todo: 온도 icon 추가
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data);
      weatherLoading.classList.add("hide");
      // const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}(${data.weather[0].description}) | ${data.main.temp}°C`;
    });
}

function onGeoErr() {
  alert("위치 정보를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
