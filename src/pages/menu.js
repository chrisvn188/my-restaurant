export function makeMenuPage() {
    const menuElement = document.createElement('div')
    menuElement.classList.add('menupage')

    const h1Element = document.createElement('h1')
    h1Element.textContent = 'Welcome to our menu page!'

    menuElement.appendChild(h1Element)

    return menuElement
}
