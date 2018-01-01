class Bullet extends Material{
    constructor(src, option) {
        super(src, option)
        this.speed = 9
        this.scaleX= 10
        this.scaleY = 18
    }

    setup() {
        this.update = function () {}
    }

    update() {
        this.isHit()
        game.context.drawImage(this, this.posx, this.posy, this.scaleX, this.scaleY)
        this.posy -= this.speed
        if (this.posy < -60) {
            this.remove()
        }
    }

    remove() {
        let index = game.sceneMain.addedImg.findIndex(e => e === this)
        game.sceneMain.addedImg.splice(index, 1)
    }

    isHit() {
        let es = game.enemies
        for (let e of es) {
            let result = e.collision(this)
            if (result) {
                e.reset(e.posx, e.posy)
                this.remove()
                game.score++
            }
        }
    }
}
