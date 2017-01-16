$("#uno").click(function(){$("div").animate({"margin-left":"20px"},800);$("div").fadeOut();$("div").fadeIn();$("div").slideDown();});
$("#dos").click(function(){$("div").clearQueue().stop();$("div").finish();});
