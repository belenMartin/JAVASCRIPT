$("#pass").change(function(){
    if($("#pass").val().length < 5){
        $("#mensaje").html("no segura");
    }else if($("#pass").val().length > 5 && $("#pass").val().length < 8){
        $("#mensaje").html("medianamente segura");
    }else if($("#pass").val().length > 8){
        $("#mensaje").html("segura");
    }
});
