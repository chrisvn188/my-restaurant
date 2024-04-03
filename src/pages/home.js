import { createElement } from '../utilities'
import HomeHero from '../assets/home-hero.jpg'

const HomeManager = (function () {
    const heroImage = createElement('img', {
        src: HomeHero,
        class: 'hero-image',
    })
    const welcomeSection = createElement(
        'section',
        {
            class: 'welcome-section',
        },
        createElement('h2', null, 'Welcome.'),
        createElement(
            'p',
            { class: 'paragraph' },
            'Step into the world of the Little Banh Mi Canada at @market707 Dundas Street West, where we bring the revolutionary global brand’s Viet Banh Mi experience to the heart of Toronto. Enjoy our classic Vietnamese Banh Mi for the perfect pick-me-up or a refreshing Vietnamese iced coffee, and let our lovely Banh Mi offer a serene escape back to the bygone days of Subsidy-Period Hanoi.'
        )
    )
    const hourSection = createElement(
        'section',
        { class: 'hour-section' },
        createElement('h2', null, 'Open Hours.'),
        createElement(
            'ul',
            { class: 'hour-list' },
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Mon'),
                createElement('span', { class: 'hour' }, '11am - 5pm')
            ),
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Tue'),
                createElement('span', { class: 'hour' }, '11am - 5pm')
            ),
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Wed'),
                createElement('span', { class: 'hour' }, '11am - 5pm')
            ),
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Thu'),
                createElement('span', { class: 'hour' }, '11am - 5pm')
            ),
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Fri'),
                createElement('span', { class: 'hour' }, '11am - 5pm')
            ),
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Sat'),
                createElement('span', { class: 'hour' }, '11am - 5pm')
            ),
            createElement(
                'li',
                { class: 'hour-item' },
                createElement('span', { class: 'day' }, 'Sun'),
                createElement('span', { class: 'hour' }, 'Closed')
            )
        )
    )
    return { heroImage, welcomeSection, hourSection }
})()

export function makeHomePage() {
    const { heroImage, welcomeSection, hourSection } = HomeManager
    const homeElement = createElement(
        'div',
        { class: 'homepage' },
        heroImage,
        welcomeSection,
        hourSection
    )

    return homeElement
}
