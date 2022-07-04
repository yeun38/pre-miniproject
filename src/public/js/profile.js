// function inquire_info() {
//   $.ajax({
//     type: "GET",
//     url: "#",
//     data: {},
//     success: function (response) {
//       let rows = response["orders"];
//       for (let i = 0; i < rows.length; i++) {
//         let name = rows[i]["name"];
//         let birth = rows[i]["birth"];
//         let gender = rows[i]["gender"];
//         let img = rows[i]["formFile"]

//         $('name').val() = name
//         $('birth').val() = birth
//         $('gender').val() = gender
//         $('img').val() = img
//       }
//     },
//   });
// }

// function save_info() {
//   let profile_form = $("form[name=profile").serialize();

//   $.ajax({
//     type: "POST",
//     url: "/users",
//     data: { profile_form },
//     success: function (response) {
//       alert(response["msg"]);
//     },
//   });
// }

// console.log("here");