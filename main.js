



$(document).ready(function(){
    $(".reg-button").on("click",function(){
        $(".registration-form").slideDown(1000);
        $(".login-form").slideUp();

        $(".user-form>h1").text("New  User Resigtration");


    });
    
    $(".login-button").on("click",function(){
        $(".registration-form").slideUp();
        $(".login-form").slideDown(1000);

        $(".user-form>h1").text("Hey, Login to your Dashboard");
    });





    // eye ball open and close, text/password swap
    var isEyeOpen = false;
    $(".single-input-field i").on("click",function(){

        if(isEyeOpen == false){
            $(".single-input-field i").removeClass("fa-eye-slash").addClass("fa-eye");
            $(".single-input-field input").attr("type","text");
            isEyeOpen = true;
        }else{
            $(".single-input-field i").addClass("fa-eye-slash").removeClass("fa-eye");
            $(".single-input-field input").attr("type","password");
            isEyeOpen = false;
        }
        
    });



    // minimum 8 characters ruiwuired in the input box
    $(".single-input-field input").on("keyup",function(){
        var inputFieldValue = $(".single-input-field input").val();
        if(inputFieldValue.length < 8){
            $(".registration-form p").slideDown(300);
        }else{
            $(".registration-form p").slideUp(300);
        }
    });
    
    
    
    
    
    
    
});