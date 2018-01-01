class Sky {
    constructor(scene) {
        this.pics = []
        this.scene = scene
        this.speed = 0.5
    }

    setup() {
        for (let i = 0; i < 3; i++) {
            let pic = new GuaImage(this.scene, 'sky')
            pic.x =  i * 276
            pic.y = 391
            pic.setup(pic.x, pic.y)
            this.pics.push(pic)
        }
    }

    update() {
        for (let pic of this.pics) {
            pic.x -= this.speed
            if (pic.x < -276) {
                pic.x = 500
            }
            game.context.drawImage(pic.img, pic.x, pic.y)
        }
    }
}