/**
 * Class representing a simple animation of a car driving on a highway.
 */
class HighwayAnimation {
    /**
     * Creates an instance of the HighwayAnimation class.
     * Initializes the canvas and sets up the animation.
     */
    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        document.body.appendChild(this.canvas);

        this.car = new Image();
        this.car.src = 'car.png'; // Path to car image
        this.carX = this.canvas.width / 2 - 25; // Initial car position
        this.carY = this.canvas.height - 100;
        this.speed = 0;
        this.stops = [
            { name: "Education", position: 100 },
            { name: "Engineering experience", position: 300 },
            { name: "Political experience", position: 500 },
            { name: "Financial experience", position: 700 },
            { name: "Entrepreneurship", position: 900 },
            { name: "Volunteer work", position: 1100 },
            { name: "Languages", position: 1300 },
            { name: "Software proficiency", position: 1500 },
            { name: "Character traits", position: 1700 }
        ];
        this.currentStopIndex = 0;

        this.setupButtons();
        this.animate();
    }

    /**
     * Sets up the gas and brake buttons on the screen.
     */
    setupButtons() {
        const gasButton = document.createElement('button');
        gasButton.innerText = 'Gas';
        gasButton.style.position = 'absolute';
        gasButton.style.bottom = '20px';
        gasButton.style.right = '100px';
        gasButton.onclick = () => this.accelerate();

        const brakeButton = document.createElement('button');
        brakeButton.innerText = 'Brake';
        brakeButton.style.position = 'absolute';
        brakeButton.style.bottom = '20px';
        brakeButton.style.right = '20px';
        brakeButton.onclick = () => this.brake();

        document.body.appendChild(gasButton);
        document.body.appendChild(brakeButton);
    }

    /**
     * Accelerates the car by increasing its speed.
     */
    accelerate() {
        this.speed += 2;
    }

    /**
     * Brakes the car by decreasing its speed.
     */
    brake() {
        this.speed = Math.max(0, this.speed - 2);
    }

    /**
     * Draws the highway, fields, sky, sun, and the car on the canvas.
     */
    drawScene() {
        // Draw the sky
        this.context.fillStyle = 'lightblue';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw the fields
        this.context.fillStyle = 'green';
        this.context.fillRect(0, this.canvas.height - 200, this.canvas.width, 200);

        // Draw the highway
        this.context.fillStyle = 'gray';
        this.context.fillRect(this.canvas.width / 2 - 100, 0, 200, this.canvas.height);

        // Draw the sun
        this.context.fillStyle = 'yellow';
        this.context.beginPath();
        this.context.arc(100, 100, 50, 0, Math.PI * 2);
        this.context.fill();

        // Draw the car
        this.context.drawImage(this.car, this.carX, this.carY, 50, 30);
    }

    /**
     * Animates the scene by updating the car's position and redrawing the scene.
     */
    animate() {
        requestAnimationFrame(() => this.animate());
        this.carX += this.speed;

        // Check for stops
        if (this.currentStopIndex < this.stops.length && this.carX >= this.stops[this.currentStopIndex].position) {
            this.speed = 0; // Stop the car
            this.currentStopIndex++;
            alert(`Stopped at: ${this.stops[this.currentStopIndex - 1].name}`);
        }

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawScene();
    }
}

// Start the animation
window.onload = () => {
    new HighwayAnimation();
};
