function check(form) {
  if (form.userid.value == "test" && form.userpw.value == "1234") {
    window.open("../index.html");
  } else {
    alert("not correct");
  }
}
