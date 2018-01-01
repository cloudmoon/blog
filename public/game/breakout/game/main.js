class Game {

    constructor(selector) {
        this.canvas = document.querySelector(selector)
        this.context = this.canvas.getContext('2d')
        this.actions = {}
        this.ball = {}
        this.score = 0
        this.paddle = {}
        this.blocks = []
        this.raf = null
        this.win = false
        this.stop = false
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
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
}
