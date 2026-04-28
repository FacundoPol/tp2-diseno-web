$(".filtro").click(function () {
  let c = $(this).data("cat");
  $(".filtro")
    .removeClass("btn-primary active-filter")
    .addClass("btn-outline-primary");
  $(this)
    .removeClass("btn-outline-primary")
    .addClass("btn-primary active-filter");
  if (c == "all") {
    $(".noticia").show();
  } else {
    $(".noticia").hide();
    $("." + c).show();
  }
});

$("#agregar").click(function () {
  let n = $("#nombre").val().trim();
  let t = $("#texto").val().trim();
  if (n != "" && t != "") {
    $("#listaComentarios").prepend(
      '<div class="comentario"><strong>' +
        n +
        "</strong><p>" +
        t +
        "</p></div>",
    );
    $("#nombre").val("");
    $("#texto").val("");
  }
});

function revelar() {
  $(".oculto").each(function () {
    let top = $(this).offset().top;
    let s = $(window).scrollTop();
    let h = $(window).height();
    if (s + h > top + 50) {
      $(this).addClass("mostrar");
    }
  });
}
$(window).on("scroll load", revelar);
