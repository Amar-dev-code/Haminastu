$(document).ready(function () {
    $("#messenger-copyrightsec").click(function () {
        var win = window.open('http://m.me/112536423857236', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });


    $("#insta-copyrightsec").click(function () {
        var win = window.open('https://www.instagram.com/assignmentsoul/', '_blank');
            if (win) {
                //Browser has allowed it to be opened
                win.focus();
            } else {
                //Browser has blocked it
                alert('Please allow popups for this website');
            }
        });

    $("#fb-page-link").click(function () {
        var win = window.open('https://www.facebook.com/Assignment-Soul-112536423857236/', '_blank');
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
    });


    //$("#email-submit").click(function () {
    //    var EmailID = $("#inputIconEx1").val();

    //    if (EmailID) {
    //        if (!validateEmail(EmailID)) {
    //            if ($(".validation-email").length === 0) {
    //                $("#inputIconEx1").addClass("error");
    //                $("#inputIconEx1").parent().before("<div class='validation-email'>Please enter valid email address</div>");

    //            }
    //            $("#inputIconEx1").focus();
    //        } else {
    //            sendEmail(EmailID);
    //            $(".validation-email").remove();
    //            $("#inputIconEx1").removeClass("error");
    //        }
    //    } else {
    //        $(".validation-email").remove();
    //        $("#inputIconEx1").removeClass("error");
    //    }
    //});

    $("#inputIconEx1").blur(function () {
        var EmailID = $("#inputIconEx1").val();
        if (EmailID) {
            if (!validateEmail(EmailID)) {
                if ($(".validation-email").length === 0) {
                    $("#inputIconEx1").addClass("error");
                    $("#inputIconEx1").parent().before("<div class='validation-email'>Please enter valid email address</div>");

                }
                $("#inputIconEx1").focus();
            } else {
                sendEmail(EmailID);
                $(".validation-email").remove();
                $("#inputIconEx1").removeClass("error");
            }
        } else {
            $(".validation-email").remove();
            $("#inputIconEx1").removeClass("error");
        }
    });

});



function sendEmail(EmailID) {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "arpit.gupta.osv@gmail.com",
            Password: "$$+2_B9-h2SWJa@K=rkW",
            To: 'instinct225@gmail.com',
            From: EmailID,
            Subject: "New Request",
            Body: "Hi Assignment Soul,"
                + "Please find the requirements details below: Email ID: " + EmailID
        }
        );
}

//-------------------------------------------------Function Validate Email---------------------------------------------------
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}