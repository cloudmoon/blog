class SceneTitle {
    constructor() {

    }

    load(game, func) {
        removeEvent('keydown', func)
        let ctx = game.context
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.font = '16px Arial'
        ctx.fillStyle = '#0095DD'
        ctx.fillText('按 f 开始游戏', 200, 100)
        document.addEventListener('keydown', function cool (e) {
            if (e.key === 'f') {
                game.trigger('scene:main', game, cool)
            }
        })
    }
}