class Enemy extends Material{
    constructor(src, option) {
        super(src, option)
        this.scaleX = 50
        this.scaleY = 50
    }

    setup() {
        this.speed = randomB(2, 7)
        this.posx = randomB(20, 390)
        this.posy = -500
        game.enemies.push(this)
        game.context.drawImage(this, this.posx, this.posy, this.scaleX, this.scaleY)
    }

    update() {
        this.posy += this.speed
        if (this.posy > 620) {
            this.posy = -111
            this.posx = randomB(20, 390)
            this.speed = randomB(2, 5)
        }
    }

    reset(x, y) {
        this.posy = -111
        this.posx = randomB(20, 390)
        this.speed = randomB(3, 9)
        this.ps = new Particles(x, y)
        game.sceneMain.addImg(this.ps)
    }

    collision(t) {
        let rect1 = t
        let rect2 = this
        let half1Width = rect1.scaleX / 2,
            half1Height = rect1.scaleY / 2,
            half2Width = rect2.scaleX / 2,
            half2Height = rect2.scaleY / 2,
            cen1 = {
                x: rect1.posx + half1Width,
                y: rect1.posy + half1Height
            },
            cen2 = {
                x: rect2.posx + half2Width,
                y: rect2.posy + half2Height
            };

        return Math.abs(cen2.x - cen1.x) <= half1Width + half2Width &&
            Math.abs(cen2.y - cen1.y) <= half1Height + half2Height;
    }
}