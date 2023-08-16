# Product-Page
 
 ---

<br>


https://user-images.githubusercontent.com/11747875/171573424-95a2743b-8939-4103-b501-a3dad1ee7640.mp4

<br>

[![Button60](https://user-images.githubusercontent.com/11747875/144651679-dc423f76-a98a-456d-8ca2-d913f0b7df12.png)](https://trrapp12.github.io/Product-Page/)

<br>
<br>


---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<br>
<br>

---

### Description:

> "Drones ply the liminal space between the physical and the digital -- pilots fly them, but aren't in them.
> They are versatile and fascinating objects -- the things they can do range from the mundane (aerial photography)
> to the spectacular
>
> -- John Batelle


This is an example for a Product Landing Page for the QUADRAStalkr, an imaginary drone from an imaginary company (that I have all the rights to :smirk: :smirk: :smirk: ).  Includes use of video media, navigation elements, smart use of CSS animation to create an interactive design, and a form element that submits to a static page.  

---

### QUICKSTART GUIDE: 

To use the app simply click on the ```View Project``` button or visit <a href="https://trrapp12.github.io/Product-Page/">https://trrapp12.github.io/Product-Page/</a>. 

---

### Project demonstrates the following:

- [X] A 🔥🔥🔥little animation to intro the page.

- [X] Javascript closures.

- [X] Creating a throttler for a scroll event.

- [X] **User Story #1:** My product landing page should have a header element with a corresponding id="header".

- [X] **User Story #2:** I can see an image within the header element with a corresponding id="header-img". A company logo would make a good image here.

- [X] **User Story #3:** Within the #header element I can see a nav element with a corresponding id="nav-bar".

- [X] **User Story #4:** I can see at least three clickable elements inside the nav element, each with the class nav-link.

- [X] **User Story #5:** When I click a .nav-link button in the nav element, I am taken to the corresponding section of the landing page.

- [X] **User Story #6:** I can watch an embedded product video with id="video".

- [X] **User Story #7:** My landing page has a form element with a corresponding id="form".

- [X] **User Story #8:** Within the form, there is an input field with id="email" where I can enter an email address.

- [X] **User Story #9:** The #email input field should have placeholder text to let the user know what the field is for.

- [X] **User Story #10:** The #email input field uses HTML5 validation to confirm that the entered text is an email address.

- [X] **User Story #11:** Within the form, there is a submit input with a corresponding id="submit".

- [X] **User Story #12:** When I click the #submit element, the email is submitted to a static page (use this mock URL: https://www.freecodecamp.com/email-submit).

- [X] **User Story #13:** The navbar should always be at the top of the viewport.

- [X] **User Story #14:** My product landing page should have at least one media query.

- [X] **User Story #15:** My product landing page should utilize CSS flexbox at least once.

---

### CHALLENGES I OVERCAME...

So while I was using this I needed to create an eventlistener that would change the size and color of the text once the navbar got a certain distance down.  This created a number of interesting issues.  

1) How do you prevent an expensive DOM traversal every time the smallest pixel is scrolled?

* to fix this I had to come up with code that would throttle the the event calls to every 200ms and I had to use a closure so I could access the scope of a parent function to do it.  See below:

```javascript  

(() => {
    // set constants
    const elementHeight = `${document.body.clientHeight}px`;
    const scrollableElement = window;
    const elementToChange = document.querySelectorAll('.nav-link-2')
    const elementColor = 'var(--prussian-blue)';
    const logo = document.getElementById('header-img');

    // check to see if object is window object
    function isElementWindow(element) {
        console.log(`isElementWindow() fired. Element is ${element}, logical comparison returns ${element === window}`)
        return element === window;
    }
    // define scroll event handler
    function scrollHandler(height, scrollableEl, element, color) {
        // when the top of the window is equal to height of the header, turn header background opaque
        for (const item in element) {
            if (isElementWindow(scrollableEl)) {
                // future improvement would take the window height/ window width to get an aspect ratio and then times that by the height to get a more dynamic response, instead of guesstimating 10% scroll down
                if (scrollableEl.scrollY >= (parseInt(height) - (parseInt(height) * .9))) {
                    element[item].style.backgroundColor = `${color}`;
                    element[item].style.letterSpacing = "2px";
                    element[item].style.borderRadius = "0px";
                    logo.style.display = "none"
                }
                // had to create a cumbersome else if instead of just a else statement because the logo would come back after CSS had removed it if you scrolled back up to the top
                else if (window.innerWidth >= 950 && scrollableEl.scrollY <= (parseInt(height) - (parseInt(height) * .9))) {
                    console.log('entering logo resize else if')
                    element[item].style.backgroundColor = 'transparent';
                    element[item].style.letterSpacing = "";
                    element[item].style.borderRadius = "8px";
                    logo.style.display = "block"
                }
            }
        }
    }

    // create throttle handler
    function throttleHandler(func, delay) {
        let lastCall = 0;
        return function(...args) {
            let currentTime = Date.now();
            if (lastCall - currentTime >= delay) {
                func(...args);
                lastCall = currentTime;
            } 
        }
    }

    // call scroll eventhandler in throttle handler
    window.addEventListener('scroll', () => {

        // tableData is only for use of console.table
        let tableData = [
            {
                name: "elementHeight",
                value: elementHeight
            },
            {
                name: "scrollableElement",
                value: scrollableElement
            },
            {
                name: "elementToChange",
                value: elementToChange
            },
            {
                name: "elementColor",
                value: elementColor
            }
        ];

        console.table(tableData)

        // attach handler to window.scroll event
        throttleHandler(scrollHandler(elementHeight, scrollableElement, elementToChange, elementColor))
    })
})();
    
```
    
2) I decided I wanted to create an animation

```javascript

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

```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] 100% of the work on this project was my own.  The original requirements of the project, as listed in the user stories, were provided for direction as part of the Free Code Camp course.

---

### FREE CODE CAMP RESPONSIVE WEB DESIGN CERTIFICATE:

![freeCodeCampResponsiveWebDesign.png](https://user-images.githubusercontent.com/11747875/257409023-964325b1-9779-48c7-bc0a-a9852a93d0cb.png)

---

### ATTRIBUTIONS

<a href="https://www.flaticon.com/free-icons/alien" title="alien icons" class="alien-icons">Alien icons created by Freepik - Flaticon</a>

* Callum Hilton
* Dids
* Dominika Roseclay
* Mudassir Ali
* Petar Avramoski

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

