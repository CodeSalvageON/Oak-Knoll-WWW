const github = document.getElementById("github");
const time = document.getElementById("time");
const online = document.getElementById("online");
const vers = document.getElementById("vers");

github.onclick = function () {
  window.open("");
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