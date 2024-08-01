(() => {
    const el1 = document.querySelectorAll('.mission-div').addEventListener('touchstart', (evt) => {
        evt.target.classList.toggle('.mission-div-touch')
    })
})()