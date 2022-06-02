$(function () {

    $(".1Q").click(function () { 
    if ($(this).hasClass("active")) { 
      $(".R-1Q").addClass("d-block").removeClass("d-none");
      $(".R-2Q").addClass("d-none").removeClass("d-block");
      $(".R-3Q").addClass("d-none").removeClass("d-block");
      $(".R-4Q").addClass("d-none").removeClass("d-block");
    } 
  });
  
  $(".2Q").click(function () { 
    if ($(this).hasClass("active")) { 
      $(".R-2Q").addClass("d-block").removeClass("d-none");
      $(".R-1Q").addClass("d-none").removeClass("d-block");
      $(".R-3Q").addClass("d-none").removeClass("d-block");
      $(".R-4Q").addClass("d-none").removeClass("d-block");
    } 
  });
  
  $(".3Q").click(function () { 
    if ($(this).hasClass("active")) { 
      $(".R-3Q").addClass("d-block").removeClass("d-none");
      $(".R-1Q").addClass("d-none").removeClass("d-block");
      $(".R-2Q").addClass("d-none").removeClass("d-block");
      $(".R-4Q").addClass("d-none").removeClass("d-block");
    } 
  });
  
  $(".4Q").click(function () { 
    if ($(this).hasClass("active")) { 
      $(".R-4Q").addClass("d-block").removeClass("d-none");
      $(".R-1Q").addClass("d-none").removeClass("d-block");
      $(".R-2Q").addClass("d-none").removeClass("d-block");
      $(".R-3Q").addClass("d-none").removeClass("d-block");
    } 
  });
  
  $(".1Q").click(function () { 
    if ($(this).hasClass("active")) { 
      $(".R-1Q").addClass("d-block").removeClass("d-none");
      $(".R-2Q").addClass("d-none").removeClass("d-block");
      $(".R-3Q").addClass("d-none").removeClass("d-block");
      $(".R-4Q").addClass("d-none").removeClass("d-block");
    } 
  });
  


});