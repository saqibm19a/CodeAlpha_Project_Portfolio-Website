// Dark mode toggle functionality
const themeToggleButton = document.querySelector('.theme-toggle');

// Check if dark mode is enabled in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

// Toggle dark mode on button click
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the current theme to localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Initialize AOS (Animate On Scroll)
AOS.init();
