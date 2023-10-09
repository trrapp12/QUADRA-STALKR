(() => {
  window.addEventListener('load', () => {
    console.log('window loaded');
// adds functionality for button, which reveals after ending of introduction
function assignButtonToggle() {
  const videoTag = document.getElementById('video');
  const playButton = document.getElementById('play-pause')
  console.log(playButton)
  function togglePlay(el) {
      console.log('toggleplay executed')
      if(videoTag.loop) {
          videoTag.pause()
          videoTag.loop = false;
          playButton.classList.toggle('play-pause1');
          playButton.classList.toggle('play-pause2');
          // console.log(videoTag)
       } else if(videoTag.loop === null || videoTag.loop === false) {
          videoTag.play();
          videoTag.loop = true;
          playButton.classList.toggle('play-pause1');
          playButton.classList.toggle('play-pause2');
          // console.log(videoTag)
      }
  }
  playButton.addEventListener('click', togglePlay)
  playButton.addEventListener('touchend', togglePlay)
}
// adds functionality for the introduction
    const lineObject = document.getElementsByClassName('line');
    const secondLineObject = document.getElementsByClassName('straight');
    const displayWindow = document.getElementById('count');
    const buttonParentEl = document.getElementById('video-container')

    function renderStopButton() {
      let pauseButton = document.createElement('button')
      pauseButton.classList.add('play-pause1')
      pauseButton.setAttribute('id', 'play-pause')
      buttonParentEl.appendChild(pauseButton) 
      // = `
      // <button class="play-pause1" id="play-pause">
      // </button>
      // `
    }
    
    for (const [key, value] of Object.entries(lineObject)) {
      value.classList.add('spin-animation')
    }
    
    for (const [key, value] of Object.entries(secondLineObject)) {
      value.classList.add('spin-animation')
    }
    
    function counter() {
     count = 10;   

     let intervalID = setInterval(depricateTime, "1000")     
      
     function depricateTime() {  
       if (count >= 0) {
         displayTime(count); 
         count--;
       } else {
         clearInterval(intervalID);
         closeWindow();
       }                       
       
       
     } 
     
      function displayTime(count) {
        displayWindow.innerHTML = count;
      }
      
      function closeWindow() {
        document.getElementById('counter-container').style.display = "none"
        renderStopButton();
        assignButtonToggle();
      }
    }
    
    counter();
    
  })
})()