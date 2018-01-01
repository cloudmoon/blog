class Fire extends Material{
    constructor(src, option) {
        super(src, option)
        this.speed = [-1, -2, -3, 1, 2, 3]
        this.dx = this.speed[randomB(0, 6)]
        this.dy = this.speed[randomB(0, 6)]
        this.scaleX = 8
        this.scaleY = 8
        this.life = 15
    }

    setup() {
        this.update = function () {}
    }

    update() {
        game.context.drawImage(this, this.posx, this.posy, this.scaleX, this.scaleY)
        this.posx += this.dx
        this.posy += this.dy
        this.dx *= 0.8
        this.dy *= 0.8
        this.life--
        if (this.life === 0) {
            this.remove()
        }
    }

    remove() {
        let index = game.sceneMain.addedImg.findIndex(e => e === this)
        game.sceneMain.addedImg.splice(index, 1)
    }
}


class Particles {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.number = 20
        this.particles = []
    }

    setup() {

    }

    update() {
        if (this.particles.length < this.number) {
            let fire = game.sceneMain.imgs['fire']
            let src = fire.src
            let option = fire.option
            let p = new Fire(src, option)
            p.posx = this.x
            p.posy = this.y
            this.particles.push(p)
            game.sceneMain.addImg(p)
        }

        if (this.particles === this.number) {
            this.remove()
        }
    }

    remove() {
        let index = game.sceneMain.addedImg.findIndex(e => e === this)
        game.sceneMain.addedImg.splice(index, 1)
    }


}