const mainContentsContainer = document.querySelector('#content')
const navButtons = document.querySelectorAll('nav')

const menuItems = [
    {
        dishName: 'Bacon & Eggs',
        dishDescription: 'A classic! Delicious british smoked bacon with succulent eggs served on freshly made sourdough bread. Choose either fried, scrambled or poached.',
        dishImage: 'img/bacon-eggs.webp',
        dishPrice: '£12.50'
    }, {
        dishName: 'Pepperoni Pizza',
        dishDescription: 'A family favourite! a 13" rustic base topped with fresh mozzerella, with our secret tomato sauce base, topped with spicy pepperoni, red onion and red bell peppers.',
        dishImage: 'img/pizza.jpg',
        dishPrice: '£15'
    }, {
        dishName: 'Raspberry Cheesecake',
        dishDescription: 'Foor all you sweet tooths. Enjoy this creamy, yet light, cheesecake. It has a irresistible biscuit base, and freshly made raspberry top. Served with fresh double cream',
        dishImage: 'img/cheesecake.png',
        dishPrice: '£7.50'
    }
]

// Loads the homepage by default
document.addEventListener('DOMContentLoaded', () => {
    createHomeContents()
} )

// Changes pages
navButtons.forEach(nav => {
    nav.addEventListener('click', e => {
        if (e.target.matches('.home-button')) {
            removeContents()        
            createHomeContents()
        } else if (e.target.matches('.menu-button')) {
            removeContents()        
            createMenuContents()
        } else if (e.target.matches('.contact-button')) {
            removeContents()        
            createContactContents()
        }
    })
})

// Creates the home page
function createHomeContents() {
    const header = document.createElement('header')
    const paragraph = document.createElement('div')
    const image = document.createElement('img')
    mainContentsContainer.append(header)
    header.textContent = '// Code[Cafe]'
    image.src = 'img/building.png'
    image.style.width = '300px'
    image.style.height = '200px'

    mainContentsContainer.append(paragraph)
    paragraph.classList.add('boxes')
    paragraph.setAttribute('id', 'home')
    paragraph.innerHTML = 
        'Welcome to CodeCafe. This quirky cafe based in Lee-on-Solent, is a great place for fellow coders to get together, collaborate and taste great food and drink. We offer a varierty of food, so there\'ll be something to eat for everyone.'
    paragraph.append(image)
}

// Creates the menu page
function createMenuContents() {
    const header = document.createElement('header')
    mainContentsContainer.append(header)
    header.textContent = 'Menu'
    for (let i = 0; i < menuItems.length; i++) {
        createMenuItems(menuItems[i].dishName, menuItems[i].dishDescription, menuItems[i].dishImage, menuItems[i].dishPrice)
    }
}

// Creates the menu items
function createMenuItems(dishName, dishDescription, dishImage, dishPrice) {
    const dishCard = document.createElement('div')
    const dishNameContainer = document.createElement('div')
    const dishDescriptionContainer = document.createElement('div')
    const dishImageContainerParent = document.createElement('div')
    const dishImageContainer = document.createElement('img')
    const dishPriceContainer = document.createElement('div')
    
    dishNameContainer.textContent = dishName
    dishDescriptionContainer.textContent = dishDescription
    dishImageContainer.src = dishImage
    dishImageContainerParent.classList.add('dish-image')
    dishPriceContainer.textContent = dishPrice
    dishNameContainer.classList.add('name')
    dishDescriptionContainer.classList.add('description')
    dishPriceContainer.classList.add('price')

    mainContentsContainer.appendChild(dishCard)
    dishCard.classList.add('boxes') 
    dishCard.appendChild(dishNameContainer)
    dishCard.appendChild(dishPriceContainer)
    dishCard.appendChild(dishDescriptionContainer)
    dishCard.appendChild(dishImageContainerParent)
    dishImageContainerParent.appendChild(dishImageContainer)
}

function createContactContents() {
    const header = document.createElement('header')    
    mainContentsContainer.append(header)
    header.textContent = 'Contact Us'

    const bodyContainer = document.createElement('div')
    bodyContainer.classList.add('contact-body-container')
    const bodyOne = document.createElement('div')
    bodyOne.classList.add('body-one')
    const mapTitle = document.createElement('header')
    mapTitle.textContent = 'Where to find us'
    const mapImage = document.createElement('img')
    mapImage.src = 'img/map.png'
    const bodyTwo = document.createElement('div')
    bodyTwo.classList.add('body-two')
    const OpenHoursTitle = document.createElement('header')
    OpenHoursTitle.textContent = 'Opening Hours'
    const OpenHoursInfo = document.createElement('div')
    OpenHoursInfo. innerHTML = 
        'Monday: 09:00 - 17:00<br>Tuesday: 09:00 - 17:00<br>Wednesday: 09:00 - 17:00<br>Thursday: 09:00 - 17:00<br>Friday: 09:00 - 17:00<br>Saturday: 10:00 - 19:00<br>Sunday: 10:00 - 19:00<br>'
    
    mainContentsContainer.appendChild(bodyContainer)
    
    bodyContainer.append(bodyOne)
    bodyContainer.append(bodyTwo)
    bodyOne.append(mapTitle)
    bodyOne.append(mapImage)
    bodyTwo.append(OpenHoursTitle)
    bodyTwo.append(OpenHoursInfo)
}

// Removing every child of an array
function removeContents() {
    const contentElements = document.getElementById('content')            
    while (contentElements.firstChild) {
        contentElements.removeChild(contentElements.lastChild)
  }
}