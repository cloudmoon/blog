class Cloud extends Material{
    constructor(src, option) {
        super(src, option)
    }

    setup() {
        this.posx = this.gOption.x
        this.posy = this.gOption.y
        this.speed = 1
        game.context.drawImage(this, this.posx, this.posy, this.scaleX, this.scaleY)
    }

    update() {
        this.posy += this.speed
        if (this.posy > 600) {
            this.posy = -150
        }
    }
}