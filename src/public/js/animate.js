const wrap = document.querySelector('.wrap');
// 헤더
const header = document.querySelector('header');
let h_top = header.offsetTop;
// 웨더
const weatherBar = document.querySelector('#weather');
let weather_top = weatherBar.offsetTop;

window.onscroll = function () {
    header_sticky()
};

function header_sticky() {
    if (!weatherBar) {
        if (window.scrollY > h_top) {
            if (!header.classList.contains('fixed')) {
                header.classList.add('fixed')
                wrap.style.paddingTop = header.clientHeight + 'px'
            }
        } else {
            if (header.classList.contains('fixed')) {
                header.classList.remove('fixed')
                wrap.style.paddingTop = '0px'
            }
        }
    } else {
        if (window.scrollY > h_top + weather_top) {
            if (!header.classList.contains('fixed')) {
                header.classList.add('fixed')
                weatherBar.classList.add('fixed')
                weatherBar.style.top = header.clientHeight + "px";
                wrap.style.paddingTop = header.clientHeight + weatherBar.clientHeight + 'px'
            }
        } else {
            if (header.classList.contains('fixed')) {
                header.classList.remove('fixed')
                weatherBar.classList.remove('fixed')
                weatherBar.style.top = "0px";
                wrap.style.paddingTop = '0px'
            }
        }

    }
}
