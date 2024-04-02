export function makeAboutPage() {
    const aboutElement = document.createElement('div')
    aboutElement.classList.add('aboutpage')

    const h1Element = document.createElement('h1')
    h1Element.textContent = 'Welcome to our about page!'

    aboutElement.appendChild(h1Element)

    return aboutElement
}
