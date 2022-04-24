(() => {
  window.addEventListener('load', () => {
    let titleH1 = document.getElementById('mission_section_header');
    let titleH1Two = document.getElementById('products_section_header');
    let titleContainer = document.getElementById('mission-section-container-id'); 
    let titleContainer2 = document.getElementById('products-section-container-id')

    titleContainer.addEventListener('mouseover', () => {
      titleH1.classList.add('mission-section-container-hover')
    })
    
    titleContainer2.addEventListener('mouseover', () => {
      titleH1Two.classList.add('mission-section-container-hover')
    })
  })
})();