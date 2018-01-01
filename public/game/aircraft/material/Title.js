class Title extends Material{
    constructor(src, option) {
        super(src, option)
    }

    setup() {
        this.posx = this.gOption.x
        this.posy = this.gOption.y
        game.context.drawImage(this, this.posx, this.posy, this.scaleX, this.scaleY)
    }

    update() {

    }
}