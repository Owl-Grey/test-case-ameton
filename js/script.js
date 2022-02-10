var current = 1
$(document).ready(function() {
  $(".slider").each(function () {
    var obj = $(this);
    $(obj).append("<div class='nav'></div>");
  });
});
function slideNext (sl,cur) {
  console.log(cur)
  var ul = $(sl).find("ul");
  var bl = $(sl).find("li");
  var step = $(bl).width();
  bl.eq(cur-1).clone().appendTo(ul);
  $(ul).animate({marginLeft: "-"+((step+24)*cur)}, 500);
  

}
$(document).on("click", ".slider .nav", function() {
  var sl = $(this).closest(".slider");
  var ul = $(sl).find("ul");
  var bl = $(sl).find("li");
  slideNext(sl,current);
  current++;

  return false;
});
