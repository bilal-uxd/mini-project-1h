$(document).ready(function () {
  $("li").click(function () {
    $(this).hide();
  });

  $("#add").click(function () {
    const enterText = $("#input-text").val();
    console.log("enterText", enterText);
  });
});
