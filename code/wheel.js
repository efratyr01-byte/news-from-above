const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

let currentRotation = 0;
let spinning = false;

spinBtn.addEventListener("click", () => {
  if (spinning) return;   // ✅ prevent double clicks
  spinning = true;

  const segments = 12;    // adjust if your wheel has different slices
  const segmentAngle = 360 / segments;

  const randomIndex = Math.floor(Math.random() * segments);
  const targetAngle = randomIndex * segmentAngle;

  const spins = 4;

  const rotation =
    spins * 360 + (360 - targetAngle);

  currentRotation += rotation;

  wheel.style.transform = `rotate(${currentRotation}deg)`;

  // unlock after animation
  setTimeout(() => {
    spinning = false;
  }, 3000);
});
