const Nodes = {
   headerItems: document.querySelectorAll('.header__menu-item'),
   navbarToggler: document.querySelector('.navbar-toggler'),
   goToTopBtn: document.querySelector('#goToTopBtn'),
   headerMenuContainer: document.querySelector('.header__menu-container'),
};

const Device = {
   minWidth: 700,
   minScroll: 300,
   top: 0,
};

const onHeaderItemClick = () => {
   Nodes.headerMenuContainer.classList.remove('show');
   toggleIcons();
};

const toggleHeaderMenuContainer = () => {
   Nodes.headerMenuContainer.classList.toggle('show');
   toggleIcons();
};

const toggleIcons = () => {
   Nodes.navbarToggler.classList.toggle('fa-bars');
   Nodes.navbarToggler.classList.toggle('fa-times');
};

const goToTop = () => {
   document.body.scrollTop = Device.top;
   document.documentElement.scrollTop = Device.top;
};

for (let headerItem of Nodes.headerItems) {
   headerItem.addEventListener('click', onHeaderItemClick);
}

Nodes.navbarToggler.addEventListener('click', toggleHeaderMenuContainer);

Nodes.goToTopBtn.addEventListener('click', goToTop);

window.addEventListener('resize', e => {
   if (e.target.innerWidth > Device.minWidth) {
      Nodes.headerMenuContainer.classList.remove('show');
      if (Nodes.navbarToggler.classList.contains('fa-times')) {
         toggleIcons();
      }
   }
});

window.addEventListener('scroll', () => {
   if (document.body.scrollTop > Device.minScroll || document.documentElement.scrollTop > Device.minScroll) {
      Nodes.goToTopBtn.style.display = 'block';
   } else {
      Nodes.goToTopBtn.style.display = 'none';
   }
});
