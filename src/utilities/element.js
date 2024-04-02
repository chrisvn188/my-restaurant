export function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key])
    }
}

export function createCustomElement(info) {
    const { tag, textContent, children, ...props } = info
    const el = document.createElement(tag)
    if (textContent) el.textContent = textContent
    if (children && children.length > 0) {
        children.forEach((child) => el.append(child))
    }
    setAttributes(el, props)
    return el
}

export function createImage(info) {
    const { src, ...props } = info
    const image = new Image()
    image.src = src
    setAttributes(image, props)
    return image
}
