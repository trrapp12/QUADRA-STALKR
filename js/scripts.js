(() => {

  const missionSection = document.getElementById('mission-section');

  let isVisible = function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
// function found in javascripttutorial.net
window.addEventListener('scroll', function() {
  if (isVisible(missionSection)) {
    // alert("is visible")
  }
});
})();
