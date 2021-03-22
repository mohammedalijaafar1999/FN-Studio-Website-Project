var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var ameenPlayer;
var baraaPlayer;

var aranos1Player;
var aranos2Player;
var aranos3Player;

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

    baraaPlayer = new YT.Player("baraa-player", {
        height: "390",
        width: "640",
        videoId: "dxidaZbl3Ls",
        events: {
            onReady: onPlayerReady2,
            onStateChange: onPlayerStateChange2,
        },
        playerVars: {
            controls: 1,
            autoplay: 0,
        },
    });

    ameenPlayer = new YT.Player("ameen-player", {
        height: "390",
        width: "640",
        videoId: "HdD4JFCsI18",
        events: {
            onReady: onPlayerReady2,
            onStateChange: onPlayerStateChange2,
        },
        playerVars: {
            controls: 1,
            autoplay: 0,
        },
    });

    aranos1Player = new YT.Player("aranos1-player", {
        height: "390",
        width: "640",
        videoId: "zzQmD2n3xOQ",
        events: {
            onReady: onPlayerReady2,
            onStateChange: onPlayerStateChange2,
        },
        playerVars: {
            controls: 1,
            autoplay: 0,
        },
    });

    aranos2Player = new YT.Player("aranos2-player", {
        height: "390",
        width: "640",
        videoId: "MSUNdD3GnkE",
        events: {
            onReady: onPlayerReady2,
            onStateChange: onPlayerStateChange2,
        },
        playerVars: {
            controls: 1,
            autoplay: 0,
        },
    });

    aranos3Player = new YT.Player("aranos3-player", {
        height: "390",
        width: "640",
        videoId: "1Hs3guHULPo",
        events: {
            onReady: onPlayerReady3,
            onStateChange: onPlayerStateChange2,
        },
        playerVars: {
            controls: 1,
            autoplay: 0,
        },
    });
}

function onPlayerReady2(event) {
    document.getElementById("defaultOpen").click();
}

function onPlayerReady3(event) {
    document.getElementById("defaultOpen").click();
}

function onPlayerStateChange2(event) { }

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