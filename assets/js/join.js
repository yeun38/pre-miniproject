function save_info() {
  let join_form = $("form[name=join").serialize();

  $.ajax({
    type: "POST",
    url: "/users",
    data: { join_form },
    success: function (response) {
      alert(response["msg"]);
    },
  });
}
