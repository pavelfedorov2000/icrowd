$(document).ready(function() {
    let menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__menu_active');
            });
        });

    // Pageup
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top+"px"}); // плавный скролл по ссылкам
        return false;
    });

    new WOW().init(); // для анимации блоков как только пользователь долистывает до их секции
});