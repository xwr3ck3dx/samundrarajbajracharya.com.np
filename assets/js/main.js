$(document).ready(function(){
    $("#content").on('wheel',function(){
        $("#content").click();
    })
    $("#content").click(function(){
        console.log("success");
        if($("#overlay").hasClass('translate') && $("#content").hasClass('translate')){
            // $("#overlay").removeClass('translate');
            // $("#content").removeClass('translate');
            // $("#clip").removeClass('translate');
        }
        else{
            $("#overlay").addClass('translate');
            $("#content").addClass('translate');
            $("#clip").addClass('translate');
            $("#menu").addClass('translate');
        }
    })
    $("#overlay").click(function(){
        if($("#overlay").hasClass('translate') && $("#content").hasClass('translate')){
            $("#overlay").removeClass('translate');
            $("#content").removeClass('translate');
            $("#clip").removeClass('translate');
            $("#menu").removeClass('translate');
        }
        else{
            // $("#overlay").addClass('translate');
            // $("#content").addClass('translate');
            // $("#clip").addClass('translate');
        }
    });
    $("#menu").click(function(){
        if($("#overlay").hasClass('translate') && $("#content").hasClass('translate')){
            // $("#overlay").removeClass('translate');
            // $("#content").removeClass('translate');
            // $("#clip").removeClass('translate');
        }
        else{
            $("#overlay").addClass('translate');
            $("#content").addClass('translate');
            $("#clip").addClass('translate');
            $("#menu").addClass('translate');
        }

    })




})