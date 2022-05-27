document.addEventListener('DOMContentLoaded', function(){
    function tabs(tab, mainBlock, tabBlock, activeClass) {
        let dataTab = tab.dataset.tab;
        let block = document.querySelectorAll(mainBlock + " " + tabBlock)
        
        block.forEach(function(item) {
            item.classList.remove(activeClass);
            if(item.dataset.tab == dataTab){
                item.classList.add(activeClass);
                return false
            }
        });
        return false;
    }

    let tabsItems = document.querySelectorAll(".tabs__item");
    tabsItems.forEach(item => item.addEventListener('click', () => tabs(item, "#tabs", ".tabs__tab", "tabs__tab_active")));

    let hamburgerIcon = document.getElementById('hamburger-menu-icon');
    let hamburgerCloseIcon = document.getElementById('hamburger-menu-close');

    if(hamburgerIcon){
        hamburgerIcon.addEventListener("click", () => showHamburgerMenu('hamburger-menu', "hamburger-menu_active"), false);
    }

    if(hamburgerCloseIcon){
        hamburgerCloseIcon.addEventListener("click", () => closeHamburgerMenu('hamburger-menu', "hamburger-menu_active"), false);
    }

    function showHamburgerMenu(menu, activeClass) {
        let hamburgerMenu = document.getElementById(menu);
        hamburgerMenu.classList.add(activeClass);
    }

    function closeHamburgerMenu(menu, activeClass) {
        let hamburgerMenu = document.getElementById(menu);
        hamburgerMenu.classList.remove(activeClass);
    }

});