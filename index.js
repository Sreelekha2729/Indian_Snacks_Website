const changeMode = () => {
  let divElement = document.getElementById("divCalculator");
  let btnElement = document.getElementById("btnMode");
  divElement.classList.toggle("light");
  btnElement.classList.toggle("buttonLight");
};

/*var toggleDark = document.getElementById("toggleDark");
toggleDark.onclick = function () {
    document.body.classList.toggle("dark-theme");
}*/
const changeTheme = () => {
  let bodyElement = document.body;
  bodyElement.classList.toggle("dark-theme");
  let navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("navbar-dark");
  navMenu.classList.toggle("bg-dark");
  let navMenu1 = document.getElementById("navMenu1");
  navMenu1.classList.toggle("navbar-dark");
  navMenu1.classList.toggle("bg-dark");

  let btnIconImage = document.getElementById("btnIcon");
  btnIconImage.classList.toggle("bi-moon-fill");
};

function onloadPage() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("carouselExampleControls").style.opacity = "0.5";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("carouselExampleControls").style.opacity = "1";
}

let x = document.getElementById("out");
let y = document.getElementById("weather");

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geo Not Supported";
  }
}

function showPosition(data) {
  console.log(data);
  let x = document.getElementById("out");
  let lat = data.coords.latitude;
  let lon = data.coords.longitude;
  x.innerText = `Latitude is ${lat} and longitude is ${lon}`;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  //api calling
  fetch(url, { method: "GET" })
    //return promise
    .then((res) => res.json())
    //resolve the promise
    .then((data) => {
      console.log(data);
      let cityName = data.city.name;
      let temp = data.list[0].temp.day + " °C";
      let y = document.getElementById("weather");
      y.innerText = `Weather of ${cityName} is ${temp}`;
    });
}
