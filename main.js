const menuController = document.querySelector('.menu-controller')
const websiteShortcuts = document.querySelector('.website-shortcuts')


menuController.addEventListener('click', ()=>{
    websiteShortcuts.classList.contains('hidden') ? showMenu() : hideMenu()
    }
)

window.addEventListener('resize', ()=>{
    window.innerWidth > 800 ? showMenu() : hideMenu()
})

function showMenu() {
    websiteShortcuts.classList.remove('hidden')
    menuController.textContent = 'X'
}

function hideMenu () {
    websiteShortcuts.classList.add('hidden')
    menuController.textContent = 'MENU'
}