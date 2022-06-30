flatpickr("#date", {
    "locale": "ko"
});
flatpickr("#date_birth", {
    "locale": "ko",
    "defaultDate": "2001-01-01" 
});
const birth_el = document.querySelector('#date_birth');
birth_el.addEventListener('focus', function(){
    birth_el.classList.remove('empty-text')
})