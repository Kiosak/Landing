const submit = document.getElementById('submit');

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

const onHeaderItemClick = document.querySelectorAll('.header__menu-item');

for (const headerItemClick of onHeaderItemClick) {
   headerItemClick.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      toggleIcons();
   });
}

window.addEventListener('resize', e => {
   if (e.target.innerWidth > 700) {
      mobileMenu.classList.remove('show');
      if (navbarToggler.classList.contains('fa-times')) {
         toggleIcons();
      }
   }
});

document.querySelector('#goToTopBtn').addEventListener('click', () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', e => {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.querySelector('#goToTopBtn').style.display = 'block';
   } else {
      document.querySelector('#goToTopBtn').style.display = 'none';
   }
});
