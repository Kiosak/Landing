const submit = document.getElementById('submit');

submit.addEventListener('click', send);

function send(e) {
   e.preventDefault();
   console.log('submit :', e);
}

const mobileMenu = document.querySelector('.collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

const toggleIcons = () => {
   navbarToggler.classList.toggle('fa-bars');
   navbarToggler.classList.toggle('fa-times');
};

const toggleMobileMenu = () => {
   mobileMenu.classList.toggle('show');
   toggleIcons();
};

navbarToggler.addEventListener('click', toggleMobileMenu);

window.addEventListener('resize', e => {
   if (e.target.innerWidth > 700) {
      mobileMenu.classList.remove('show');
      if (navbarToggler.classList.contains('fa-times')) {
         toggleIcons();
      }
   }
});
