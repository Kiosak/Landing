const submit = document.getElementById('submit');

// submit.addEventListener('click', send);

// function send(e) {
//    e.preventDefault();
//    console.log('submit :', e);
// }

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
      document.getElementById('goToTopBtn').style.display = 'block';
   } else {
      document.getElementById('goToTopBtn').style.display = 'none';
   }
});

// function init() {
//    var imgDefer = document.querySelectorAll('div[data-src]');
//    var style = 'background-image: url({url})';
//    for (var i = 0; i < imgDefer.length; i++) {
//       imgDefer[i].setAttribute('style', style.replace('{url}', imgDefer[i].getAttribute('data-src')));
//    }
// }

// window.onload = init;
