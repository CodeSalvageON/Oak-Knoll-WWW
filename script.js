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
const newBrowser = navigator.appVersion;
vers.innerHTML = "Current browser version: " + "<p class='coolio'>" + newBrowser + "</p>";

const nCheckOnline = navigator.onLine;

if (nCheckOnline === true) {
  online.innerHTML = "Network Connection: <p class='gut'>Online</p>";
}

else {
  online.innerHTML = "Network Connection: <p class='error'>Disconnected</p>";
}

const widget_btns = document.getElementById("widget_btns");
const widget_options = document.getElementById("widget_options");
const widget1_btn = document.getElementById("widget1");
const widget2_btn = document.getElementById("widget2");
const widget3_btn = document.getElementById("widget3");
const prompt = document.getElementById("prompt");
const return_btn = document.getElementById("return");

const reset_stuff = document.getElementById("reset-stuff");
const reset_all = document.getElementById("reset-all");

const imperium_options = document.getElementById("imperium-options");
const af_options = document.getElementById("af-options");
const proxy_options = document.getElementById("proxy-options");
const unblocker_options = document.getElementById("unblocker-options");

let selected_widget = 0;
let widget_1_widget = "";
let widget_2_widget = "";
let widget_3_widget = "";

widget1_btn.onclick = function () {
  if (widget_1_widget === "imperium") {
    widget_btns.style.display = "none";
    imperium_options.style.display = "block";
    prompt.style.display = "none";
    reset_stuff.style.display = "none";
  }

  else if (widget_1_widget === "finder") {
    widget_btns.style.display = "none";
    af_options.style.display = "block";
    prompt.style.display = "none";
    reset_stuff.style.display = "none";
  }

  else if (widget_1_widget === "proxy") {
    widget_btns.style.display = "none";
    proxy_options.style.display = "block";
    prompt.style.display = "none";
    reset_stuff.style.display = "none";
  }

  else if (widget_1_widget === "unblocker") {
    widget_btns.style.display = "none";
    unblocker_options.style.display = "block";
    prompt.style.display = "none";
    reset_stuff.style.display = "none";
  }

  else {
    widget_btns.style.display = "none";
    widget_options.style.display = "block";
    prompt.style.display = "none";
    reset_stuff.style.display = "none";

    selected_widget = 1;
  }
}

widget2_btn.onclick = function () {
  widget_btns.style.display = "none";
  widget_options.style.display = "block";
  prompt.style.display = "none";
  reset_stuff.style.display = "none";

  selected_widget = 2;
}

widget3_btn.onclick = function () {
  widget_btns.style.display = "none";
  widget_options.style.display = "block";
  prompt.style.display = "none";
  reset_stuff.style.display = "none";

  selected_widget = 3;
}

return_btn.onclick = function () {
  widget_btns.style.display = "block";
  widget_options.style.display = "";
  prompt.style.display = "block";
  reset_stuff.style.display = "block";

  selected_widget = 0;
}

// Reset Widgets
reset_all.onclick = function () {
  widget_1_widget = "";
  widget_2_widget = "";
  widget_3_widget = "";

  widget1_btn.style.background = "";
  widget2_btn.style.background = "";
  widget3_btn.style.background = "";

  widget1_btn.style.backgroundColor = "#bdc3f1";
  widget2_btn.style.backgroundColor = "#bdc3f1";
  widget3_btn.style.backgroundColor = "#bdc3f1";

  widget1_btn.style.fontSize = "40px";
  widget2_btn.style.fontSize = "40px";
  widget3_btn.style.fontSize = "40px";

  widget1_btn.innerText = "+";
  widget2_btn.innerText = "+";
  widget3_btn.innerText = "+";
}

// Widgets
const imperium = document.getElementById("imperium");
const return_imperium = document.getElementById("return-imp");

const finder = document.getElementById("finder");
const return_finder = document.getElementById("return-af");

const proxy = document.getElementById("proxy");
const return_proxy = document.getElementById("return-proxy");
const proxy_form = document.getElementById("proxy-form");
const proxy_url = document.getElementById("proxy-url");

const unblocker = document.getElementById("unblocker");
const return_unblocker = document.getElementById("return-unblocker");
const unblocker_form = document.getElementById("unblocker-form");
const unblocker_url = document.getElementById("unblocker-url");

imperium.onclick = function () {
  if (selected_widget === 1) {
    widget_1_widget = "imperium";
    widget1_btn.style.background = "url('outlet.png')";
    widget1_btn.style.fontSize = "20px";
    widget1_btn.innerText = "Exurb Imperium";
  }

  else if (selected_widget === 2) {
    widget_2_widget = "imperium";
    widget2_btn.style.background = "url('outlet.png')";
    widget2_btn.style.fontSize = "20px";
    widget2_btn.innerText = "Exurb Imperium";
  }

  else {
    widget_3_widget = "imperium";
    widget3_btn.style.background = "url('outlet.png')";
    widget3_btn.style.fontSize = "20px";
    widget3_btn.innerText = "Exurb Imperium";
  }

  return_btn.click();
}

return_imperium.onclick = function () {
  widget_btns.style.display = "block";
  imperium_options.style.display = "none";
  prompt.style.display = "block";
  reset_stuff.style.display = "block";
}

finder.onclick = function () {
  if (selected_widget === 1) {
    widget_1_widget = "finder";
    widget1_btn.style.fontSize = "20px";
    widget1_btn.innerText = "Overpass";
  }

  else if (selected_widget === 2) {
    widget_2_widget = "finder";
    widget2_btn.style.fontSize = "20px";
    widget2_btn.innerText = "Overpass";
  }

  else {
    widget_3_widget = "finder";
    widget3_btn.style.fontSize = "20px";
    widget3_btn.innerText = "Overpass";
  }

  return_btn.click();
}

return_finder.onclick = function () {
  widget_btns.style.display = "block";
  af_options.style.display = "none";
  prompt.style.display = "block";
  reset_stuff.style.display = "block";
}

proxy.onclick = function () {
  if (selected_widget === 1) {
    widget_1_widget = "proxy";
    widget1_btn.style.fontSize = "20px";
    widget1_btn.innerText = "Proxy";
  }

  else if (selected_widget === 2) {
    widget_2_widget = "proxy";
    widget2_btn.style.fontSize = "20px";
    widget2_btn.innerText = "Proxy";
  }

  else {
    widget_3_widget = "proxy";
    widget3_btn.style.fontSize = "20px";
    widget3_btn.innerText = "Proxy";
  }

  return_btn.click();
}

proxy_form.onsubmit = function () {
  event.preventDefault();
  window.open("https://translate.google.com/translate?sl=auto&tl=en&u=" + proxy_url.value);
  proxy_url.value = "";
}

return_proxy.onclick = function () {
  widget_btns.style.display = "block";
  proxy_options.style.display = "none";
  prompt.style.display = "block";
  reset_stuff.style.display = "block";
}

unblocker.onclick = function () {
  if (selected_widget === 1) {
    widget_1_widget = "unblocker";
    widget1_btn.style.fontSize = "20px";
    widget1_btn.innerText = "Unblocker";
  }

  else if (selected_widget === 2) {
    widget_2_widget = "unblocker";
    widget2_btn.style.fontSize = "20px";
    widget2_btn.innerText = "Unblocker";
  }

  else {
    widget_3_widget = "unblocker";
    widget3_btn.style.fontSize = "20px";
    widget3_btn.innerText = "Unblocker";
  }

  return_btn.click();
}

unblocker_form.onsubmit = function () {
  event.preventDefault();
  window.open("https://borgcube.codesalvageon.repl.co/u/" + unblocker_url.value);
  unblocker_url.value = "";
}

return_unblocker.onclick = function () {
  widget_btns.style.display = "block";
  unblocker_options.style.display = "none";
  prompt.style.display = "block";
  reset_stuff.style.display = "block";
}