import './style.css'
import { makeHomePage } from './pages/home'
import { makeMenuPage } from './pages/menu'
import { makeAboutPage } from './pages/about'

const contentElement = document.getElementById('content')
const tabs = document.querySelectorAll('.tab')

document.addEventListener('DOMContentLoaded', () => {
    const homePage = makeHomePage()
    contentElement.appendChild(homePage)
})

tabs.forEach((tabElement) => {
    tabElement.addEventListener('click', (e) => {
        // remove all children from contentElement
        while (contentElement.lastElementChild) {
            contentElement.removeChild(contentElement.lastElementChild)
        }

        const textContent = e.target.textContent
        let currentPage
        switch (textContent) {
            case 'Home':
                currentPage = makeHomePage()
                break
            case 'Menu':
                currentPage = makeMenuPage()
                break
            case 'About':
                currentPage = makeAboutPage()
                break
        }
        contentElement.appendChild(currentPage)
    })
})
