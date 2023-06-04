//navigation bar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementById('navbar-links');

//In here I used a click event that makes sure that when the toggleButton variable is clicked, that an extra class called 'active' will be assigned to the navbar links
toggleButton.addEventListener('click', () => {
  if (navbarLinks.classList.contains('slide-out')) {
    navbarLinks.classList.remove('slide-out');
    navbarLinks.classList.add('slide-in');
  } else if (navbarLinks.classList.contains('slide-in')) {
    navbarLinks.classList.remove('slide-in');
    navbarLinks.classList.add('slide-out');
  } else {
    navbarLinks.classList.add('slide-in');
  }
});
