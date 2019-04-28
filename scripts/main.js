const submit = document.getElementById('submit');

submit.addEventListener('click', prevDef);

function prevDef(e) {
   e.preventDefault();
   console.log('this :', this);
};


/* <i class="fas fa-times"></i> */