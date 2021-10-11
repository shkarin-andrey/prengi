'use strict';
window.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          close = document.querySelector('.menu__close');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.add('hamburger_active');

        if (hamburger.classList.contains('hamburger_active')) {
            menu.classList.add('menu_active');
            document.body.style.overflow = 'hidden';
        }
    });

    close.addEventListener('click', () => {
        closeMenu();
    });

    function closeMenu() {
        menu.classList.remove('menu_active');
        hamburger.classList.remove('hamburger_active');
        document.body.style.overflow = 'visible';
    }



    const tabs = document.querySelectorAll('.industries__tab'),
          slideImg = document.querySelectorAll('.industries__slider__img'),
          prev = document.querySelector('.slider__prev'),
          next = document.querySelector('.slider__next');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            removeActive();
            tabs[i].classList.add('industries__tab_active');
            slideImg[i].classList.add('industries__slider_active');
        });

        
    }
    
    prev.addEventListener('click', () => {
        if (tabs[0].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[5].classList.add('industries__tab_active');
            slideImg[5].classList.add('industries__slider_active');
        } else if (tabs[5].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[4].classList.add('industries__tab_active');
            slideImg[4].classList.add('industries__slider_active');
        } else if (tabs[4].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[3].classList.add('industries__tab_active');
            slideImg[3].classList.add('industries__slider_active');
        } else if (tabs[3].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[2].classList.add('industries__tab_active');
            slideImg[2].classList.add('industries__slider_active');
        } else if (tabs[2].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[1].classList.add('industries__tab_active');
            slideImg[1].classList.add('industries__slider_active');
        } else {
            removeActive();
            tabs[0].classList.add('industries__tab_active');
            slideImg[0].classList.add('industries__slider_active');
        }
    });

    next.addEventListener('click', () => {
        if (tabs[0].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[1].classList.add('industries__tab_active');
            slideImg[1].classList.add('industries__slider_active');
        } else if (tabs[1].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[2].classList.add('industries__tab_active');
            slideImg[2].classList.add('industries__slider_active');
        } else if (tabs[2].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[3].classList.add('industries__tab_active');
            slideImg[3].classList.add('industries__slider_active');
        } else if (tabs[3].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[4].classList.add('industries__tab_active');
            slideImg[4].classList.add('industries__slider_active');
        } else if (tabs[4].classList.contains('industries__tab_active')) {
            removeActive();
            tabs[5].classList.add('industries__tab_active');
            slideImg[5].classList.add('industries__slider_active');
        } else {
            removeActive();
            tabs[0].classList.add('industries__tab_active');
            slideImg[0].classList.add('industries__slider_active');
        }
    });

    function removeActive() {
        for (let i = 0; i < tabs.length; i++) { 
            tabs[i].classList.remove('industries__tab_active');
            slideImg[i].classList.remove('industries__slider_active');
        }  
    }
});
