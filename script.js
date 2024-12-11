const car = document.querySelector(".car");
const gasPedal = document.getElementById("gas");
const brakePedal = document.getElementById("brake");
const stops = document.querySelectorAll(".stop");

// Car movement logic
let carPosition = 0; // car position along the road
const carSpeed = 200; // speed of the car in pixels
const maxPosition = 90; // max position (end of the road)

// Move car forward when "Gas" is pressed
gasPedal.addEventListener("click", () => {
  if (carPosition < maxPosition) {
    carPosition += 10;
    car.style.left = `${carPosition}%`;

    checkStop();
  }
});

// Move car backward when "Brake" is pressed
brakePedal.addEventListener("click", () => {
  if (carPosition > 0) {
    carPosition -= 10;
    car.style.left = `${carPosition}%`;
  }
});

// Check if the car reaches a stop point
function checkStop() {
  stops.forEach(stop => {
    const stopPosition = stop.getBoundingClientRect().left / window.innerWidth * 100;

    if (Math.abs(carPosition - stopPosition) < 5) {
      stop.style.backgroundColor = "#ff6600"; // Change color when car stops at a stop
      stop.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
