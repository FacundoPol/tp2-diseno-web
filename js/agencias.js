$(function()
{
    $(".flip-card").on("click",function(){
        $(this).toggleClass("girar");
    });
});

$(function(){

    $(".rating .star").on("click", function(){

        let valor = $(this).data("value");

        let contenedor = $(this).parent();

        contenedor.find(".star").removeClass("active");

        contenedor.find(".star").each(function(){

            if($(this).data("value") <= valor){
                $(this).addClass("active");
            }

        });

    });

});