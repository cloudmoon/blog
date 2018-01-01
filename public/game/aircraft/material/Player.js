class Player extends Material{
    constructor(src, option) {
        super(src, option)
    }

    setup() {
        this.posx = 190
        this.posy = 500
        this.speed = 7
        this.right = false
        this.left = false
        this.moveDown = false
        this.moveUp = false
        this.attack =false
        this.cooldown = 0
        game.Player = this
        game.context.drawImage(this, this.posx, this.posy, this.scaleX, this.scaleY)
    }

    fire() {
        if (this.cooldown) {
            this.cooldown--
            return
        }
        this.cooldown = 12
        let x = this.posx + this.width / 3
        let y = this.posy - 23
        let src = game.sceneMain.imgs['bullet'].src
        let option = game.sceneMain.imgs['bullet'].option
        let b = new Bullet(src, option)
        b.posx = x
        b.posy = y
        game.sceneMain.addImg(b)
    }

    update() {
        this.isBeaten()
        if (this.right) {
            if (this.posx < 500 - this.width) {
                this.posx += this.speed
            }
        }
        if (this.left) {
            if (this.posx > 0) {
                this.posx -= this.speed
            }
        }
        if (this.moveDown) {
            if (this.posy < 600 - this.height) {
                this.posy += this.speed
            }
        }
        if (this.moveUp) {
            if (this.posy > 0) {
                this.posy -= this.speed
            }
        }
        if (this.attack) {
            this.fire()
        }
    }

    isBeaten() {
        let es = game.enemies
        for (let e of es) {
            let result = e.collision(this)
            if (result) {
                game.trigger('end')
            }
        }
    }
}
