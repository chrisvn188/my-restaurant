export function createElement(type, props, ...children) {
    const el = document.createElement(type)
    if (props) {
        for (let key in props) {
            el.setAttribute(key, props[key])
        }
    }
    if (children.length > 0) {
        el.append(...children)
    }
    return el
}
