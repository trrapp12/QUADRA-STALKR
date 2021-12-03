(() => {
  let navLinks = document.querySelectorAll('.nav-link')

  document.addEventListener('scroll', function () {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add('nav-hover-javascript')
    }
    function removeClass() {
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('nav-hover-javascript')
      }
    }
    setTimeout(removeClass, 2000);
  })

})();
