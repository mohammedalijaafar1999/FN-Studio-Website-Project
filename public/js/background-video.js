// changes the video based on device width

window.addEventListener('DOMContentLoaded', function () {
    var backgroundVideoSource = document.getElementById("background-video");
    var w = window.innerWidth;
    if (w < 600) {
        backgroundVideoSource.pause();
        backgroundVideoSource.setAttribute('src', './public/videos/peview for website low rez without text.mp4');
        backgroundVideoSource.load();
        backgroundVideoSource.play();
    } else {
        backgroundVideoSource.pause();
        backgroundVideoSource.setAttribute('src', './public/videos/peview for website low rez.mp4');
        backgroundVideoSource.load();
        backgroundVideoSource.play();
    }
});
