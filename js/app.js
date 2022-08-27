
// for menu section
let menuIcon = document.querySelector('.menuIcon');
let navMainWrap = document.querySelector('.navMainWrap');
let navCloseIcon = document.querySelector('.navCloseIcon');
let navLink = document.querySelectorAll('.navLink');

menuIcon.onclick = function(){
    menuIcon.classList.toggle('active');
    navMainWrap.classList.toggle('active');
}

navCloseIcon.onclick = function(){
    menuIcon.classList.remove('active');
    navMainWrap.classList.remove('active');
}

for(let i = 0; i < navLink.length; i++){
    navLink[i].onclick = function(){
        let j = 0;
        while(j < navLink.length){
            navLink[j++].className = 'navLink';
        }
        navLink[i].className = 'navLink active';
        menuIcon.classList.toggle('active');
        navMainWrap.classList.toggle('active');
    }
};

// for header section
let headingMainWrap = document.querySelector('.headingMainWrap');

window.addEventListener('scroll', function(){
    headingMainWrap.classList.toggle('sticky', window.scrollY > 350);
});

let body = document.querySelector('body');

let dayNightBtns = document.querySelector('.dayNightBtns');

dayNightBtns.onclick = function(){
    body.classList.toggle('dark');
    dayNightBtns.classList.toggle('active');
}

let themeColor = document.querySelectorAll('.themeColor');

themeColor[0].onclick = function(){
    body.classList.add('themeColor0');
    body.classList.remove('themeColor1');
    body.classList.remove('themeColor2');
    body.classList.remove('themeColor3');
    body.classList.remove('themeColor4');
}

themeColor[1].onclick = function(){
    body.classList.remove('themeColor0');
    body.classList.add('themeColor1');
    body.classList.remove('themeColor2');
    body.classList.remove('themeColor3');
    body.classList.remove('themeColor4');
}

themeColor[2].onclick = function(){
    body.classList.remove('themeColor0');
    body.classList.remove('themeColor1');
    body.classList.add('themeColor2');
    body.classList.remove('themeColor3');
    body.classList.remove('themeColor4');
}

themeColor[3].onclick = function(){
    body.classList.remove('themeColor0');
    body.classList.remove('themeColor1');
    body.classList.remove('themeColor2');
    body.classList.add('themeColor3');
    body.classList.remove('themeColor4');
}

themeColor[4].onclick = function(){
    body.classList.remove('themeColor0');
    body.classList.remove('themeColor1');
    body.classList.remove('themeColor2');
    body.classList.remove('themeColor3');
    body.classList.add('themeColor4');
}

let settingsBtn = document.querySelector('.settingsBtn');
let themeColorWrap = document.querySelector('.themeColorWrap');
let themeMainWrap = document.querySelector('.themeMainWrap');

settingsBtn.onclick = function(){
    themeColorWrap.classList.toggle('active');
    themeMainWrap.classList.toggle('active');
}

// script for typing text
var typed = new Typed('.typing1', {
    strings: ["freelancher", "web developer", "web designer", "graphic designer"],
    typeSpeed: 30,
    backSpeed: 0,
    cursorChar: ' |',
    // fadeOut: true,
    loop: true
});

// for about section menu
// for adding class List
let abutMenuLinks = document.querySelectorAll('.abutMenuLinks');
let aboutContentHeading = document.querySelector('.aboutContentHeading');
let aboutMainContentHeading = document.querySelector('.aboutMainContentHeading');

for(let i = 0; i < abutMenuLinks.length; i++){
    abutMenuLinks[i].onclick = function(){
        let j = 0;
        while(j < abutMenuLinks.length){
            abutMenuLinks[j++].className = 'abutMenuLinks';
        }
        abutMenuLinks[i].className = 'abutMenuLinks active';
        let thisText = abutMenuLinks[i].innerHTML;
        aboutContentHeading.innerHTML = thisText;
        aboutMainContentHeading.innerHTML = thisText;
    }
};