class Game {
    constructor() {
        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
        this.actions = {}
        this.controlsD = []
        this.controlsU = []
        this.score = 0
    }

    register(key, callback) {
        this.actions[key] = this.actions[key] || []
        this.actions[key].push(callback)
    }

    trigger(key, ...args) {
        this.actions[key] &&
        this.actions[key].forEach(callback => callback(...args))
    }

    off(key) {
        delete this.actions[key]
    }

    removeControl() {
        let d = this.controlsD
        for (let i of d) {
            document.removeEventListener('keydown', i)
            d.pop()
        }
        let u = this.controlsU
        for (let i of u) {
            document.removeEventListener('keyup', i)
            u.pop()
        }
    }
}

