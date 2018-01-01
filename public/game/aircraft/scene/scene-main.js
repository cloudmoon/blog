class SceneMain extends Scene{
    constructor(images) {
        super(images)
    }

    bindControl() {
        document.addEventListener('keydown', function controlMainDown (e) {
            game.controlsD.push(controlMainDown)
            let player = game.Player
            if (e.key === 'a') {
                player.left = true
            }
            if (e.key === 'w') {
                player.moveUp = true
            }
            if (e.key === 's') {
                player.moveDown = true
            }
            if (e.key === 'd') {
                player.right = true
            }
            if (e.key === 'j') {
                player.attack = true
            }
        })
        document.addEventListener('keyup', function controlMainUp (e) {
            game.controlsU.push(controlMainUp)
            let player = game.Player
            if (e.key === 'a') {
                player.left = false
            }
            if (e.key === 'w') {
                player.moveUp = false
            }
            if (e.key === 's') {
                player.moveDown = false
            }
            if (e.key === 'd') {
                player.right = false
            }
            if (e.key === 'j') {
                player.attack = false
            }
        })

    }

    fill() {
        this.clear()
        let ctx = game.context
        ctx.fillStyle = '#cceeff'
        ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)
        this.score()
    }

    setup() {
        this.imgSetup()
        game.sceneMain = this
        this.update()
    }

    score() {
        let ctx = game.context
        ctx.font = '26px Arial'
        ctx.fillStyle = '#ff9900'
        ctx.fillText('Score: ' + game.score, 8, 30)
    }
}