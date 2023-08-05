const menuController = document.querySelector('.menu-controller')
const websiteShortcuts = document.querySelector('.website-shortcuts')


menuController.addEventListener('click', ()=>{
    if (websiteShortcuts.classList.contains('hidden')) {
        websiteShortcuts.classList.remove('hidden')
    }
    else {
        websiteShortcuts.classList.add('hidden')
    }
})