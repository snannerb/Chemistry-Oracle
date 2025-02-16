// DOM Elements
const name1Input = document.getElementById("name1");
const name2Input = document.getElementById("name2");
const generateBtn = document.getElementById("generate-btn");
const percentageDisplay = document.getElementById("percentage");
const bar = document.getElementById("bar");
const explanation = document.getElementById("explanation");

// Explanations for percentage ranges
const explanations = [
  "Not a match. Better luck next time!",
  "Low chemistry. Maybe a friendship?",
  "Some spark, but not enough.",
  "Moderate chemistry! Worth exploring.",
  "Strong connection! This could be special.",
  "Perfect match! Soulmates!",
];

// Generate random percentage and update UI
generateBtn.addEventListener("click", () => {
  const name1 = name1Input.value.trim();
  const name2 = name2Input.value.trim();

  if (!name1 || !name2) {
    alert("Please enter both names!");
    return;
  }

  const randomPercentage = Math.floor(Math.random() * 101);
  percentageDisplay.textContent = `${randomPercentage}%`;

  // Update measure bar width
  bar.style.width = `${randomPercentage}%`;

  // Update explanation based on percentage range
  let index = 0;
  if (randomPercentage < 20) index = 0;
  else if (randomPercentage < 40) index = 1;
  else if (randomPercentage < 60) index = 2;
  else if (randomPercentage < 80) index = 3;
  else if (randomPercentage < 100) index = 4;
  else index = 5;

  explanation.textContent = explanations[index];
});

// Clear inputs and reset UI when input fields are focused
name1Input.addEventListener("focus", () => {
  name1Input.value = "";
  resetUI();
});

name2Input.addEventListener("focus", () => {
  name2Input.value = "";
  resetUI();
});

// Reset UI function
function resetUI() {
  percentageDisplay.textContent = "0%";
  bar.style.width = "0%";
  explanation.textContent = "Enter names to see your chemistry!";
}