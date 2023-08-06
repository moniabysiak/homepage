const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open')
})