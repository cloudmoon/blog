class SceneMain {
    constructor(images) {
        this.images = images
        this.imgs = {}
    }

    init(game, func) {
        let ctx = game.context
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        removeEvent('keydown', func)
        this.load(game)
    }

    load(game) {
        let images = this.images
        let s = this
        let loads = []
        let names = Object.keys(images)
        for (let item of names) {
            let material = images[item]
            let img = new material.type(material.src, material.speed, game)
            img.onload = function() {
                // 存入 s.images 中
                s.imgs[item] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                if (loads.length === names.length) {
                    s.game = game
                    s.draw()
                }
            }
        }
    }

    score(game) {
        let ctx = game.context
        ctx.font = '16px Arial'
        ctx.fillStyle = '#0095DD'
        ctx.fillText('Score: ' + game.score, 8, 20)
    }

    draw() {

        let game = this.game
        let images = this.imgs
        if (game.stop) {
            window.cancelAnimationFrame(game.raf)
            return
        }
        let ctx = game.context
        ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
        ctx.fillStyle = '#ddd'
        ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)

        let names = Object.keys(images)
        for (let name of names) {
            images[name].draw(game)
        }

        this.score(game)
        let s = this
        game.raf = window.requestAnimationFrame(function () {
            s.draw()
        })
    }

}
