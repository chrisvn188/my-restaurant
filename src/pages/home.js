import {
    createCustomElement,
    setAttributes,
    createImage,
} from '../utilities/element'
import HomeHero from '../assets/home-hero.jpg'

const HomeManager = (function () {
    const heroImage = createImage({ src: HomeHero, class: 'hero-image' })
    return { heroImage }
})()

export function makeHomePage() {
    const { heroImage } = HomeManager
    const homeElement = createCustomElement({
        tag: 'div',
        class: 'homepage',
        children: [heroImage],
    })

    return homeElement
}
