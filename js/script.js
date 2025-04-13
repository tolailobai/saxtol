// создаем переменные с запросами по селектору (по классу)
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeOver = document.querySelector('.menu__overlay'),
    closeMenuItem = document.querySelector('.menu__text');

// создаем отслеживание (по клику) - выезд меню
hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

// создаем реакцию на нажатие на крестик - закрытие меню
closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
})
// создаем реакцию на нажатие Overlay - закрытие меню
closeOver.addEventListener('click', () => {
    menu.classList.remove('menu_active');
})
// создаем реакцию на нажатие пункта меню - закрытие меню
closeMenuItem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
})


// код для работы шкалы в зависимости от заданного числа процентов в html
// const perc = document.querySelectorAll('.scales__item-perc'),
//     lines = document.querySelectorAll('.scales__item-bottom span');

// console.log(perc);
// console.log(lines);

// perc.forEach((item, i) => {
//     lines[i].style.width = item.innerHTML;
// })

// $(document).ready(function(){
//     new Glide('.glide', {
//         type: 'carousel',
//         startAt: 0,
//         perView: 1
//     }).mount()
// });

// new Glide('.glide', {
//     type: 'carousel',
//     startAt: 1,
//     perView: 1,
//     autoplay: 5000,
//     animationDuration: 2000,
//     perTouch: 1,
// }).mount()

// PageUp
$(document).ready(function(){

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
        $('.pageUp').fadeIn();
        } else {
        $('.pageUp').fadeOut();
        }
    });


    $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.sidepanel-moving').fadeIn();
        } else {
        $('.sidepanel-moving').fadeOut();
        }
    });
});
// Смена цвета у элемента SidePanel
// $(window).scroll(function() {
// if ($(this).scrollTop() > 1600) {
//     $('.pageUp').fadeIn();
// } else {
//     $('.pageUp').fadeOut();
// }
// });