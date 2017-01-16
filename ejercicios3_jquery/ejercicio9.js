$("#iniciar").click(function(){
    $("body").append($("<div style='background-color:blue;' id='myDiv'></div>").animate({width:"40px",height:"40px",left:"+=200","margin-left":"200px","background-color":"blue"},1000,function(){$("#myDiv").animate({"margin-top":"-100px"}).fadeOut();}));
});
