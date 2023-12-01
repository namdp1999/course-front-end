const secondHand = document.querySelector("#clock .inner-second");
const minHand = document.querySelector("#clock .inner-minute");
const hourHand = document.querySelector("#clock .inner-hour");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg`;

  const min = now.getMinutes();
  const minDegrees = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg`;
}

setInterval(setDate, 1000);
