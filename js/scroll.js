(() => {
  let navLinks = document.querySelectorAll('.nav-link-2');

  document.addEventListener('scroll', function () {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.add('nav-hover-javascript');
    }
    function removeClass() {
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('nav-hover-javascript');
      }
    }
    setTimeout(removeClass, 4500);
  });

  function addNodeListeners (navLinks) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('mouseenter', function () {
        navLinks[i].classList.add('nav-hover-javascript');
      });
      navLinks[i].addEventListener('mouseout', function () {
        navLinks[i].classList.remove('nav-hover-javascript');
      });
    };
  }

  addNodeListeners(navLinks);

})();
