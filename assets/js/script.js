// accordion

document.querySelectorAll('.accrodion__questions').forEach(header => {
    header.addEventListener('click', () => {
        const parent = header.closest('.questions__accordion');

        // Переключение класса открытия
        parent.classList.toggle('questions__accordion--open');
    });
});


// burger

const burgerEL = document.querySelector('.burger')
const headerNav = document.querySelector('.menu')

if (burgerEL) {
    const body = document.body

    burgerEL.addEventListener('click', () => {
        burgerEL.classList.toggle('burger--active')
        body.classList.toggle('stop-scroll')
        headerNav.classList.toggle('menu--mobile')
    })
}


// filter

const filterButtons = document.querySelectorAll('.catalog__nav-button');
const catalogItems = document.querySelectorAll('.catalog__item');

filterButtons.forEach(button => {
    const selectedCategory = button.dataset.category;
    let hasItems = false;

    catalogItems.forEach(item => {
        const category = item.querySelector('.card').dataset.category;
        if (selectedCategory === 'all' || category === selectedCategory) {
            hasItems = true;
        }
    });

    if (!hasItems) {
        button.classList.add('catalog__nav-button--disabled');
        button.disabled = true;
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('catalog__nav-button--disabled')) return;

        filterButtons.forEach(btn => {
            btn.classList.remove('catalog__nav-button--active');
        });

        button.classList.add('catalog__nav-button--active');

        const selectedCategory = button.dataset.category;

        catalogItems.forEach(item => {
            const category = item.querySelector('.card').dataset.category;

            if (selectedCategory === 'all' || category === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
