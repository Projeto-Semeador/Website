// On change anchor, change active class
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
        link.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });
});

// Get anchor id from URL
const re = new RegExp('(#[a-zA-Z0-9]*)');
const url = window.location.href;

var anchor = re.exec(url)[0].split('#')[1];
console.log(anchor);

if (anchor) {
  anchor = 'nav_' + anchor;
  document.getElementById(anchor).classList.add('active');
} else {
  document.getElementById('nav_inicio').classList.add('active');
}

$('.carousel').carousel({
  interval: 2000,
});
