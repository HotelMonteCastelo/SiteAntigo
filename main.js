const menuController = document.querySelector('.menu-controller')
const websiteShortcuts = document.querySelector('.website-shortcuts')


window.addEventListener('loadstart', renderMenuBasedOnScreenWidth())
window.addEventListener('resize', renderMenuBasedOnScreenWidth)

menuController.addEventListener('click', ()=>{
    if (websiteShortcuts.classList.contains('hidden-menu-options')) {
        showMenu()
    } else if (websiteShortcuts.classList.contains('revealed-menu-options')) {
        hideMenu()
    }
}
)

function showMenu() {
    websiteShortcuts.classList.add('revealed-menu-options')
    websiteShortcuts.classList.remove('hidden-menu-options')
    menuController.textContent = 'X'
}

function hideMenu () {
    websiteShortcuts.classList.add('hidden-menu-options')
    websiteShortcuts.classList.remove('revealed-menu-options')
    menuController.textContent = 'MENU'
}

function renderMenuBasedOnScreenWidth() {
    window.innerWidth > 800 ? showMenu() : hideMenu()
}