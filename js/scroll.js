(() => {
  let navLinks = document.querySelectorAll('.nav-link');

  document.addEventListener('scroll', function () {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add('nav-hover-javascript');
    }
    function removeClass() {
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('nav-hover-javascript');
      }
    }
    setTimeout(removeClass, 8000);
  });

  function addNodeListeners (navLinks) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('mouseenter', function () {
        navLinks[i].classList.add('nav-link-2-hover');
      });
      navLinks[i].addEventListener('mouseout', function () {
        navLinks[i].classList.remove('nav-link-2-hover');
      });
    };
  }

  addNodeListeners(navLinks);

})();
