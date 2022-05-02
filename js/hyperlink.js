(() => {
  console.log('in');

  const mission = document.getElementById('nav-link-mission');
  const products = document.getElementById('nav-link-products');
  const contact = document.getElementById('nav-link-contacts');

  mission.addEventListener('click', () => {
    window.scroll(0, 1150);
  });

  products.addEventListener('click', () => {
    window.scroll(0, 3500);
  });

  contact.addEventListener('click', () => {
    window.scroll(0, 6000);
  });

})();