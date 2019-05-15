const headerItems = document.querySelectorAll('.header__menu-item');
const navbarToggler = document.querySelector('.navbar-toggler');
const goToTopBtn = document.querySelector('#goToTopBtn');
const mobileMenu = document.querySelector('.collapse');
const MinDeviceWidth = 700;
const MinDeviceScroll = 300;
const DeviceTop = 0;

const onHeaderItemClick = () => {
   mobileMenu.classList.remove('show');
   toggleIcons();
};

const toggleMobileMenu = () => {
   mobileMenu.classList.toggle('show');
   toggleIcons();
};

const toggleIcons = () => {
   navbarToggler.classList.toggle('fa-bars');
   navbarToggler.classList.toggle('fa-times');
};

const goToTop = () => {
   document.body.scrollTop = DeviceTop;
   document.documentElement.scrollTop = DeviceTop;
};

for (let headerItem of headerItems) {
   headerItem.addEventListener('click', onHeaderItemClick);
}

navbarToggler.addEventListener('click', toggleMobileMenu);

goToTopBtn.addEventListener('click', goToTop);

window.addEventListener('resize', e => {
   if (e.target.innerWidth > MinDeviceWidth) {
      mobileMenu.classList.remove('show');
      if (navbarToggler.classList.contains('fa-times')) {
         toggleIcons();
      }
   }
});

window.addEventListener('scroll', () => {
   if (document.body.scrollTop > MinDeviceScroll || document.documentElement.scrollTop > MinDeviceScroll) {
      goToTopBtn.style.display = 'block';
   } else {
      goToTopBtn.style.display = 'none';
   }
});
