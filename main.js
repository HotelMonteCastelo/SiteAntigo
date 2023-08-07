const menuController = document.querySelector('.menu-controller')
const websiteShortcuts = document.querySelector('.website-shortcuts')


window.addEventListener('loadstart', renderMenuBasedOnScreenWidth())
window.addEventListener('resize', renderMenuBasedOnScreenWidth)

menuController.addEventListener('click', ()=>{
    websiteShortcuts.classList.contains('hidden') ? showMenu() : hideMenu()
    }
)

function showMenu() {
    websiteShortcuts.classList.remove('hidden')
    menuController.textContent = 'X'
}

function hideMenu () {
    websiteShortcuts.classList.add('hidden')
    menuController.textContent = 'MENU'
}

function renderMenuBasedOnScreenWidth() {
    window.innerWidth > 800 ? showMenu() : hideMenu()
}