function updateTime() {

//Los Angeles time
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
        
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
        );
    }

// Lion time

    let lyonElement = document.querySelector("#lyon");
    if (lyonElement) {
let lyonDateElement = lyonElement.querySelector(".date");
let lyonTimeElement = lyonElement.querySelector(".time");
let lyonTime = moment().tz("Europe/Paris");
lyonDateElement.innerHTML = lyonTime.format("MMMM Do YYYY");
lyonTimeElement.innerHTML = lyonTime.format(
  "h:mm:ss [<small>]A[</small>]"
        );
    }

// Tokyo time
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time");
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format(
          "h:mm:ss [<small>]A[</small>]"
        );
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss ")} <small>${cityTime.format("A")}</small></div>
</div>
<a class="all-cities" href="\">All cities</a>`;    
        
}


updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);