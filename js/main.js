elMBNavOpen = document.querySelector('.sitenav--toggler');
elMBNavClose = document.querySelector('.mb-nav__toggler');
elMBNavModal = document.querySelector('.mb-nav');

var closeMBNavFunction = function () {
  elMBNavModal.classList.remove('mb-nav--active');
}

var openMBNavFunction = function () {
  elMBNavModal.classList.add('mb-nav--active');
}

if(elMBNavOpen){
  elMBNavOpen.addEventListener('click', function(){
  openMBNavFunction();
})
}



if (elMBNavClose){
  elMBNavClose.addEventListener('click', function(){
    closeMBNavFunction();
  })
}
