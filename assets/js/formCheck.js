function emailCheck() {
  const email_el = document.querySelector('input[name="email"]');
  const email_wrong = document.querySelector(".email-wrong");
  email_el.addEventListener("focusout", function () {
    const value = email_el.value;
    if (value.indexOf("@") > 0) {
      email_wrong.innerHTML="";
      email_wrong.classList.add('hidden')
    } else {
      email_wrong.innerHTML="올바른 메일 형식이 아닙니다."
      email_wrong.classList.remove('hidden')
    }
  });
}
function pwCheck(){
  const pw1=document.querySelector('#pw1').value;
  const pw2=document.querySelector('#pw2').value;
  const pw_wrong = document.querySelector(".pw-wrong");
  if(pw1 === pw2 && pw1.length > 0){
    pw_wrong.classList.add('hidden')
    // 비밀번호 수정하는 post
    alert('동일')
  } else {
    pw_wrong.textContent="비밀번호를 확인해주세요."
    pw_wrong.classList.remove('hidden')
  }
}
function fileChange(){
  const fileInput = document.querySelector('.fileInput');
  const fileName = document.querySelector('.file-name');
  fileName.textContent=""
  if(fileInput.files.length > 3){
    return alert('이미지 업로드는 3장까지 가능합니다.')
  }
  const files=Array.from(fileInput.files)
  files.forEach((e, idx)=>{
    if(idx > 0){
      fileName.innerHTML += "<br>"
    }
    fileName.innerHTML += e.name+" ";
  })
  filePreview(fileInput.files[0])
}


function filePreview(file){
  let reader = new FileReader();
  const imgPreview = document.querySelector('.img-preview');
  // console.log(imgPreview.style.backgroundImage);
  console.log(imgPreview);

  console.log(reader);
  reader.onload=(e)=>{
    imgPreview.src = e.target.result;
  }
  reader.readAsDataURL(file);
}