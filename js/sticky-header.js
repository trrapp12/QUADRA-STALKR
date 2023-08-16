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

