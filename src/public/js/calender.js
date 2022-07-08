
flatpickr("#date", {
    "locale": "ko",
    "defaultDate": getTimeCal()
});
flatpickr("#date_birth", {
    "locale": "ko",
    "defaultDate": "2001-01-01" 
});
if(document.querySelector('#date_birth')){
    const birth_el = document.querySelector('#date_birth');
    birth_el.addEventListener('focus', function(){
        birth_el.classList.remove('empty-text')
    })
}

function zeroCal(num){
    return (num < 10) ? num="0"+num : num;
}
function getTimeCal(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const isday = (hour>=12)?'pm':'am';
    const time = `
        ${year}-${zero(month)}-${zero(day)}
    `;
    return time;
}