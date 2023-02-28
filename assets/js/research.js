let themeSun = document.querySelector('.toggle-theme-sun');
let themeNight = document.querySelector('.toggle-theme-night');

themeSun.addEventListener('click', function() {
  document.body.classList.remove('funky');
});

themeNight.addEventListener('click', function() {
      document.body.classList.add('funky');
  });