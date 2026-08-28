document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('.js-click').length) {
        let buttons = document.querySelectorAll('.js-click');
        buttons.forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('.js-block[data-id="' + item.dataset.id + '"]').classList.add('-active')
                document.querySelector('.js-overlay').classList.add('-active')
            })
        });
    }

    if (document.querySelectorAll('.js-close').length) {
        let closeBtns = document.querySelectorAll('.js-close');
        closeBtns.forEach(item => {
            item.addEventListener('click', () => {
                document.querySelector('.js-block[data-id="' + item.dataset.id + '"]').classList.remove('-active')
                document.querySelector('.js-overlay').classList.remove('-active')
            })
        });
    }

    if (document.querySelectorAll('.js-overlay').length) {
        let overlay = document.querySelectorAll('.js-overlay');
        overlay.forEach(item => {
            item.addEventListener('click', () => {
                let blocks = document.querySelectorAll('.js-block')
                blocks.forEach(block => {
                    block.classList.remove('-active');
                });
                document.querySelector('.js-overlay').classList.remove('-active')
            })
        });
    }
});