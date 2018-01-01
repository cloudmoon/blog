class Paddle extends Material {
    constructor(src, speed=0, game) {
        super(src, speed, game)
        this.posX = 200
        this.posY = 270
        this.pressLeft = false
        this.pressRight = false
        this.init()
    }

    init() {
        let p = this
        document.addEventListener('keydown', function (e) {
            log('paddle move')
            if (e.key === 'a') {
                p.pressLeft = true
            }
            if (e.key === 'd') {
                p.pressRight = true
            }
        })

        document.addEventListener('keyup', function (e) {
            if (e.key === 'a') {
                p.pressLeft = false
            }
            if (e.key === 'd') {
                p.pressRight = false
            }
        })
    }

    draw(game) {
        let ctx = game.context
        if (this.pressLeft && this.posX > 0) {
            this.posX -= this.speed
        } else if (this.pressRight && this.posX + this.width < game.canvas.width) {
            this.posX += this.speed
        }
        ctx.drawImage(this, this.posX, this.posY)
        game.paddle = {x: this.posX, y: this.posY, width: this.width}
        game.Paddle = this
    }
}