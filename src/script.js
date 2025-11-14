function updateTime() {

//Los Angeles time
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// Lion time

let lionElement = document.querySelector("#lion");
let lionDateElement = lionElement.querySelector(".date");
let lionTimeElement = lionElement.querySelector(".time");
let lionTime = moment().tz("Europe/Lion");
lionDateElement.innerHTML = lionTime.format("MMMM Do YYYY");
lionTimeElement.innerHTML = lionTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

// Warsaw time
let warsawElement = document.querySelector("#warsaw");
let warsawDateElement = warsawElement.querySelector(".date");
let warsawTimeElement = warsawElement.querySelector(".time");
let warsawTime = moment().tz("Europe/Warsaw");
warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
    warsawTimeElement.innerHTML = warsawTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);