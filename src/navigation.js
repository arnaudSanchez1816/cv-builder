const MODE_EDIT = "Edit"
const MODE_CUSTOMIZE = "Customize"

class Navigation {
    #mode

    constructor(startMode) {
        this.#mode = startMode
    }

    set mode(value) {
        this.#mode = value
    }

    get mode() {
        return this.#mode
    }
}

export { Navigation, MODE_EDIT, MODE_CUSTOMIZE }
