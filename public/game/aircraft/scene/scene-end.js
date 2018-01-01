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
        ctx.fillText('嗨呀，按 R 重开',190 ,500)
        this.imgSetup()
    }

    bindControl() {
        document.addEventListener('keydown', function (e) {
            if (e.key === 'r') {
                window.location.reload()
            }
        })
    }
}