class SceneEnd extends Scene{
    constructor(images) {
        super(images)
    }

    setup() {
        window.cancelAnimationFrame(game.raf)
        this.clear()
        let ctx = game.context
        ctx.font = '20px Arial'
        ctx.fillStyle = '#0095DD'
        ctx.fillText('得分：' + game.score + '   按 R 重开',160 ,500)
        let end = new GuaImage(this, 'end')
        end.setup(160, 230, 280, 260)
        end.draw()
    }

    bindControl() {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'r') {
                window.location.reload()
            }
        })
    }
}