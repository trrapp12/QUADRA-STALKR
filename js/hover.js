(() => {
  window.addEventListener('load', () => {
    let titleH1 = document.getElementById('mission-section');
    let titleH1Two = document.getElementById('products_section_header');
    let titleContainer = document.getElementById('mission-section-container-id'); 
    let titleContainer2 = document.getElementById('catalog-section-container-id');
    let productsSectionBackground = document.getElementById('products-section-background');
    let missionSectionBackground = document.getElementById('mission-section-background');

    titleContainer.addEventListener('mouseover', () => {
      console.log('mouseover')
      // turns the H1 orange
      titleH1.classList.add('mission-section-container-hover');
      // changes left position from -860px to 0px
      missionSectionBackground.classList.remove('mission-section-background');
      missionSectionBackground.classList.add('mission-section-background-hover');
    });
    
    titleContainer2.addEventListener('mouseover', () => {
      console.log('mouseover')
      titleH1Two.classList.add('mission-section-container-hover');
      productsSectionBackground.classList.remove('products-section-background');
      productsSectionBackground.classList.add('products-section-background-hover');
    });
  });
})();