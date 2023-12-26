document.addEventListener('DOMContentLoaded', ()=>{

    const burgerbtn = document.querySelector('.burger-btn');
    if (burgerbtn) {
        const mobileMenu = document.querySelector('.header__mobile-menu');
        burgerbtn.addEventListener('click', (e)=>{
            if (e.target.classList.contains('active')) {
                CloseMenu(mobileMenu);
            } else {
                OpenMenu(mobileMenu);
            }
        })
        const closeMenuBtn = document.querySelector('.close-menu');

        closeMenuBtn.addEventListener('click', ()=>{
            CloseMenu(mobileMenu)
        });
    }

    function CloseMenu(mobileMenu) {
        mobileMenu.classList.remove('active');
        burgerbtn.classList.remove('active');

    }
    
    function OpenMenu(mobileMenu) {
        mobileMenu.classList.add('active');
        burgerbtn.classList.add('active');
    }


    const commandSlider = new Swiper('.command__swiper', {
        slidesPerView: 1,
        navigation: {
            prevEl: '.command__prev-slide',
            nextEl: '.command__next-slide'
        }, 
        breakpoints: {
            1: {
                slidesPerView: 1.05, 
            },
            920: {
                slidesPerView: 1, 
            }
        }
    })

});