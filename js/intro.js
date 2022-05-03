(() => {
  window.addEventListener('load', () => {
    console.log('window loaded');
       
    const lineObject = document.getElementsByClassName('line');
    const secondLineObject = document.getElementsByClassName('straight');
    const displayWindow = document.getElementById('count');
    
    for (const [key, value] of Object.entries(lineObject)) {
      value.classList.add('spin-animation')
    }
    
    for (const [key, value] of Object.entries(secondLineObject)) {
      value.classList.add('spin-animation')
    }
    
    function counter() {
     count = 10;   

     setInterval(depricateTime, "1000")     
      
     function depricateTime() {  
       if (count >= 0) {
         displayTime(count); 
         count--;
       } else {
         clearInterval(depricateTime);
         closeWindow();
       }                       
       
       
     } 
     
      function displayTime(count) {
        displayWindow.innerHTML = count;
      }
      
      function closeWindow() {
        document.getElementById('counter-container').style.display = "none"
      }
    }
    
    counter();
        
  })
})()