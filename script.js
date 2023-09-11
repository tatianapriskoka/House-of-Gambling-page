const columnOne = document.querySelectorAll('#first .column');
const columnTwo = document.querySelectorAll('#second .column');
const columnThree = document.querySelectorAll('#third .column');
const burgerMenu = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
const homePage = document.querySelector('.home');
const btnLanguage = document.querySelector('.btn-lang')



window.addEventListener('resize', () => {
    if (window.screen.width < 992) {
        columnOne.forEach((item) => item.setAttribute('src', './icon/drow.svg'))
        columnTwo.forEach((item) => item.setAttribute('src', './icon/worldrow.svg'))
        columnThree.forEach((item) => item.innerHTML = `<img src="./icon/row.svg" alt="row">
                                                    <img src="./icon/crown.svg" alt="crown">`)
    }
    else {
        columnOne.forEach((item) => item.setAttribute('src', './icon/d.svg'))
        columnTwo.forEach((item) => item.setAttribute('src', './icon/world.svg'))
        columnThree.forEach((item) => item.innerHTML = `<img src="./icon/column.svg" alt="column">
                                                    <img src="./icon/crown.svg" alt="Crown">`)
    }
})

burgerMenu.addEventListener('click', function (event) {
    event.preventDefault();
    navBar.classList.toggle('hidden')
    homePage.classList.toggle('hidden')
    burgerMenu.classList.toggle('button_close');
})

btnLanguage.addEventListener('click', () => {
    if (btnLanguage.textContent === 'RU') {
        btnLanguage.textContent = 'EN'
    } else {
        btnLanguage.textContent = 'RU'
    }
})
