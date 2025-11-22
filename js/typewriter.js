// Typewriter loader
const loaderText = "SOEPARNO ENTERPRISE Corp.";
let i = 0;
const typewriter = document.getElementById('typewriter');

function typeWriter() {
  if (i < loaderText.length) {
    typewriter.innerHTML += loaderText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      document.getElementById('loader').style.opacity = 0;
    }, 500);
  }
}

window.addEventListener('DOMContentLoaded', typeWriter);
