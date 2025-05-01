document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('.wrapper-menu').style.display = 'block';
})
document.querySelector('.wrapper-menu__close').addEventListener('click', () => {
    document.querySelector('.wrapper').style.display = 'block';
    document.querySelector('.wrapper-menu').style.display = 'none';
})