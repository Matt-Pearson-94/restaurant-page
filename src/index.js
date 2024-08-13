const mainContentsContainer = document.querySelector('#content')
const navButtons = document.querySelectorAll('nav')

// Loads the homepage by default
document.addEventListener('DOMContentLoaded', () => {
    createHomeContents()
} )

loadPage = 'home'


navButtons.forEach(nav => {
    nav.addEventListener('click', e => {
        if (e.target.matches('.home-button')) {
            removeContents()        
            createHomeContents()
        } else if (e.target.matches('.menu-button')) {
            removeContents()        
            createMenuContents()

        }
    })
})

function createHomeContents() {
    const header = document.createElement('header')
    const paragraph = document.createElement('div')

    // mainContents.classList.add('main-contents')
    mainContentsContainer.append(header)
    header.textContent = '// Code[Cafe]'
    mainContentsContainer.append(paragraph)
    paragraph.classList.add('home-paragraph')
    paragraph.innerHTML = 
        'Welcome to CodeCafe. This quirky cafe based in Lee-on-Solent, is a great place for fellow coders to get together, collaborate and taste great food and drink. We offer a varierty of food, so there\'ll be something to eat for everyone.'

}

function createMenuContents() {
    const header = document.createElement('header')
    const paragraph = document.createElement('div')
    mainContentsContainer.append(header)
    header.textContent = 'Menu'
    mainContentsContainer.append(paragraph)
    paragraph.classList.add('home-paragraph')
    paragraph.innerHTML = 
        'Winner winner chicken dinner'

}




// Removing every child of an array
function removeContents() {
    const contentElements = document.getElementById('content')            
    while (contentElements.firstChild) {
        contentElements.removeChild(contentElements.lastChild)
  }
}