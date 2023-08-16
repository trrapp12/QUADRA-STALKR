(() => {
    // set constants
    const elementHeight = `${document.body.clientHeight * .5}px`;
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
                console.log(`scrollableEl height is ${scrollableEl.scrollY}`)
                console.log(element[item])
                if (scrollableEl.scrollY >= (parseInt(height) - (parseInt(height) * .9))) {
                    element[item].style.backgroundColor = `${color}`;
                    element[item].style.letterSpacing = "2px";
                    element[item].style.borderRadius = "0px";
                    logo.style.display = "none"
                }
                else {
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

        // console.table(tableData)

        throttleHandler(scrollHandler(elementHeight, scrollableElement, elementToChange, elementColor))
    })
    // attach handler to window.scroll event

    
})();

