const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function generateColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  colorBox.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCode.textContent);
  copyBtn.textContent = "Copied!";
  setTimeout(() => {
    copyBtn.textContent = "Copy Color";
  }, 1000);
});

generateBtn.addEventListener("click", generateColor);

// Generate color on page load
generateColor();
