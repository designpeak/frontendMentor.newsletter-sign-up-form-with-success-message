
function thankYou(email) {
   $(".container").css("display", "none");
   $(".containerTY").css("display", "flex");
   $("#emailText").text(email);
}

function displayError(){
    $("#email").addClass("errorInput");
    $(".error").css("display", "block");
}

$(document).ready(function() {
    $("#submitBtn").click(function() {
        let email = $("#email").val();
        if(email.length > 0 && email.indexOf("@") !== -1 && email.indexOf(".") !== -1) {
            thankYou(email);
        }else{
            displayError();
        }
    });
});