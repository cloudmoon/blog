class Ball extends Material {
    constructor(src, speed=0, game) {
        super(src, speed, game)
        this.posX = 230
        this.posY = 239
        this.dx = speed
        this.dy = -speed
    }

    collision(game) {
        let blocks = game.blocks
        let ball = this
        for (let block of blocks) {
            for (let item of block) {
                if (item.lives) {
                    if (ball.posX > item.x && ball.posX < item.x + item.width && ball.posY > item.y && ball.posY < item.y + item.height) {
                        item.lives = 0
                        this.dy *= -1
                        game.score++
                        if (game.score === blocks.length * block.length) {
                            game.win = true
                            game.stop = true
                            game.trigger('scene:end', game)
                        }
                    }
                }
            }
        }
    }

    draw(game) {
        let ctx = game.context
        let cvs = game.canvas
        ctx.drawImage(this, this.posX, this.posY)
        this.posX += this.dx
        this.posY += this.dy
        let p = game.paddle

        this.collision(game)

        if (this.posX > cvs.width || this.posX < 0) {
            this.dx *= -1
        }
        if (this.posY < 0) {
            this.dy *= -1
        } else if (this.posY > cvs.height - 35) {
            if (this.posX > p.x && this.posX < p.x + p.width) {
                this.dy *= -1
            } else {
                if (this.posY > cvs.height) {
                    log('out')
                    game.stop = true
                    game.trigger('scene:end', game)
                }
            }
        }

        game.ball = {x: this.posX, y: this.posY}
        game.Ball = this
    }
}