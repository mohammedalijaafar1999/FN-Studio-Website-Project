var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: "-jM-ICsBX3I",
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
        playerVars: {
            controls: 1,
            autoplay: 0,
        },
    });
}

function onPlayerReady(event) { }

function onPlayerStateChange(event) { }

function playVideo(id) {
    player.loadVideoById({ videoId: id, startSeconds: 0 });
}

window.addEventListener('DOMContentLoaded', function () {

    // nissan video
    document.getElementById("nissan-video").addEventListener("click", function () {
        $(".work-video-overlay").toggleClass('active');
        playVideo('2wJ7qPepV9M');
    });

    // kifah video
    document.getElementById("kifah-video").addEventListener("click", function () {
        $(".work-video-overlay").toggleClass('active');
        playVideo('f85ZdgsTXQk');
    });

    // e3 video
    document.getElementById("e3-video").addEventListener("click", function () {
        $(".work-video-overlay").toggleClass('active');
        playVideo('qPj6PUKKeAE');
    });

    //overlay player
    document.getElementById("video-overlay").addEventListener("click", function () {
        $(".work-video-overlay").toggleClass('active');
        player.stopVideo();
    });

});