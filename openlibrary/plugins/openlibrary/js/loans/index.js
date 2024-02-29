export function initLoans() {
  $(function() {
    $("a.leave").on('click', function() {
      var title = $(this).parents("tr").find(".book").text();
      $("#leave-waitinglist-dialog strong").text(title);
      $("#leave-waitinglist-dialog")
          .data("origin", $(this))
          .dialog("open");
    });
  });
}
