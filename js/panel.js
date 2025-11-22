// panel.js

// Hover / floating effect panel
panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    panel.style.transform = 'translateY(-10px)';
    panel.style.boxShadow = '0 10px 20px rgba(255,255,255,0.3)';
  });
  panel.addEventListener('mouseleave', () => {
    panel.style.transform = 'translateY(0)';
    panel.style.boxShadow = '0 4px 10px rgba(255,255,255,0.2)';
  });
});
