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

});