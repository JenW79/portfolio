const roles = ["Software Developer", "Data Analyst", "Full-Stack Engineer", "Tech Enthusiast"];
let roleIndex = 0;

function changeRole() {
  const roleElement = document.getElementById('role');
  roleElement.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}

setInterval(changeRole, 2000);

const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollLeftButton = document.querySelector('.scroll-btn.left');
    const scrollRightButton = document.querySelector('.scroll-btn.right');
  
    scrollLeftButton.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
  
    scrollRightButton.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
  });
  