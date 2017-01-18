$(document).ready(function(){
  $.ajax({error:function(xhr,status,error){
            $("body").html(status+": "+error);
        },success:function(xhr,status,result){          
            $("table").append("<tr><th>"+xhr.correo1.remitente+"</th></tr><tr><td>"+xhr.correo1.destinatario+"</td></tr><tr><td><i>"+xhr.correo1.asunto+"</i></td></tr>");
            $("table").append("<tr><th>"+xhr.correo2.remitente+"</th></tr><tr><td>"+xhr.correo2.destinatario+"</td></tr><tr><td><i>"+xhr.correo2.asunto+"</i></td></tr>");
            $("table").append("<tr><th>"+xhr.correo3.remitente+"</th></tr><tr><td>"+xhr.correo3.destinatario+"</td></tr><tr><td><i>"+xhr.correo3.asunto+"</i></td></tr>");
            $("tr").effect("slide");
        },type:"get",url:"correo.json"
  });
  //setTimeout(arguments.callee,1000);
});