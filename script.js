// Get references to important elements
const car = document.querySelector(".car");
const gasPedal = document.getElementById("gas");
const brakePedal = document.getElementById("brake");
const stops = document.querySelectorAll(".stop");

// Current car position
let carPosition = 10; // percentage position of car on the road (start at 10% from the left)
const maxPosition = 80; // end of the road at 80% of the page width
const stopDistance = 15; // how far from a stop for the car to stop

// Function to move the car forward
gasPedal.addEventListener("click", () => {
  if (carPosition < maxPosition) {
    carPosition += 5;
    car.style.left = `${carPosition}%`;
    checkStop();
  }
});

// Function to move the car backward
brakePedal.addEventListener("click", () => {
  if (carPosition > 0) {
    carPosition -= 5;
    car.style.left = `${carPosition}%`;
    checkStop();
  }
});

// Function to check if the car is at a stop
function checkStop() {
  stops.forEach(stop => {
    const stopPosition = (stop.offsetLeft / window.innerWidth) * 100;
    if (Math.abs(carPosition - stopPosition) < stopDistance) {
      stop.style.backgroundColor = "#ff6600"; // Change stop color to show it's reached
      stop.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      stop.style.backgroundColor = "#ffcc00"; // Reset color when it's not at the stop
    }
  });
}
