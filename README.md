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

- [X] Javascript closures.

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

    function setTimer() {
         const maxDelay = 2500;
         const delay = Math.floor(Math.random() * 2 + 1) * maxDelay;
         setInterval(() => {
             renderSquares()
             setTimer()
         }, delay)
    }

    setTimer()
    
```
    
My thought was to create a delay with `(Math.floor(Math.random() * 2) + 1 * maxDelay` where `maxDelay = 2500`.  This was unsucessful 1) because the `+1` served no purpose, and 2) because the `Math.floor()` created a situation where it would only return 1 or 5 since the 2 was always getting rounded down to either 0 or 1.  The second issue was that the timing function would start with a random interval, but eventually it would gradually speed up more and more until it became sickenly fast.  I thought at first it was because timesing something by a fraction over and over again will ultimately make it smaller and smaller.  However, when I console.log'ed the issue the interval times were fine.  Then I realized what was happening was every time the function fired it created a separate setInterval instance.  So I had to figure out how to clear them.  I could just add a `clearInterval()` since they were named.  So I discovered I could loop over the window object to find all the intervals and clear them all before setting a new one. This answer worked swimmingly.  The final timer function was this: 

```javascript

    function setTimer() {
        const maxDelay = 2500;
        const delay = (Math.random() * 2) * maxDelay;
        console.log(delay)
        setInterval(() => {
            for (let i = 0; i < 99999; i++) {
                window.clearInterval(i)
            }
            renderSquares()
            setTimer()
        }, delay)
    }

    setTimer()

```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] creating the random, ranged timing interval
- [X] creating an animation effect that randomly chooses a color scheme for the blocks
- [X] fixing the functionality so it would rerender on window resizeand the additionaly decoration on the pages.

---

### FREE CODE CAMP RESPONSIVE WEB DESIGN CERTIFICATE:

![freeCodeCampResponsiveWebDesign.png](https://user-images.githubusercontent.com/11747875/257409023-964325b1-9779-48c7-bc0a-a9852a93d0cb.png)

---

### ATTRIBUTIONS

Project inspired by [Creative Coding: Making Visuals with JavaScript](https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript) by [Bruno Imbrizi](https://www.domestika.org/en/bruno_imbrizi)

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

