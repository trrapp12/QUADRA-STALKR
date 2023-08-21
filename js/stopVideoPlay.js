(() => {
    const playIcon = document.getElementById('play');
    const pauseIcon = document.getElementById('pause');
    const videoTag = document.getElementById('video');

    function togglePlay(el) {
        if(el.loop) {
            el.loop = false
         } else {
            el.loop = true
        }
    }
    const playButton = document.getElementById('play-pause').addEventListener('click', togglePlay)

})();
