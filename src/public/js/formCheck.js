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
  const pw1=document.querySelector('#pw').value;
  const pw2=document.querySelector('#pw2').value;
  const pw_wrong = document.querySelector(".pw-wrong");
  if(pw1 === pw2 && pw1.length > 0){
    // 비밀번호 동일
    pw_wrong.classList.add('empty-text');
  } else if (pw1.length > 0 && pw2.length > 0){
    pw_wrong.classList.remove('empty-text');
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
  if(document.querySelector('.img-preview')){
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
}