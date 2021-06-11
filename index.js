const storageName = 'dark-mode-attribute'

let darkMode = 0

function setUp(toggle, value = 'dark', attribute = 'class', canvas = document.body, forceValue = undefined) {

    toggle.onclick = () => {

        darkMode ^= true

        switch(attribute) {
            case 'class':
                if(darkMode)
                    canvas.classList.add(value)
                else
                    canvas.classList.remove(value)
                break

            default:
                if(darkMode) canvas.setAttribute(attribute, value)
                else canvas.removeAttribute(attribute)
        }

        updateStorage()
    }

    if(forceValue != undefined) {

        if(forceValue) toggle.click()

    } else {

        let savedState = localStorage.getItem(storageName)

        if(savedState) {
            savedState = Number(savedState)
            if(savedState) toggle.click()
        } else {
            const preference = window.matchMedia('(prefers-color-scheme: dark)')
            if(preference.matches) toggle.click()
        }
    }
}

function updateStorage() {
    localStorage.setItem(storageName, encodeURIComponent(darkMode))
}

exports.setUp = setUp