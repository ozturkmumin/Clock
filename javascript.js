function time() {
  let watchHours = new Date().getHours();
  let watchMinutes = new Date().getMinutes();
  let watchseconds = new Date().getSeconds();

  document.getElementById("watchHours").innerHTML = watchHours;
  document.getElementById("watchMinutes").innerHTML = watchMinutes;
  document.getElementById("watchSeconds").innerHTML = watchseconds;
}
setInterval(time, 100);
