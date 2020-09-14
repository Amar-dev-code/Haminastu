$(document).ready(function () {

    //$("#myModal").modal('show');

    var counter = 0;

    $("#displaymodal").click(function () {
        $('.modal-body').load('OrderForm.html', function () {
            $('#myModal').modal({ show: true });
        });
       
        //$("#myModal").load("OrderForm.html").dialog({ modal: true });
    });

    //$('.md-step').addClass('active');

    $('.close').click(function () {
        location.reload();
    });

});

//window.onscroll = function () {
//    var currentScrollPos = window.pageYOffset;
//    var scrollAmount = 150;
//    var $id = $("#faq-div");
//    var pos = $id.offset().top;

//    if (currentScrollPos > 2000 && currentScrollPos < 2200) {
//        window.scrollTo(0, currentScrollPos + scrollAmount);
//        //$("#main-navbar").slideUp();
//    } else {
//        $("#main-navbar").slideDown();
//    }
//}