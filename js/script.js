// accordion

const itemsAccordion = document.querySelectorAll('.questions__accordion');

itemsAccordion.forEach(itemAccordion => {
    itemAccordion.addEventListener("click", () => {
        itemAccordion.classList.toggle("active");
    })
})


// burger

const burgerEL = document.querySelector('.burger')
const headerNav = document.querySelector('.header__nav')

if (burgerEL) {
    const body = document.body

    burgerEL.addEventListener('click', () => {
        burgerEL.classList.toggle('burger--active')
        body.classList.toggle('stop-scroll')
        headerNav.classList.toggle('header__nav--mobile')
    })
}


// filter

const filterButtons = document.querySelectorAll('.catalog__nav-button');
const catalogItems = document.querySelectorAll('.catalog__item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('catalog__nav-button--active'));
        button.classList.add('catalog__nav-button--active');

        const selectedCategory = button.dataset.category;

        catalogItems.forEach(item => {
            const category = item.querySelector('.card').dataset.category;

            if (selectedCategory === 'all' || category === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })
})