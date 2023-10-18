// Function to build the navigation menu dynamically
function buildNav() {
  const navList = document.getElementById('nav-list');
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.innerText = `Section ${index + 1}`;
    link.setAttribute('href', `#${section.id}`);
    
    link.addEventListener('click', (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    });
    
    listItem.appendChild(link);
    navList.appendChild(listItem);
  });
}

// Update the setActiveState function
function setActiveState() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#nav-list li a');

  sections.forEach((section, index) => {
      const box = section.getBoundingClientRect();

      if (box.top <= 150 && box.bottom >= 150) {
          section.classList.add('your-active-class');  // Updated class name
          navLinks[index].classList.add('active');  // New line: Add active class to nav link
      } else {
          section.classList.remove('your-active-class');  // Updated class name
          navLinks[index].classList.remove('active');  // New line: Remove active class from nav link
      }
  });
}

// Build the navigation menu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', buildNav);

// Set active state for sections when scrolling
document.addEventListener('scroll', setActiveState);
