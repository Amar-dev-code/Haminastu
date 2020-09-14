$(document).ready(function () {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img-modal");
    $(".img-sample").click(function () {


        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });

    $(".close").click(function () {
        modal.style.display = "none";
    });

});