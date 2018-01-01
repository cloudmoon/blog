class SceneEnd {
    constructor() {

    }

    load(game) {
        let ctx = game.context
        ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
        ctx.font = '16px Arial'
        ctx.fillStyle = '#0095DD'
        let winText = game.win? '酷哦~ ' : ''
        ctx.fillText(winText + '按 r 重开', 200, 200)
        document.addEventListener('keydown', function restart(e) {
            if (e.key === 'r') {
                // game.trigger('scene:start', game, restart)
                window.location.reload()
            }
        })
    }
}
