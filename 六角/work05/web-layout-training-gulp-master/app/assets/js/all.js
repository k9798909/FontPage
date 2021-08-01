$(document).ready(() => {
  $(".footerShowBtn").click(function () {
    $(".footerShowBtn").data("show", !$(".footerShowBtn").data("show"))
    $(".footerShowBtn").attr("data-show", $(".footerShowBtn").data("show"))
    $(".viewModal .footerShow").toggle($(".footerShowBtn").data("show"))
  })
});