// main.js

const panels = document.querySelectorAll('.panel');
const loader = document.getElementById('loader');
const backgroundCanvas = document.getElementById('matrix');

function showPanels() {
  panels.forEach((panel, index) => {
    setTimeout(() => {
      panel.classList.add('fade-in');
    }, index * 200); // stagger animation
  });
}

// Blur background function
function toggleBackgroundBlur(state) {
  if(state){
    backgroundCanvas.style.filter = "blur(5px)";
  } else {
    backgroundCanvas.style.filter = "none";
  }
}

// Wait until loader typewriter finishes
window.addEventListener('DOMContentLoaded', () => {
  // Check periodically if loader is faded
  const checkLoader = setInterval(() => {
    if(loader.style.opacity == 0){
      loader.style.display = 'none';
      showPanels();
      clearInterval(checkLoader);
    }
  }, 100);
});
