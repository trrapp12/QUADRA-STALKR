(() => {
  // list of elements
  const mission = document.getElementById('nav-link-mission');
  const products = document.getElementById('nav-link-products');
  const contact = document.getElementById('nav-link-contacts');

  // Event listeners

  let isTouchEventProcessed = false;

  if('ontouchstart' in window) {
    mission.addEventListener('touchstart', () => {
      if(isTouchEventProcessed) return;

      isTouchEventProcessed = true;
      window.scroll(0, 1150);

      // many phones/tablets have a 300ms delay to account for touch-zoom events.
      // to prevent this function from interrupting that we set a 500ms timer.
      setTimeout(() => {
        isTouchEventProcessed = false;
      },)
    });
  
    products.addEventListener('touchstart', () => {
      if(isTouchEventProcessed) return;

      isTouchEventProcessed = true;
      window.scroll(0, 3500);

      // many phones/tablets have a 300ms delay to account for touch-zoom events.
      // to prevent this function from interrupting that we set a 500ms timer.
      setTimeout(() => {
        isTouchEventProcessed = false;
      },)
    });
  
    contact.addEventListener('touchstart', () => {
      if(isTouchEventProcessed) return;

      isTouchEventProcessed = true;
      window.scroll(0, 6000);

      // many phones/tablets have a 300ms delay to account for touch-zoom events.
      // to prevent this function from interrupting that we set a 500ms timer.
      setTimeout(() => {
        isTouchEventProcessed = false;
      },)
    });
  }

  mission.addEventListener('click', () => {
    if (isTouchEventProcessed) return;
    window.scroll(0, 1150);
  });

  products.addEventListener('click', () => {
    if (isTouchEventProcessed) return;
    window.scroll(0, 3500);
  });

  contact.addEventListener('click', () => {
    if (isTouchEventProcessed) return;
    window.scroll(0, 6000);
  });



})();