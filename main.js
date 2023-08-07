const menuController = document.querySelector('.menu-controller')
const websiteShortcuts = document.querySelector('.website-shortcuts')


window.addEventListener('loadstart', renderMenuBasedOnScreenWidth())
window.addEventListener('resize', renderMenuBasedOnScreenWidth)

menuController.addEventListener('click', ()=>{
    if (websiteShortcuts.classList.contains('visible-menu-options')){
        hideMenu()
    } else if (websiteShortcuts.classList.contains('hidden-menu-options')) {
        showMenu()
    }
    }
)

function showMenu() {
    websiteShortcuts.classList.add('visible-menu-options')
    websiteShortcuts.classList.remove('hidden-menu-options')
    menuController.textContent = 'X'
}

function hideMenu () {
    websiteShortcuts.classList.add('hidden-menu-options')
    websiteShortcuts.classList.remove('visible-menu-options')
    menuController.textContent = 'MENU'
}

function renderMenuBasedOnScreenWidth() {
    window.innerWidth > 800 ? showMenu() : hideMenu()
}