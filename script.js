const github = document.getElementById("github");
const time = document.getElementById("time");
const online = document.getElementById("online");
const vers = document.getElementById("vers");

github.onclick = function () {
  window.open("https://github.com/CodeSalvageON/Oak-Knoll-WWW");
}

setInterval(function () {
  const newDate = new Date();
  time.innerText = "Time: " + newDate;

  const checkOnline = navigator.onLine;

  if (checkOnline === true) {
    online.innerHTML = "Network Connection: <p class='gut'>Online</p>";
  }

  else {
    online.innerHTML = "Network Connection: <p class='error'>Disconnected</p>";
  }

  const browser = navigator.appVersion;
  vers.innerHTML = "Current browser version: " + "<p class='coolio'>" + browser + "</p>";
}, 1000);

const newNewDate = new Date();
time.innerText = "Time: " + newNewDate;

const widget_btns = document.getElementById("widget_btns");
const widget_options = document.getElementById("widget_options")
const widget1_btn = document.getElementById("widget1");
const widget2_btn = document.getElementById("widget2");
const widget3_btn = document.getElementById("widget3");
const prompt = document.getElementById("prompt");
const return_btn = document.getElementById("return");

let selected_widget = 0;
let widget_1_widget = "";
let widget_2_widget = "";
let widget_3_widget = "";

widget1_btn.onclick = function () {
  widget_btns.style.display = "none";
  widget_options.style.display = "block";
  prompt.style.display = "none";

  selected_widget = 1;
}

return_btn.onclick = function () {
  widget_btns.style.display = "block";
  widget_options.style.display = "";
  prompt.style.display = "block";

  selected_widget = 0;
}

// Widgets
const imperium = document.getElementById("imperium");

imperium.onclick = function () {
  if (selected_widget === 1) {
    widget_1_widget = "imperium";
  }

  else if (selected_widget === 2) {
    widget_2_widget = "imperium";
  }

  else {
    widget_3_widget = "imperium";
  }

  return_btn.click();
}