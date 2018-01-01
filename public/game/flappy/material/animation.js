class Animation {
    constructor(scene, name, len) {
        this.frames = []
        for (let i = 0; i < len; i++) {
            let fName = name + (i + 1)
            let f = scene.imgByName(fName)
            this.frames.push(f)
            this.img = this.frames[0]
            this.framesIndex = 0
            this.refresh = 3
            this.framesCount = this.refresh
        }
    }

    setup(x, y, sx, sy) {
        this.x = x || 100
        this.y = y || 100
        this.sx = sx || this.img.width
        this.sy = sy || this.img.height
        this.flipX = false
        this.rotation = 0
        this.draw()
    }

    draw() {
        let ctx = game.context
        ctx.save()
        let w = this.sx / 2
        let h = this.sy / 2
        ctx.translate(this.x + w, this.y + h)
        if (this.flipX) {
            ctx.scale(-1, 1)
        }
        ctx.rotate(this.rotation * Math.PI / 180)
        ctx.translate(-w, -h)
        ctx.drawImage(this.img, 0, 0, this.sx, this.sy)
        ctx.restore()
    }

    update() {
        this.framesCount--
        if (this.framesCount === 0) {
            this.framesCount = this.refresh
            this.framesIndex = (this.framesIndex + 1) % this.frames.length
            this.img = this.frames[this.framesIndex]
        }
        this.move()
        this.draw()
    }

    move() {}
}

class Bird extends Animation{
    constructor(scene, name, len) {
        super(scene, name, len)
        this.refresh = 6
        this.speed = 5
        this.moveLeft = false
        this.moveRight = false
        this.moveUp = false
        this.moveDown = false
        this.vy = 0
    }

    isHit() {
        let pipes = game.pipe
        return pipes.collision(this)
    }

    isPass() {
        let pipes = game.pipe
        pipes.pass(this)
    }

    move() {
        if (this.isHit()) {
            game.trigger('end')
        }
        this.isPass()
        this.y += this.vy
        this.vy += 0.3
        if (this.rotation < 30) {
            this.rotation += 1
        }
        if (this.moveLeft === true) {
            this.x -= this.speed
            this.flipX = true
        }
        if (this.moveRight === true) {
            this.x += this.speed
            this.flipX = false
        }
        if (this.moveUp === true) {
            this.y -= this.speed
        }
        if (this.moveDown === true) {
            this.y += this.speed
        }
        if (this.x < 0 ) {
            this.x = 0
        }
        if (this.x > 500 - this.sx) {
            this.x = 500 - this.sx
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y > 500 - this.sy) {
            this.y = 500 - this.sy
        }
    }

}