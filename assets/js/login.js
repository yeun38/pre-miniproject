function require_info() {
  let email = $("email").val();
  let pw = $("pw").val();

  $.ajax({
    type: "POST",
    url: "/users",
    data: { email_give: email, pw_give: pw },
    success: function (response) {
      alert(response["msg"]);
    },
  });
}
