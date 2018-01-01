class GuaImage {
    constructor(scene, name, x, y, sx, sy) {
        this.img = scene.imgByName(name)
        this.setup(x, y, sx, sy)
    }

    setup(x, y, sx, sy) {
        this.x = x || 0
        this.y = y || 0
        this.sx = sx || this.img.width
        this.sy = sy || this.img.height
        this.flipY = false
        this.rotation = 0
    }

    draw() {
        game.context.drawImage(this.img, this.x, this.y, this.sx, this.sy)

    }
}




