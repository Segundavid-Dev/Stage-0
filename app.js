"use strict";

const updateTime = () => {
  // select the element to display time
  const currentTime = document.getElementById("currentTime");

  //   get current date and time
  const now = new Date();

  //   get hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //   format time to digial clock
  currentTime.textContent = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
};

// Initial call to display time immediately
updateTime();

// Update time every second
setInterval(updateTime, 1000);
