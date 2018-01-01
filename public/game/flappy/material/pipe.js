class Pipe {
    constructor(scene) {
        this.pipes = []
        this.scene = scene
        this.speed = 3
        this.space = 126
        this.gap = 200
    }

    setup() {
        for (let i = 0; i < 3; i++) {
            let x = (60 + this.gap) * 3 + i * (60 + this.gap)
            let p1 = new GuaImage(this.scene, 'pipe', x, 0, 60, 320)
            p1.flipY = true
            let p2 = new GuaImage(this.scene, 'pipe', x, 0, 60, 320)
            this.reset(p1, p2)
            let temp = []
            temp.push(p1)
            temp.push(p2)
            this.pipes.push(temp)
        }
        this.draw()
    }

    reset(p1, p2) {
        p1.y = randomB(-230, 0)
        p2.y = p1.y + p1.sy + this.space
    }

    update() {
        for (let ps of this.pipes) {
            for (let p of ps) {
                p.x -= this.speed
                if (p.x < -(p.sx + this.gap)) {
                    p.x = (p.sx + this.gap) * 2
                    this.reset(ps[0], ps[1])
                }
            }
        }
        game.pipe = this
        this.draw()
    }

    collision(t) {
        for (let ps of this.pipes) {
            for (let p of ps) {
                let rect1 = t
                let rect2 = p
                let half1Width = rect1.sx / 2,
                    half1Height = rect1.sy / 2,
                    half2Width = rect2.sx / 2,
                    half2Height = rect2.sy / 2,
                    cen1 = {
                        x: rect1.x + half1Width,
                        y: rect1.y + half1Height
                    },
                    cen2 = {
                        x: rect2.x + half2Width,
                        y: rect2.y + half2Height
                    };

                if (Math.abs(cen2.x - cen1.x) <= half1Width + half2Width &&
                    Math.abs(cen2.y - cen1.y) <= half1Height + half2Height) {
                    return true
                }
            }
        }
        return false
    }

    pass(b) {
        let pipes = this.pipes
        if (b.x > pipes[0][0].x + pipes[0][0].sx) {
            game.score++
            let first = pipes.shift()
            pipes.push(first)
        }
    }


    draw() {
        let ctx = game.context
        for (let ps of this.pipes) {
            for (let p of ps) {
                ctx.save()
                let w = p.sx / 2
                let h = p.sy / 2
                ctx.translate(p.x + w, p.y + h)
                if (p.flipY) {
                    ctx.scale(1, -1)
                }
                // ctx.rotate(p.rotation * Math.PI / 180)
                ctx.translate(-w, -h)
                ctx.drawImage(p.img, 0, 0, p.sx, p.sy)
                ctx.restore()
            }
        }
    }
}