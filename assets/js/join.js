// function emailcheck() {
//   const email_el = document.querySelector('input[name="email"]');
//   // const email_wrong = document.querySelector(".email-wrong");
//   email_el.addEventListener("focusout", function () {
//     const value = email_el.value;
//     if (value.indexOf("@") == -1) {
//       alert("올바른 형식이 아닙니다.");
//     } else {
//       alert("사용할 수 있습니다.");
//     }
//   });
// }

function emailcheck() {
  let email = $("#email").val();
  if (email.includes("@")) {
    console.log("hi");
  } else {
    console.log("bye");
  }
}
