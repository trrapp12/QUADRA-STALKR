(() => {
    console.log('inverted firing')
    const mouseHouse = document.getElementById('mouseHouse');
    console.log(mouseHouse)

    document.addEventListener('mousemove', (e) => {
        console.log('mousemove')
        let x = e.pageX;
        let y = e.pageY;
        mouseHouse.style.left = `${x - 50}px`;
        mouseHouse.style.top = `${y - 50}px`
    })

    document.addEventListener('mouseleave', (e) => {
        console.log('mouseleave')
        let x = e.pageX;
        let y = e.pageY;
        mouseHouse.style.left = `${x - 50}px`
        mouseHouse.style.top = `${y - 50}px`
    })
})()

// inspiration for code taken from https://codepen.io/nocni_sovac/pen/eYJQEbd