import $ from "jquery"

$.fn.RegisterTabBar = function (id) {
  var $ele = $(this);
  if ($ele.prop("tagName") && $ele.prop("tagName").toLowerCase() == "ul" && id != undefined) {
      $ele.attr("data-style-id", id);
      $("<style type='text/css'></style>").attr("id", id).appendTo($("body"));
      $ele.find("li").on("click", function () {
          var $li = $(this),
              CurrentIndex = $ele.find(".active").removeClass("active").index(),
              ClickedIndex = $li.addClass("active").index();

          function SetStyle($ele, $li, IsToLeft) {
              var ID = $ele.attr("data-style-id");
              if (ID == undefined) return;
              if ($ele.width() <= 0) {
                  setTimeout(function () { SetStyle($ele, $li, IsToLeft); }, 300);
                  return;
              }

              $("style#" + ID).text(
                  "ul[data-style-id='" + ID + "']:before { " +
                      "left: " + ($li.position().left) + "px !important; " +
                      "right: " + ($ele.width() - $li.position().left - $li.outerWidth()) + "px !important; " +
                      "-webkit-transition: left " + (IsToLeft ? ".45s" : ".8s") + ", right " + (IsToLeft ? ".9s" : ".3s") + " !important; " +
                      "transition: left " + (IsToLeft ? ".45s" : ".8s") + ", right " + (IsToLeft ? ".9s" : ".3s") + " !important; " +
                  "} "
              );
          }
          SetStyle($ele, $li, ClickedIndex < CurrentIndex);
      });
  }
  return $ele;
}