function openCategory(evt, categoryName) {


    ameenPlayer.stopVideo();
    baraaPlayer.stopVideo();

    aranos1Player.stopVideo();
    aranos2Player.stopVideo();
    aranos3Player.stopVideo();

    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";

    AOS.refresh();
}


window.addEventListener('DOMContentLoaded', function () {
    document.getElementById("defaultOpen").click();
});
