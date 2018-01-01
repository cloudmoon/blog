class Ground {
    constructor(scene) {
        this.lands = []
        this.scene = scene
        this.speed = 3
    }

    setup() {
        for (let i = 0; i < 3; i++) {
            let land = new GuaImage(this.scene, 'land')
            land.x =  i * 336
            land.y = 500
            land.setup(land.x, land.y)
            this.lands.push(land)
        }
    }

    update() {
        for (let land of this.lands) {
            land.x -= this.speed
            if (land.x < -336) {
                land.x = 500
            }
            game.context.drawImage(land.img, land.x, land.y)
        }
    }

}