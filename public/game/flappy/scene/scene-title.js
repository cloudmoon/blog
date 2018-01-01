class SceneTitle extends Scene{
    constructor(images) {
        super(images)
    }

    bindControl() {
        document.addEventListener('keydown', function controlTitle(e) {
            game.controlsD.push(controlTitle)
            if (e.key === 'f') {
                game.trigger('main')
            }
        })
    }

    setup() {
        this.clear()
        let ctx = game.context
        ctx.font = '20px Arial'
        ctx.fillStyle = '#0095DD'
        ctx.fillText('按 F 开始游戏',190 ,500)
        let start = new GuaImage(this, 'title')
        start.setup(100, 200, 280, 260)
        start.draw()
    }
}